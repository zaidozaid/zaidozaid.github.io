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

- Project site: https://zaidozaid.github.io/cosmosimaging/

If you prefer a user/organization site (root at https://zaidozaid.github.io/), create a repository named `zaidozaid.github.io` and push the same files there.

## Quick start (PowerShell)

```powershell
# From the workspace root
cd c:\VSCode\CosmosImaging

# Set the remote to your GitHub repo and push
git remote add origin https://github.com/zaidozaid/cosmosimaging.git
git push -u origin main
```

## Customization

- Update phone, email, and address in `index.html` (search for `80 8222 1020`, `info@cosmosimaging.com`, and address lines).
- Replace hero and section images by pointing to your own hosted images or add files under `assets/` and update `src`.
- Colors and layout are driven by Tailwind utility classes in `index.html` (via CDN). Minor overrides can go in `assets/styles.css`.

## Notes

- This site is fully static and doesn’t require a backend.
- Keep `.nojekyll` so Pages serves assets as-is.
- A workflow file at `.github/workflows/pages.yml` deploys automatically on pushes to `main`.
