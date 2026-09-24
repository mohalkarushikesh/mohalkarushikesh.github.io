#!/usr/bin/env python3
"""
Local preview builder — approximates the GitHub Pages Jekyll build using
python-liquid, so the site can be viewed without Ruby. Output -> _site/.
The canonical build is still GitHub Pages; this is a convenience preview.
"""
import os, re, shutil, html
from datetime import datetime, date
import yaml
from liquid import Environment

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "_site")

# ---------- load config ----------
with open(os.path.join(ROOT, "_config.yml"), encoding="utf-8") as f:
    CFG = yaml.safe_load(f)

SITE = {
    "title": CFG.get("title", ""),
    "description": CFG.get("description", ""),
    "url": CFG.get("url", ""),
    "baseurl": CFG.get("baseurl", "") or "",
    "email": CFG.get("email", ""),
    "lang": CFG.get("lang", "en"),
    "social": CFG.get("social", {}),
    "time": datetime.now(),
    "data": {},
    "posts": [],
}

# ---------- data files ----------
for name in ("projects", "resume"):
    p = os.path.join(ROOT, "_data", f"{name}.yml")
    if os.path.exists(p):
        with open(p, encoding="utf-8") as f:
            SITE["data"][name] = yaml.safe_load(f)

# ---------- front matter split ----------
FM_RE = re.compile(r"^﻿?---\s*\n(.*?)\n---\s*\n?(.*)$", re.S)
def split_front_matter(text):
    m = FM_RE.match(text)
    if not m:
        return {}, text
    fm = yaml.safe_load(m.group(1)) or {}
    return fm, m.group(2)

# ---------- posts ----------
POSTS_DIR = os.path.join(ROOT, "_posts")
for fn in sorted(os.listdir(POSTS_DIR)):
    if not fn.endswith(".html"):
        continue
    with open(os.path.join(POSTS_DIR, fn), encoding="utf-8") as f:
        fm, body = split_front_matter(f.read())
    slug = fn[11:-5]  # strip YYYY-MM-DD- and .html
    d = fm.get("date")
    if isinstance(d, str):
        d = datetime.strptime(d[:10], "%Y-%m-%d").date()
    post = dict(fm)
    post["date"] = d
    post["slug"] = slug
    post["url"] = f"/blogs/{slug}/"
    post["content"] = body
    post["excerpt"] = body
    SITE["posts"].append(post)
SITE["posts"].sort(key=lambda p: p["date"], reverse=True)

# ---------- Liquid env + custom filters ----------
env = Environment(autoescape=False)

def relative_url(v):
    v = str(v)
    if v.startswith("/"):
        v = v[1:]
    if not v:
        return "."
    return v

def absolute_url(v):
    return SITE["url"] + relative_url(v)

def date_to_xmlschema(v):
    if isinstance(v, (datetime, date)):
        return v.isoformat()
    return str(v)

def number_of_words(v):
    return len(re.sub(r"<[^>]+>", " ", str(v)).split())

for nm, fn in (("relative_url", relative_url), ("absolute_url", absolute_url),
               ("date_to_xmlschema", date_to_xmlschema), ("number_of_words", number_of_words)):
    try:
        env.add_filter(nm, fn)
    except Exception:
        env.filters[nm] = fn

SEO_SNIPPET = (
    '<title>{{ page.title | default: site.title }}</title>\n'
    '<meta name="description" content="{{ page.description | default: site.description }}">'
)
def preprocess(tpl):
    return tpl.replace("{% seo %}", SEO_SNIPPET)

def render_template(src, **ctx):
    return env.from_string(preprocess(src)).render(**ctx)

def load_layout(name):
    with open(os.path.join(ROOT, "_layouts", f"{name}.html"), encoding="utf-8") as f:
        return split_front_matter(f.read())

def render_with_layouts(page_fm, content, is_liquid_body, raw_body):
    if is_liquid_body:
        content = render_template(raw_body, site=SITE, page=page_fm, content="")
    else:
        content = raw_body  # literal (post article HTML)
    layout = page_fm.get("layout")
    while layout:
        lfm, lbody = load_layout(layout)
        content = render_template(lbody, site=SITE, page=page_fm, content=content)
        layout = lfm.get("layout")
    return content

def write(rel, text):
    dest = os.path.join(OUT, rel)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    with open(dest, "w", encoding="utf-8") as f:
        f.write(text)

# ---------- clean output ----------
if os.path.exists(OUT):
    shutil.rmtree(OUT)
os.makedirs(OUT, exist_ok=True)

# ---------- home ----------
with open(os.path.join(ROOT, "index.html"), encoding="utf-8") as f:
    fm, body = split_front_matter(f.read())
write("index.html", render_with_layouts(fm, None, True, body))

# ---------- blog listing ----------
with open(os.path.join(ROOT, "blogs", "index.html"), encoding="utf-8") as f:
    fm, body = split_front_matter(f.read())
write("blogs/index.html", render_with_layouts(fm, None, True, body))

# ---------- thanks page ----------
with open(os.path.join(ROOT, "thanks.html"), encoding="utf-8") as f:
    fm, body = split_front_matter(f.read())
write("thanks/index.html", render_with_layouts(fm, None, True, body))

# ---------- 404 page ----------
with open(os.path.join(ROOT, "404.html"), encoding="utf-8") as f:
    fm, body = split_front_matter(f.read())
write("404.html", render_with_layouts(fm, None, True, body))

# ---------- posts ----------
for post in SITE["posts"]:
    write(f"blogs/{post['slug']}/index.html",
          render_with_layouts(post, None, False, post["content"]))

# ---------- static passthrough ----------
for item in ("assets", "resume", "favicon.ico", "favicon.svg", "aiml-tree-structure.html"):
    src = os.path.join(ROOT, item)
    if os.path.isdir(src):
        shutil.copytree(src, os.path.join(OUT, item), dirs_exist_ok=True)
    elif os.path.isfile(src):
        shutil.copy2(src, os.path.join(OUT, item))

print(f"Built {len(SITE['posts'])} posts + home + listing -> {OUT}")
print("Posts (newest first):")
for p in SITE["posts"]:
    print(f"  {p['date']}  {p['url']}")
