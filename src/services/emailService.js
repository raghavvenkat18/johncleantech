import { companyInfo } from '../data/cleaningData';

/**
 * Resend API Email Integration Service
 * Dispatches incoming leads directly to John Clean Tech management.
 */

export async function sendEnquiryEmail(enquiryData) {
  const apiKey = import.meta.env.VITE_RESEND_API_KEY || '';
  const toEmail = import.meta.env.VITE_RESEND_TO_EMAIL || companyInfo.email || 'johncleantech.cbe@gmail.com';
  const fromEmail = import.meta.env.VITE_RESEND_FROM_EMAIL || 'John Clean Tech <onboarding@resend.dev>';

  const subject = `🚨 New Water Tank Cleaning Lead: ${enquiryData.name} (${enquiryData.area}, Coimbatore)`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { background: linear-gradient(135deg, #0f172a 0%, #0369a1 100%); color: #ffffff; padding: 28px 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
          .header p { margin: 6px 0 0; font-size: 13px; color: #bae6fd; font-weight: 500; }
          .content { padding: 24px; }
          .badge { display: inline-block; background-color: #ecfdf5; color: #047857; font-size: 11px; font-weight: 700; padding: 4px 10px; rounded: 8px; border-radius: 6px; text-transform: uppercase; margin-bottom: 16px; }
          .lead-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          .lead-table td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
          .lead-table td.label { font-weight: 700; color: #64748b; width: 35%; background: #f8fafc; }
          .lead-table td.value { font-weight: 600; color: #0f172a; }
          .cta-box { margin-top: 24px; padding: 16px; background-color: #f0f9ff; border: 1px solid #bae6fd; border-radius: 12px; text-align: center; }
          .call-btn { display: inline-block; background: #0284c7; color: #ffffff !important; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; margin-top: 8px; }
          .footer { background: #f8fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>💧 JOHN CLEAN TECH</h1>
            <p>New Water Tank & Sump Cleaning Enquiry</p>
          </div>
          
          <div class="content">
            <span class="badge">Direct Web Lead • Coimbatore</span>
            
            <table class="lead-table">
              <tr>
                <td class="label">Customer Name</td>
                <td class="value">${escapeHtml(enquiryData.name || 'Not provided')}</td>
              </tr>
              <tr>
                <td class="label">Phone Number</td>
                <td class="value"><a href="tel:${enquiryData.phone}" style="color: #0284c7; font-weight: 800; text-decoration: none;">${escapeHtml(enquiryData.phone || '')}</a></td>
              </tr>
              <tr>
                <td class="label">Service Required</td>
                <td class="value" style="color: #0369a1; font-weight: 700;">${escapeHtml(enquiryData.service || '')}</td>
              </tr>
              <tr>
                <td class="label">Coimbatore Area</td>
                <td class="value">📍 ${escapeHtml(enquiryData.area || 'Coimbatore')}</td>
              </tr>
              <tr>
                <td class="label">Tank Specification</td>
                <td class="value">${escapeHtml(enquiryData.tankType || 'Not specified')}</td>
              </tr>
              <tr>
                <td class="label">Preferred Date</td>
                <td class="value">${escapeHtml(enquiryData.preferredDate || 'As soon as possible')}</td>
              </tr>
              <tr>
                <td class="label">Customer Notes</td>
                <td class="value">${escapeHtml(enquiryData.notes || 'None')}</td>
              </tr>
              <tr>
                <td class="label">Received At</td>
                <td class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</td>
              </tr>
            </table>

            <div class="cta-box">
              <p style="margin: 0; font-size: 13px; font-weight: 600; color: #0369a1;">Quick Action Required:</p>
              <a href="tel:${enquiryData.phone}" class="call-btn">📞 Call Client Now (${enquiryData.phone})</a>
            </div>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">John Clean Tech • Coimbatore, Tamil Nadu • Pure Water Begins with a Clean Tank.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // 1. Try sending via local backend proxy (/api/send-email) if available
  try {
    const proxyResponse = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: subject,
        html: htmlContent,
      }),
    });

    if (proxyResponse.ok) {
      const data = await proxyResponse.json();
      console.log('Resend email sent successfully via proxy:', data);
      return { success: true, via: 'proxy', id: data.id };
    }
  } catch (err) {
    console.warn('Backend proxy /api/send-email unavailable, trying direct Resend API:', err.message);
  }

  // 2. Direct Resend API endpoint (if API key is supplied in environment)
  if (apiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          subject: subject,
          html: htmlContent,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Resend email sent successfully via direct API:', result);
        return { success: true, via: 'direct-api', id: result.id };
      } else {
        const errorData = await response.json();
        console.error('Resend API returned error:', errorData);
        return { success: false, error: errorData };
      }
    } catch (apiErr) {
      console.error('Direct Resend fetch failed (possibly CORS in local browser):', apiErr);
      return { success: false, error: apiErr.message };
    }
  }

  console.info('No VITE_RESEND_API_KEY configured in .env. Enquiry processed and redirected to WhatsApp.');
  return { success: false, reason: 'no-api-key' };
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
