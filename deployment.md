# Deployment & Local Preview

This site is a **Jekyll** project. GitHub Pages compiles it into static HTML on every push, and it is
set up to build **identically on any system** (Windows / macOS / Linux) — either on GitHub's runners
or locally with Ruby or Python.

🔗 **Live:** https://mohalkarushikesh.github.io/

---

## ⚠️ Why "Open in Browser" / VS Code **Live Server** shows a broken page

Live Server (and double-clicking `index.html`, `python -m http.server` on the source, etc.) serves the
**raw source files** — it does **not** run Jekyll. The source contains Liquid/front matter that only
becomes real HTML *after a build*:

```
---                          ← YAML front matter
layout: default              ← the page shell lives in _layouts/default.html
{% for project in ... %}     ← Liquid loops that generate the project/blog cards
{{ site.social.github }}     ← Liquid variables from _config.yml
```

Without a build you'll see raw `---` text, no navbar/footer, and empty grids. **Nothing is broken —
it just hasn't been compiled.** See the build options below.

---

## Deploying to GitHub Pages

The repo must be named **`mohalkarushikesh.github.io`** (a user page — it serves at the domain root, so
`baseurl` stays empty in `_config.yml`). Push to `main` from any machine that has push access:

```bash
git add .
git commit -m "Update site"
git push origin main
```

Then pick **one** of these two build sources in **Settings → Pages → Build and deployment**:

### Source: "GitHub Actions"  *(recommended — fully reproducible)*
Uses the bundled workflow at [.github/workflows/pages.yml](.github/workflows/pages.yml). GitHub spins
up a Linux runner, installs the exact gems from the `Gemfile`, builds with Jekyll, and deploys. This
is deterministic and independent of whatever is (or isn't) installed on your laptop.

The workflow is **manual by design** — pushing code does **not** deploy. Deploy when you're ready via
**GitHub → Actions → "Build and deploy Jekyll site to GitHub Pages" → Run workflow**. (Set the Pages
source to **GitHub Actions** first.) To make it deploy automatically on every push instead, uncomment
the `push:` trigger at the top of the workflow file.

### Source: "Deploy from a branch"  *(zero-config classic mode)*
Select branch `main` / root. GitHub runs its built-in Jekyll (the `jekyll-seo-tag` and
`jekyll-sitemap` plugins are on its allow-list). No workflow file is used in this mode.

> Use one or the other — not both. If you enable the Actions workflow, set the source to
> **GitHub Actions** so the two don't fight over the deployment.

**Custom domain?** Set `url:` in `_config.yml` to your domain and add a `CNAME` file containing it.

---

## Building / previewing locally

You do **not** need Ruby installed to preview — there are two independent paths.

### Path 1 — Ruby + Jekyll (matches GitHub Pages exactly)

Cross-platform (Windows/macOS/Linux). Install Ruby once:

- **Windows:** [RubyInstaller](https://rubyinstaller.org/) → latest **Ruby+Devkit x64**; at the end
  let it run `ridk install` and choose **option 3 (MSYS2 + MINGW)**.
- **macOS:** `brew install ruby` (or use `rbenv`/`asdf` — a `.ruby-version` (3.3) is committed).
- **Linux:** your distro's `ruby-full` + `build-essential`, or `rbenv`/`asdf`.

Then, in the project folder:

```bash
gem install bundler
bundle install
bundle exec jekyll serve --livereload   # → http://localhost:4000/
```

Edit a file → the site rebuilds automatically. `bundle exec jekyll build` writes the static site to
`_site/`.

### Path 2 — Python previewer (no Ruby)

A lightweight approximation of the Jekyll build for quick local viewing:

```bash
python -m pip install -r requirements.txt
python preview_build.py                       # renders into _site/
python -m http.server 4000 --directory _site  # → http://localhost:4000/
```

> The canonical build is still GitHub Pages / Jekyll; `preview_build.py` covers the common cases
> (home, blog listing, posts, 404, thanks) so you can eyeball changes without a Ruby toolchain.
> A few Jekyll-only features (e.g. `page.previous`/`page.next`, the full `{% seo %}` tag) only render
> on the real Jekyll build.

---

## Troubleshooting

| Symptom | Cause / Fix |
|---|---|
| Raw `---` and `{% %}` text in the browser | Serving source instead of the build. Use a build path above. |
| Empty Projects/Blogs sections locally | Same cause — Liquid loops weren't compiled. |
| `jekyll: command not found` | Ruby/Bundler not installed, or open a fresh terminal after installing. |
| Styles missing after deploy | Check `url`/`baseurl` in `_config.yml` match where the site is served. |
| A new post doesn't appear | Filename must be `_posts/YYYY-MM-DD-title.html` with valid front matter; future-dated posts are hidden until that date. |
| `git push` fails with `RPC failed` / `unable to rewind rpc post data` | Large push. Once per machine: `git config --global http.postBuffer 524288000`. |
| `git push` returns `403` | The stored github.com credential lacks write access. Re-authenticate as the repo owner (fresh browser login via Git Credential Manager, or a PAT with `repo` / Contents:write scope). |
| `dubious ownership in repository` | Once per machine: `git config --global --add safe.directory <path-to-repo>`. |

---

## Adding content

See **project_structure.md** — adding a blog post is a single dated file in `_posts/`; projects and
résumé entries live in `_data/projects.yml` and `_data/resume.yml`.
