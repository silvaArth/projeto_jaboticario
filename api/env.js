module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  const url = process.env.SUPABASE_URL || '';
  const key = process.env.SUPABASE_ANON_KEY || '';
  res.status(200).send(`window.ENV = window.ENV || {}; window.ENV.SUPABASE_URL = "${url}"; window.ENV.SUPABASE_ANON_KEY = "${key}";`);
};
