# Local Preview (Python) — Quick Notes

This machine has **no Ruby** (and `winget`/Docker are blocked), so the normal
`jekyll serve` isn't available. Instead, `preview_build.py` compiles the Jekyll
site to `_site/` using Python + `python-liquid`, and Python's built-in web server
serves it. This is a **preview approximation** — the real build is GitHub Pages.

> One-time setup (already done on this machine):
> `python -m pip install --user python-liquid pyyaml`

## Launch

From a terminal in the project folder:

```powershell
cd "c:\Users\2327238\Documents\dev\ai\mohalkarushikesh.github.io-main\mohalkarushikesh.github.io-main"

python preview_build.py                          # 1. compile Jekyll -> _site/
python -m http.server 4000 --directory _site     # 2. serve it
```

Open **http://localhost:4000/**. Press **Ctrl + C** in the terminal to stop the server.

One-liner (build + serve):

```powershell
python preview_build.py; python -m http.server 4000 --directory _site
```

## Refresh after editing

`http.server` does **not** auto-rebuild. After changing any file:

1. Re-run `python preview_build.py`
2. **Hard-refresh** the browser: **Ctrl + F5** (or **Ctrl + Shift + R**) — needed so
   changed CSS isn't served from cache.

## Port already in use?

If you see *"address already in use"* on port 4000, another server is still running.
Either use a different port:

```powershell
python -m http.server 8000 --directory _site      # -> http://localhost:8000/
```

…or stop the existing one (Ctrl + C in its terminal, or end the `python` process).

## Notes

- `preview_build.py` and `_site/` are git-ignored and excluded from the Jekyll build —
  they never get published.
- The preview skips the `jekyll-seo-tag` / `jekyll-sitemap` plugins (those only run on
  GitHub Pages). Everything else — layouts, Liquid loops, `_data`, `_posts` — is rendered.
- Canonical deploy is still GitHub Pages (see **DEPLOYMENT.md**).
