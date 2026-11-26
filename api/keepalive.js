// GET /api/keepalive  (called daily by the Vercel cron in vercel.json)
// Runs a tiny real query against Supabase so the free-tier project is never paused
// for inactivity (Supabase pauses after 7 days with no activity).
const SB_URL = 'https://rabgawsevqkcdpbxzgak.supabase.co';
const SB_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhYmdhd3NldnFrY2RwYnh6Z2FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ5MTEwNTksImV4cCI6MjExMDQ4NzA1OX0._KgqB_MBSIZIrvHxAg6eJ5Bx5pmNvz4zshOZeeNJQVc';

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  try {
    const r = await fetch(SB_URL + '/rest/v1/allowed_users?select=email&limit=1', {
      headers: { apikey: SB_ANON, Authorization: 'Bearer ' + SB_ANON },
    });
    res.statusCode = r.ok ? 200 : 502;
    res.end(JSON.stringify({ ok: r.ok, status: r.status, at: new Date().toISOString() }));
  } catch (e) {
    res.statusCode = 502;
    res.end(JSON.stringify({ ok: false, error: String(e) }));
  }
};
