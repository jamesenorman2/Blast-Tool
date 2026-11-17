// Vercel build step: stamps version.json with the version, commit and build time.
// Fails the build if VERSION and the APP_VERSION constant in index.html disagree.
const fs = require('fs');
const { execSync } = require('child_process');
const sh = c => { try { return execSync(c, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); } catch (e) { return ''; } };
const version = fs.readFileSync('VERSION', 'utf8').trim();
const html = fs.readFileSync('index.html', 'utf8');
const m = html.match(/const APP_VERSION = '([^']+)'/);
if (!m || m[1] !== version) {
  console.error(`VERSION (${version}) does not match APP_VERSION in index.html (${m && m[1]}). Bump both.`);
  process.exit(1);
}
const info = {
  version,
  commit: process.env.VERCEL_GIT_COMMIT_SHA || sh('git rev-parse HEAD'),
  branch: process.env.VERCEL_GIT_COMMIT_REF || sh('git rev-parse --abbrev-ref HEAD'),
  message: (process.env.VERCEL_GIT_COMMIT_MESSAGE || sh('git log -1 --pretty=%s')).split('\n')[0],
  builtAt: new Date().toISOString(),
};
fs.writeFileSync('version.json', JSON.stringify(info, null, 2) + '\n');
console.log('version.json', info);
