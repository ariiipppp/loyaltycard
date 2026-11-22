export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ sent: false, status: 'Method Not Allowed' });
  }

  const WA_ENABLED = process.env.WA_ENABLED !== 'false';
  const WA_API_URL = process.env.WA_API_URL || 'https://api.fonnte.com/send';
  const WA_API_TOKEN = process.env.WA_API_TOKEN || '';

  if (!WA_ENABLED) {
    return res.status(200).json({ sent: false, status: 'WA Nonaktif' });
  }

  const { phone, message } = req.body || {};
  let digits = String(phone || '').replace(/[^0-9]/g, '');
  if (!digits) {
    return res.status(200).json({ sent: false, status: 'No WA Kosong' });
  }
  if (digits.startsWith('0')) digits = '62' + digits.substring(1);
  else if (digits.startsWith('8')) digits = '62' + digits;

  if (!WA_API_TOKEN || WA_API_TOKEN === 'ISI_TOKEN_API_ANDA') {
    return res.status(200).json({ sent: false, status: 'WA Simulasi (Token Belum Diisi)' });
  }

  try {
    const formData = new URLSearchParams();
    formData.append('target', digits);
    formData.append('message', message || '');

    const response = await fetch(WA_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': WA_API_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData.toString()
    });

    if (response.ok) {
      return res.status(200).json({ sent: true, status: 'WA Otomatis Terkirim' });
    }
    return res.status(200).json({ sent: false, status: `WA Gagal (HTTP ${response.status})` });
  } catch (error) {
    return res.status(200).json({ sent: false, status: 'WA Error' });
  }
}
