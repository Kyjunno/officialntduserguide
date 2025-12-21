# Unit Guide Site (free, wiki-style)

This is a static site (Astro) that generates:
- a unit directory page
- one page per unit
- charts and mechanics pages
- optional full-text search (Pagefind) after build

## What you edit
Edit `src/data/units.json`. That is the single source of truth.

## Local setup
1) Install Node.js (LTS)
2) In this folder, run:
   npm install
   npm run dev

Open the local URL Astro prints.

## Build and search
Run:
   npm run build

This builds the site and generates the search index.

## Free hosting on GitHub Pages
1) Create a GitHub repo, for example: `your-game-guide`
2) Upload all files from this folder to that repo
3) In GitHub, go to Settings → Pages
4) Set Source to GitHub Actions (recommended) OR "Deploy from a branch" (simple)
5) If you use GitHub Actions, add an Astro Pages workflow
6) In `astro.config.mjs`, set:
   site: 'https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME'

If you want the simplest route, use Cloudflare Pages or Netlify:
- connect repo
- set build command: npm run build
- set output directory: dist

## Data format (units.json)
Each unit entry looks like:

{
  "id": "unique-slug",
  "name": "Unit Name",
  "rarity": "Rare",
  "placements": 2,
  "damage": 30,
  "cooldown": 0.25,
  "range": 23,
  "leveling": { "damage_per_level": 0.6, "cooldown_per_level": 0.0, "range_per_level": 0.0 },
  "effects": [ { "type": "stun", "duration_sec": 0.05 } ],
  "notes": "Anything special."
}

You can extend effects however you want.

Have fun shipping the math bible.
