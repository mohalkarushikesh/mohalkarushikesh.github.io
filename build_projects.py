#!/usr/bin/env python3
"""Render the project catalog into the static homepage from _data/projects.yml."""
import html
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent
INDEX_PATH = ROOT / "index.html"
PROJECTS_PATH = ROOT / "_data" / "projects.yml"
START_MARKER = "<!-- PROJECT_CARDS:START -->"
END_MARKER = "<!-- PROJECT_CARDS:END -->"

projects = yaml.safe_load(PROJECTS_PATH.read_text(encoding="utf-8")) or []
rows = []

for number, project in enumerate(projects, start=1):
    project_date = project.get("date")
    date_label = project_date.strftime("%b %Y") if hasattr(project_date, "strftime") else str(project_date or "")
    category = html.escape(str(project.get("category", "AI/ML")))
    title = html.escape(str(project.get("title", "")))
    description = html.escape(str(project.get("description", "")))
    category_id = html.escape(str(project.get("cat", "ml")), quote=True)
    repository = html.escape(str(project.get("repo", "#")), quote=True)
    metric = project.get("metric")
    metric_html = f'          <p class="project-metric">{html.escape(str(metric))}</p>\n' if metric else ""
    tags = " ".join(f"<span>{html.escape(str(tag))}</span>" for tag in project.get("tags", []))

    rows.append(f'''      <article class="project-row p-card" data-cat="{category_id}">
        <span class="project-number">{number:02d}</span>
        <div class="project-copy">
          <p class="project-meta">{category} · {html.escape(date_label)}</p>
          <h3>{title}</h3>
          <p>{description}</p>
{metric_html}          <div class="tags">{tags}</div>
        </div>
        <a class="repo" href="{repository}" target="_blank" rel="noopener noreferrer">View project →</a>
      </article>''')

homepage = INDEX_PATH.read_text(encoding="utf-8")
if homepage.count(START_MARKER) != 1 or homepage.count(END_MARKER) != 1:
    raise ValueError("Expected exactly one project-card marker pair in index.html")

start = homepage.index(START_MARKER) + len(START_MARKER)
end = homepage.index(END_MARKER, start)
homepage = homepage[:start] + "\n" + "\n\n".join(rows) + "\n      " + homepage[end:]
INDEX_PATH.write_text(homepage, encoding="utf-8")
print(f"Rendered {len(rows)} project rows into {INDEX_PATH}")
