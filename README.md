# shahid-portfolio

My personal portfolio site — a **data-driven** static site. All content lives in a
single source of truth and every section renders dynamically from it.

## Editing content

Everything you see on the site (name, bio, skills, experience, projects, links,
etc.) is defined in **one file**:

```
data/portfolio-data.js
```

To update the site you only edit that file — no HTML, CSS, or JS changes needed:

- **Add a project** → add one object to the `projects` array
- **Add a job** → add one object to the `experience` array
- **Add a skill** → add a `{ name: "..." }` to the relevant group's `items`
- **Edit any text** → change the field value
- **Remove anything** → delete its array entry

Project links (`appStoreLink`, `playStoreLink`, `webLink`, `githubLink`) render as
buttons only when set — leave them `null` to hide them.

## Architecture

| File | Responsibility |
| --- | --- |
| `data/portfolio-data.js` | The single source of truth (all content). |
| `data/types.d.ts` | TypeScript interfaces describing the data shape. |
| `assets/js/render.js` | Rendering logic only — reads the data and builds the DOM. |
| `index.html` | Section shells / mount points (no hardcoded content). |
| `assets/css/style.css` | Styling. |
| `assets/js/main.js` | Template behaviours (typing effect, nav scroll-spy, AOS). |

`render.js` runs before `main.js`, so the content exists in the DOM before the
typing effect, scroll-spy navigation, and animations initialise.

## Type checking

The data file is validated against `data/types.d.ts` at compile time. A missing or
mistyped field is a compile error:

```bash
npm install     # one-time, installs TypeScript
npm run typecheck
```

## Running locally

No build step is required — it's a plain static site.

```bash
npm start        # serves at http://localhost:8000
# or
python3 -m http.server 8000
```
