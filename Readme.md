# Rushikesh Mohalkar — Portfolio

A next-level ("Aura++ Max++") AI/ML portfolio built with **Jekyll**. GitHub Pages compiles it to
static HTML. The only client-side JavaScript is one tiny file (`assets/js/app.js`) that persists the
dark/light theme choice across visits — everything else (mobile menu, project filter, scroll reveals,
rotating role text) is pure CSS (`:has()` + `animation-timeline`). Blog posts load Mermaid only when
they contain a diagram.

🔗 **Live:** https://rushikesh-cts.github.io/

## ⚠️ Previewing locally

This is a Jekyll site, so **you can't just open `index.html` or use VS Code Live Server** — those
serve the raw source and you'll see unrendered `{% %}`/`---` and empty sections. Build it one of two ways:

```bash
# A) Ruby / Jekyll (matches GitHub Pages exactly — see deployment.md for the one-time install)
bundle install
bundle exec jekyll serve --livereload   # → http://localhost:4000
```

```bash
# B) No Ruby? Use the bundled Python previewer (python-liquid + pyyaml)
python preview_build.py
python -m http.server 4000 --directory _site   # → http://localhost:4000
```

…or just push to GitHub and let Pages build it. Full details + troubleshooting in **deployment.md**.

## Structure (short)

```
_config.yml            # site config (title, url, plugins, SEO defaults)
index.html             # home page (Liquid: projects, recent posts, résumé)
blogs/index.html       # blog listing (auto-generated from _posts)
404.html               # custom not-found page
_posts/                # one file per article: YYYY-MM-DD-slug.html
_layouts/              # default.html (shell) + post.html (article)
_data/                 # projects.yml, resume.yml
assets/css/main.css    # the whole Aura++ design system
assets/js/app.js       # theme persistence (the one bit of JS)
assets/img/            # project images, og.png, apple-touch-icon.png
favicon.svg            # gradient "R" favicon
resume/Resume.pdf      # downloadable résumé
```

Full details, plus **how to add a post / project / résumé entry**, are in **project_structure.md**.

## Content at a glance

- **Sections:** Hero · Manifesto · About · Projects (filterable) · Blogs · Résumé · Contact
- **Projects & résumé:** data-driven from `_data/*.yml` (9 projects fetched from github.com/mohalkarushikesh)
- **Blog:** articles in `_posts/`, dated by original publish date, listed at `/blogs/`
- **SEO:** `jekyll-seo-tag` emits Open Graph + Twitter cards using `assets/img/og.png`

## Tech

Jekyll · Liquid · pure CSS design system · one small theme-persistence JS file ·
`jekyll-seo-tag` + `jekyll-sitemap` · Times New Roman (serif) type · square (0-radius) aesthetic ·
light theme default. Deployed on GitHub Pages.

---

Built with ❤️ for AI/ML.
