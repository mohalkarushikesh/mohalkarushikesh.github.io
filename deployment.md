# Deployment & Local Preview

This site is a **Jekyll** project. GitHub Pages compiles it into static HTML on every push. That
build step is the key thing to understand for previewing it locally.

---

## ⚠️ Why "Open in Browser" / VS Code **Live Server** shows a broken page

Live Server (and double-clicking `index.html`, `python -m http.server`, etc.) just serves the **raw
source files** — it does **not** run Jekyll. But the source now contains Jekyll/Liquid that only
becomes real HTML *after a build*:

```
---                          ← YAML front matter
layout: default              ← the page shell lives in _layouts/default.html
{% for project in ... %}     ← Liquid loops that generate the project/blog cards
{{ site.social.github }}     ← Liquid variables from _config.yml
```

Without a build, the browser receives those lines verbatim, so you see raw `---` text, no
navbar/footer, and empty Projects/Blogs grids. **Nothing is broken — it just hasn't been compiled.**

You have two ways to see the real site:

1. **Push to GitHub** and let GitHub Pages build it (no local tooling needed). ← simplest
2. **Run Jekyll locally** (needs Ruby). ← for previewing before you push

---

## Option A — Deploy on GitHub Pages (recommended)

1. Create/confirm the repo is named **`mohalkarushikesh.github.io`**.
2. Push to the default branch:
   ```bash
   git add .
   git commit -m "Aura++ Jekyll portfolio"
   git push
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: “Deploy from a branch”**,
   branch `main` (root). Save.
4. Wait ~1 minute. Your site is live at **https://mohalkarushikesh.github.io/**.

GitHub runs Jekyll automatically (the `jekyll-seo-tag` and `jekyll-sitemap` plugins are on its
allow-list), so the Liquid compiles and `/sitemap.xml` is generated for you.

**Custom domain?** Set `url:` in `_config.yml` to your domain and add a `CNAME` file containing it.

---

## Option B — Preview locally (Windows, needs Ruby)

This machine has no Ruby yet, so install it once:

1. **Install Ruby+Devkit** from <https://rubyinstaller.org/> (pick the latest **Ruby+Devkit x64**).
   At the end of the installer, let it run `ridk install` and choose **option 3 (MSYS2 + MINGW)**.
2. Open a **new** terminal and confirm: `ruby -v` and `gem -v`.
3. In the project folder:
   ```bash
   gem install bundler
   bundle install
   bundle exec jekyll serve --livereload
   ```
4. Open **http://localhost:4000/**. Edit a file → the site rebuilds automatically.

> Tip: `bundle exec jekyll build` writes the compiled static site to `_site/`. If you really want to
> use Live Server, point it at the **`_site/`** folder (never the project root).

---

## Troubleshooting

| Symptom | Cause / Fix |
|---|---|
| Raw `---` and `{% %}` text in the browser | Serving source instead of the build. Use GitHub Pages or `jekyll serve` (see above). |
| Empty Projects/Blogs sections locally | Same cause — Liquid loops weren't compiled. |
| `jekyll: command not found` | Ruby/Bundler not installed, or open a fresh terminal after installing. |
| Styles missing after deploy | Check `url`/`baseurl` in `_config.yml` match where the site is served. |
| A new post doesn't appear | Filename must be `_posts/YYYY-MM-DD-title.html` with valid front matter; future‑dated posts are hidden until that date. |

---

## Adding content

See **PROJECT_STRUCTURE.md** — adding a blog post is a single dated file in `_posts/`; projects and
résumé entries live in `_data/projects.yml` and `_data/resume.yml`.
