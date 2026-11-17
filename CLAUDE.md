# Blast-Tool

Single-file static web app (`index.html`). No build step.

## Deployment (always)
- Vercel project: `blast-tool` (team `jamesenorman2s-projects`), linked to this GitHub repo.
- Live domain: https://blast-tool-one.vercel.app
- Production branch: `claude/pensive-goodall-co78kg`. Every push to this branch deploys to the domain automatically.
- Bump the version in BOTH `VERSION` and `APP_VERSION` in index.html on every push (the build fails if they differ), and add a line to CHANGELOG in verification.html.
- If formulas, coefficients or the explosive library change, update the matching live checks in verification.html.
- **Always commit and push finished changes to the production branch so the domain is updated.** Then confirm the Vercel deployment reached READY.
