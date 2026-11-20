// Vercel Serverless Function to dispatch emails via Resend API
export default async function handler(req, res) {
  // Set CORS headers if ever invoked cross-origin
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const apiKey = process.env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY;

    if (!apiKey) {
      return res.status(400).json({
        error: 'Missing RESEND_API_KEY or VITE_RESEND_API_KEY in Vercel environment variables.',
      });
    }

    const { from, to, subject, html } = req.body || {};

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: from || 'John Clean Tech <onboarding@resend.dev>',
        to: to || process.env.VITE_RESEND_TO_EMAIL || 'johncleantechh@gmail.com',
        subject: subject || 'New Water Tank Cleaning Enquiry',
        html: html || '<p>New lead received from website.</p>',
      }),
    });

    const data = await resendResponse.json();
    return res.status(resendResponse.status).json(data);
  } catch (err) {
    console.error('Error in Vercel send-email function:', err);
    return res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
}
