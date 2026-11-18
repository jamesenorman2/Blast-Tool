# Blast Calculator (repo: Blast-Tool)

Static web app (`index.html` calculator, `verification.html` live checks, `login.html`, `admin.html`).
Build step `scripts/build-version.js` (Vercel) writes `version.json`.

## Access control
- Supabase project `blast-tool` (ref `rabgawsevqkcdpbxzgak`, org James Norman). NOT Task-Bubbles.
- Table `public.allowed_users` (email, role user|admin). Admins: james.norman@aecom.com, jamesenorman2@gmail.com.
- `allowed_users` is the ONE shared allow list for every app on this Supabase project. The VDA Tool's
  `public.vda_allowed_users` is an updatable view of it (security_invoker), so adding/removing anyone updates both apps.
- `middleware.js` (Vercel edge) blocks every page except `login.html`/`auth.js`/`api/` unless the `bt_at` cookie
  holds a valid Supabase token whose email is on the allow list; `/admin*` needs role admin.
- `api/magic-link.js` creates one-time sign-in links; needs Vercel env var `SUPABASE_SERVICE_ROLE_KEY`.

## Deployment (always)
- Vercel project: `blast-tool` (team `jamesenorman2s-projects`), linked to this GitHub repo.
- Live domain: https://blast-tool-one.vercel.app
- Production branch: `claude/pensive-goodall-co78kg`. Every push to this branch deploys to the domain automatically.
- Bump the version in BOTH `VERSION` and `APP_VERSION` in index.html on every push (the build fails if they differ), and add a line to CHANGELOG in verification.html.
- If formulas, coefficients or the explosive library change, update the matching live checks in verification.html.
- **Always commit and push finished changes to the production branch so the domain is updated.** Then confirm the Vercel deployment reached READY.
