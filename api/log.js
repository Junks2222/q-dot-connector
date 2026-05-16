let logs = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const entry = req.body;
    logs.unshift(entry);
    console.log('Logged:', entry.title || entry.summary);
    return res.status(200).json({ ok: true, id: Date.now() });
  }
  if (req.method === 'GET') {
    return res.status(200).json(logs.slice(0, 50));
  }
  res.status(405).end();
}