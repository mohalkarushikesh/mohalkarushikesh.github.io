# Rushikesh Mohalkar — Portfolio

A next-level ("Aura++ Max++") AI/ML portfolio built with **Jekyll**. GitHub Pages compiles it to
static HTML; the home page ships **zero client-side JavaScript** — the theme toggle, mobile menu,
project filter, scroll reveals, and rotating role text are all pure CSS (`:has()` +
`animation-timeline`). Blog posts load Mermaid only when they contain a diagram.

🔗 **Live:** https://mohalkarushikesh.github.io/

## ⚠️ Previewing locally

This is a Jekyll site, so **you can't just open `index.html` or use VS Code Live Server** — those
serve the raw source and you'll see unrendered `{% %}`/`---` and empty sections. You must build it:

```bash
# needs Ruby (see DEPLOYMENT.md for the one-time Windows install)
bundle install
bundle exec jekyll serve --livereload   # → http://localhost:4000
```

…or just push to GitHub and let Pages build it. Full details + troubleshooting in **DEPLOYMENT.md**.

## Structure (short)

```
_config.yml            # site config
index.html             # home page (Liquid: projects, recent posts, résumé)
blogs/index.html       # blog listing (auto-generated from _posts)
_posts/                # one file per article: YYYY-MM-DD-slug.html
_layouts/              # default.html (shell) + post.html (article)
_data/                 # projects.yml, resume.yml
assets/css/main.css    # the whole Aura++ design system
resume/Resume.pdf      # downloadable résumé
```

Full details, plus **how to add a post / project / résumé entry**, are in **PROJECT_STRUCTURE.md**.

## Content at a glance

- **Sections:** Hero · Manifesto · About · Projects (filterable) · Blogs · Résumé · Contact
- **Projects & résumé:** data-driven from `_data/*.yml`
- **Blog:** 18 articles in `_posts/`, dated by original publish date, listed at `/blogs/`

## Tech

Jekyll · Liquid · pure CSS (no JS on the home page) · `jekyll-seo-tag` + `jekyll-sitemap` · Google
Fonts (Sora / Inter / JetBrains Mono). Deployed on GitHub Pages.

---

Built with ❤️ for AI/ML.
