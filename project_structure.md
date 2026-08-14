# Project Structure

A **Jekyll** portfolio that GitHub Pages builds server-side into static HTML. The home page ships
**zero client-side JavaScript** — every interaction (theme toggle, mobile menu, project filter,
scroll reveals, rotating role text) is pure CSS. Blog posts optionally load Mermaid only when a post
contains a diagram.

## Directory layout

```
mohalkarushikesh.github.io/
├── _config.yml                # Jekyll site config (title, url, plugins, permalinks)
├── index.html                 # Home page (layout: default) — data-driven via Liquid
├── blogs/
│   └── index.html             # Blog listing — auto-generated from _posts (permalink: /blogs/)
├── _posts/                    # One file per article: YYYY-MM-DD-slug.html  (published /blogs/slug/)
├── _layouts/
│   ├── default.html           # Site shell: head, aura bg, navbar, footer, theme toggle
│   └── post.html              # Article wrapper (title, meta, share, optional Mermaid)
├── _data/
│   ├── projects.yml           # Projects shown on the home page
│   └── resume.yml             # Experience + education shown on the home page
├── assets/
│   └── css/main.css           # The entire Aura++ design system (shared by every page)
├── resume/
│   └── Resume.pdf             # Downloadable résumé (source .docx kept, excluded from build)
├── aiml-tree-structure.html   # Standalone AI/ML ecosystem tree (Mermaid + MathJax notes)
├── favicon.ico
├── robots.txt                 # Jekyll-processed; sitemap URL tracks site.url
├── Gemfile / .gitignore
├── README.md / DEPLOYMENT.md / Instructions.md / PROJECT_STRUCTURE.md
```

> `sitemap.xml` is generated automatically by the `jekyll-sitemap` plugin — do not hand-maintain it.

## How the "no JavaScript" home page works

All behavior is CSS, driven by the `:has()` selector and `animation-timeline`:

| Feature | Mechanism |
|---|---|
| Dark / light theme | hidden checkbox `#theme-switch` + `body:has(#theme-switch:checked)` |
| Mobile menu | hidden checkbox `#nav-switch` + `body:has(#nav-switch:checked)` |
| Project category filter | radio inputs + `.filter-scope:has(#f-xx:checked) .p-card:not([data-cat=xx])` |
| Scroll reveals | `animation-timeline: view()` (ignored where unsupported → content stays visible) |
| Rotating role text | a CSS `@keyframes` marquee |
| Animated aura background | blurred radial-gradient blobs + `@keyframes` |

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
   sorted by date, with its reading time computed and share links generated. No listing edits needed.

Prose is styled globally by `.post-body` in `assets/css/main.css`, so posts inherit the Aura theme.

## Adding a project

Append an entry to `_data/projects.yml` (`cat:` must be `ml`, `dl`, `cv`, or `rl` — it drives the
filter and the card icon). It shows up on the home page automatically.

## Updating the résumé

- Replace `resume/Resume.pdf` (keep the filename) — every "Download Résumé" link keeps working.
- Edit the on-page experience/education entries in `_data/resume.yml`.

## Local development

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

(Requires Ruby + Bundler. Not needed to deploy — GitHub Pages builds automatically.)

## Deployment

Push to the default branch of the `mohalkarushikesh.github.io` repo. GitHub Pages runs Jekyll and
serves the built site. If you use a custom domain, update `url` in `_config.yml` and add a `CNAME` file.
