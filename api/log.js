export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  // TODO: persist to DB/file (Supabase, JSON, etc.)
  console.log('Grok logged entry:', req.body);
  res.status(200).json({ ok: true, id: Date.now() });
}