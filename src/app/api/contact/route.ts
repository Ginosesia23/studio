import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Ensure you have RESEND_API_KEY in your .env file
const resend = new Resend(process.env.RESEND_API_KEY_APEX_SYSTEMS);

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const company = String(body.company || '').trim();
    const message = String(body.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please complete all required fields.' },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

    // NOTE: 'onboarding@resend.dev' is the default verified sender for new Resend accounts.
    // Once you verify your domain (e.g., apex-systems.co.uk), you can change this to your custom email.
    const { data, error } = await resend.emails.send({
      from: 'Apex Systems <website@apex-systems.co.uk>',
      to: ['contact@apex-systems.co.uk'],
      replyTo: email,
      subject: `New Apex Systems enquiry from ${name}`,
    
      headers: {
        'X-Entity-Ref-ID': `${Date.now()}`,
      },
    
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111111;padding:20px;">
          <h2 style="margin-top:0;color:#021123;">New Apex Systems Website Enquiry</h2>
    
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany || 'Not provided'}</p>
    
          <hr style="border:0;border-top:1px solid #eee;margin:20px 0;" />
    
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;">${safeMessage}</p>
    
          <hr style="border:0;border-top:1px solid #eee;margin:20px 0;" />
    
          <p style="font-size:13px;color:#666;">
            This message was submitted via the Apex Systems website contact form.
          </p>
        </div>
      `,
    
      text: `
    New Apex Systems Website Enquiry
    
    Name: ${name}
    Email: ${email}
    Company: ${company || 'Not provided'}
    
    Message:
    ${message}
    
    Submitted from apex-systems.co.uk
    `,
    });    
    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send email.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Internal Server Error:', err);
    return NextResponse.json(
      { error: 'Something went wrong on our end.' },
      { status: 500 }
    );
  }
}
