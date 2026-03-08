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
      console.error('RESEND_API_KEY_APEX_SYSTEMS is not defined in environment variables.');
      return NextResponse.json(
        { error: 'API Configuration Error: Resend key is missing.' },
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

    // 1. Send notification email to Apex Systems Admin
    // Using onboarding@resend.dev. NOTE: Recipients are limited to your account email if unverified.
    const adminEmailResponse = await resend.emails.send({
      from: 'Apex Systems <website@apex-systems.co.uk>',
      to: ['contact@apex-systems.co.uk'],
      replyTo: email,
      subject: `New Technical Inquiry from ${name}`,
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
    });

    if (adminEmailResponse.error) {
      console.error('Resend Admin Notification Error:', adminEmailResponse.error);
      return NextResponse.json(
        { error: `Resend Error: ${adminEmailResponse.error.message}` },
        { status: 500 }
      );
    }

    // 2. Send automated confirmation email to the User (Non-blocking)
    try {
      await resend.emails.send({
        from: 'Apex Systems <website@apex-systems.co.uk>',
        to: [email],
        subject: 'Inquiry Received - Apex Systems',
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111111;padding:20px;">
            <h2 style="margin-top:0;color:#021123;">Hi ${safeName.split(' ')[0]},</h2>
            <p>Thank you for reaching out to Apex Systems. We've received your message regarding <strong>${safeCompany || 'your technical needs'}</strong>.</p>
            <p>Our engineering team is currently reviewing your inquiry. We aim to provide a detailed response within 24 hours.</p>
            <p>We look forward to potentially partnering with you.</p>
            <hr style="border:0;border-top:1px solid #eee;margin:20px 0;" />
            <p style="font-size:13px;color:#666;">
              Best regards,<br />
              <strong>The Apex Systems Engineering Team</strong>
            </p>
          </div>
        `,
      });
    } catch (confirmError) {
      // We don't fail the whole request if the user confirmation fails (likely due to verification)
      console.warn('User Confirmation Email Failed:', confirmError);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Internal Server Error:', err);
    return NextResponse.json(
      { error: `Internal Server Error: ${err.message || 'Something went wrong'}` },
      { status: 500 }
    );
  }
}
