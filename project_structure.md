# Project Structure

A **Jekyll** portfolio that GitHub Pages builds server-side into static HTML. Interactions are almost
entirely CSS-driven (mobile menu, project filter, scroll reveals, rotating role text). The single
piece of client-side JavaScript is `assets/js/app.js`, which persists the dark/light theme choice in
`localStorage`. Blog posts optionally load Mermaid only when a post contains a diagram.

## Directory layout

```
rushikesh-cts.github.io/
├── _config.yml                # Jekyll site config (title, url, plugins, permalinks, SEO defaults)
├── index.html                 # Home page (layout: default) — data-driven via Liquid
├── 404.html                   # Custom not-found page
├── thanks.html                # Contact-form success page (/thanks/)
├── blogs/
│   └── index.html             # Blog listing — auto-generated from _posts (permalink: /blogs/)
├── _posts/                    # One file per article: YYYY-MM-DD-slug.html  (published /blogs/slug/)
├── _layouts/
│   ├── default.html           # Site shell: head, SEO, background, navbar, footer, theme toggle
│   └── post.html              # Article wrapper (title, meta, share, prev/next, related, Mermaid)
├── _data/
│   ├── projects.yml           # Projects shown on the home page
│   └── resume.yml             # Experience + education shown on the home page
├── assets/
│   ├── css/main.css           # The entire Aura++ design system (shared by every page)
│   ├── js/app.js              # Theme persistence — the one bit of JS
│   └── img/                   # Project images, og.png (share card), apple-touch-icon.png
├── resume/
│   └── Resume.pdf             # Downloadable résumé (source .docx kept, excluded from build)
├── aiml-tree-structure.html   # Standalone AI/ML ecosystem tree (Mermaid + MathJax notes)
├── favicon.ico / favicon.svg  # Legacy .ico + modern gradient-"R" SVG
├── preview_build.py           # No-Ruby local previewer (python-liquid + pyyaml → _site/)
├── robots.txt                 # Jekyll-processed; sitemap URL tracks site.url
├── Gemfile / .gitignore
└── Readme.md / deployment.md / project_structure.md / PREVIEW.md / Instructions.md
```

> `sitemap.xml` is generated automatically by the `jekyll-sitemap` plugin — do not hand-maintain it.

## How interactivity works

Almost everything is CSS, driven by `:has()` and `animation-timeline`. The lone exception is theme
persistence, which needs `localStorage` (impossible in pure CSS):

| Feature | Mechanism |
|---|---|
| Dark / light theme | `#themeToggle` button + `app.js` toggles `html.dark` and saves to `localStorage`; a no-FOUC inline head script applies the saved theme before first paint (default: light) |
| Mobile menu | hidden checkbox `#nav-switch` + `:has(#nav-switch:checked)` |
| Project category filter | radio inputs + `:has()` scoping on `.p-card[data-cat]` |
| Scroll reveals | `animation-timeline: view()` (ignored where unsupported → content stays visible) |
| Rotating role text | a CSS `@keyframes` marquee |
| Section backgrounds | fixed photos behind a theme-aware veil overlay |

Everything degrades gracefully and respects `prefers-reduced-motion`.

## Adding a blog post  ✍️

1. Create a file in `_posts/` named `YYYY-MM-DD-my-post-title.html` (the date is the publish date).
2. Add front matter, then the article body in plain HTML:

   ```html
   ---
   layout: post
   title: "My Post Title"
   date: 2026-02-01
   category: "Deep Learning"
   tags: [Transformers, Attention, LLM]
   description: "One-sentence summary shown in cards and search results."
   mermaid: true      # ← only if the post contains a <div class="mermaid"> diagram
   ---
   <p>Your article content in HTML — headings, lists, tables, blockquotes, images…</p>
   ```

3. That's it. The post automatically appears on the home page ("recent") and on `/blogs/`,
   sorted by date, with reading time computed and share/prev/next/related links generated.
   Related posts are matched by `category`. No listing edits needed.

Prose is styled globally by `.post-body` in `assets/css/main.css`, so posts inherit the Aura theme.

## Adding a project

Append an entry to `_data/projects.yml`. `cat:` drives the filter and the fallback card icon and must
be one of `llm`, `dl`, `cv`, `nlp`, `rl`, or `ml`. Optional `logo:` names an image in `assets/img/`
used as the card header banner (without it, a gradient + category icon is shown). It appears on the
home page automatically.

## Updating the résumé

- Replace `resume/Resume.pdf` (keep the filename) — every "Download Résumé" link keeps working.
- Edit the on-page experience/education entries in `_data/resume.yml`.

## Local development

```bash
# With Ruby (matches GitHub Pages):
bundle install && bundle exec jekyll serve   # http://localhost:4000

# Without Ruby (bundled Python previewer):
python preview_build.py && python -m http.server 4000 --directory _site
```

## Deployment

Push to the default branch of the `rushikesh-cts.github.io` repo. GitHub Pages runs Jekyll and
serves the built site at the root. If you use a custom domain, update `url` in `_config.yml` and add
a `CNAME` file.
