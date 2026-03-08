import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const apiKey = process.env.RESEND_API_KEY_APEX_SYSTEMS;
const resend = new Resend(apiKey);

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
    if (!apiKey) {
      console.error('RESEND_API_KEY_APEX_SYSTEMS is not defined.');
      return NextResponse.json(
        { error: 'API Configuration Error: Key is missing.' },
        { status: 500 }
      );
    }

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

    // 1. Send Notification to Apex Systems Admin
    const adminEmailResponse = await resend.emails.send({
      from: 'Apex Systems <onboarding@resend.dev>',
      to: ['contact@apex-systems.co.uk'],
      replyTo: email,
      subject: `New Technical Inquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;line-height:1.6;color:#111;padding:20px;border:1px solid #eee;border-radius:8px;">
          <h2 style="color:#021123;margin-top:0;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany || 'N/A'}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;">${safeMessage}</p>
        </div>
      `,
    });

    if (adminEmailResponse.error) {
      console.error('Resend Admin Error:', adminEmailResponse.error);
      return NextResponse.json(
        { error: `Resend Error: ${adminEmailResponse.error.message}` },
        { status: 500 }
      );
    }

    // 2. Send Automated Confirmation to User
    // Note: This will only work if the recipient is your verified domain or your account email on the free tier.
    try {
      await resend.emails.send({
        from: 'Apex Systems <onboarding@resend.dev>',
        to: [email],
        subject: 'We have received your inquiry - Apex Systems',
        html: `
          <div style="font-family:sans-serif;line-height:1.6;color:#111;padding:20px;">
            <h2 style="color:#021123;">Hello ${safeName.split(' ')[0]},</h2>
            <p>Thank you for reaching out to Apex Systems. We've received your message and our technical team is currently reviewing it.</p>
            <p>We aim to respond to all inquiries within 24 hours.</p>
            <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
            <p style="font-size:12px;color:#666;">
              This is an automated confirmation. Please do not reply directly to this email.
            </p>
          </div>
        `,
      });
    } catch (confirmError) {
      // We don't fail the whole request if confirmation fails (common on unverified Resend accounts)
      console.warn('User confirmation email could not be sent:', confirmError);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: `Internal Server Error: ${err.message}` },
      { status: 500 }
    );
  }
}
