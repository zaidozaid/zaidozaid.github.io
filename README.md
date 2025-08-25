# Cosmos Imaging Centre — Static Site

A minimal static website for Cosmos Imaging Centre (CBCT) suitable for GitHub Pages.

## What’s included

- `index.html` — Landing page matching the Lovable design/content
- `assets/` — Styles, script, and favicon
- `.nojekyll` — Ensures GitHub Pages serves assets as-is
- `404.html` — Custom not-found page

## Deploy to GitHub Pages

This repo is preconfigured with a GitHub Pages workflow that deploys from the `main` branch root.

After pushing to GitHub, your site will be available at:

- User/Org site: https://zaidozaid.github.io/

## Quick start (PowerShell)

```powershell
# From the workspace root
cd c:\VSCode\CosmosImaging

# Set the remote to your GitHub repo and push (user site repo)
git remote remove origin
git remote add origin https://github.com/zaidozaid/zaidozaid.github.io.git
git push -u origin main
```

## Customization


### Hero image source
- The hero image currently hotlinks a Wikimedia Commons CBCT photo (CC BY-SA 4.0).
- File page: https://commons.wikimedia.org/wiki/File:Cone_Beam_CT.jpg (Author: Ptrump16)
- Direct image: https://upload.wikimedia.org/wikipedia/commons/1/16/Cone_Beam_CT.jpg
- To switch back to a local image, place your file at `assets/img/dental-cbct.jpg` (or .png/.svg) and update `index.html` to use that path. JS fallbacks already try local files in this order: JPG → PNG → SVG → `placeholder-hero.svg`.
## Notes

- This site is fully static and doesn’t require a backend.
- Keep `.nojekyll` so Pages serves assets as-is.
- A workflow file at `.github/workflows/pages.yml` deploys automatically on pushes to `main`.
