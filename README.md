# Cosmos Imaging Centre — Static Site

A minimal static website for Cosmos Imaging Centre (CBCT) suitable for GitHub Pages.

## What’s included

- `index.html` — Landing page matching the Lovable design/content
- `assets/` — Styles, script, and favicon
- `.nojekyll` — Ensures GitHub Pages serves assets as-is
- `404.html` — Custom not-found page

## Deploy to GitHub Pages

1. Create a new GitHub repository named `cosmos-imaging` (or your choice).
2. Push this folder’s contents to the repository root.
3. In GitHub, open Settings → Pages → Build and deployment → Source: “Deploy from a branch”, Branch: `main` (or `master`) / root.
4. Wait 1–2 minutes, then open your site at:
   - `https://<your-username>.github.io/` if using a user/organization site (repo named `<your-username>.github.io`).
   - `https://<your-username>.github.io/<repo>/` if using a project site.

## Quick start (PowerShell)

```powershell
# From the workspace root containing this folder
cd c:\VSCode\CosmosImaging

# Initialize git and push (replace USER and REPO)
git init
git add .
git commit -m "Initial commit: Cosmos Imaging Centre static site"
git branch -M main
git remote add origin https://github.com/USER/REPO.git
git push -u origin main
```

## Customization

- Update phone, email, and address in `index.html` (search for `80 8222 1020`, `info@cosmosimaging.com`, and address lines).
- Replace hero and section images by pointing to your own hosted images or add files under `assets/` and update `src`.
- Tweak colors in `assets/styles.css` (CSS variables at the top).

## Notes

- This site is fully static and doesn’t require a backend.
- Keep `.nojekyll` to avoid pipeline processing by GitHub Pages.
