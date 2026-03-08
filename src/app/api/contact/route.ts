import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Standardized environment variable name
const resend = new Resend(process.env.RESEND_API_KEY);

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

    // 1. Send notification email to Apex Systems Admin
    // Using onboarding@resend.dev for testing. In production, use your verified domain email.
    const adminEmailResponse = await resend.emails.send({
      from: 'Apex Systems <onboarding@resend.dev>',
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
        { error: 'Failed to send admin notification. Check API key configuration.' },
        { status: 500 }
      );
    }

    // 2. Send automated confirmation email to the User
    // NOTE: This will only reach external users if your domain is verified in Resend.
    try {
      await resend.emails.send({
        from: 'Apex Systems <onboarding@resend.dev>',
        to: [email],
        subject: 'Inquiry Received - Apex Systems',
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111111;padding:20px;">
            <h2 style="margin-top:0;color:#021123;">Hi ${safeName.split(' ')[0]},</h2>
            <p>Thank you for reaching out to Apex Systems. We've received your message regarding <strong>${safeCompany || 'your technical needs'}</strong>.</p>
            <p>Our engineering team is currently reviewing your inquiry. We aim to provide a detailed response or schedule a consultation within 24 hours.</p>
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
      console.warn('Resend User Confirmation Warning (likely unverified domain):', confirmError);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Internal Server Error:', err);
    return NextResponse.json(
      { error: 'Something went wrong on our end.' },
      { status: 500 }
    );
  }
}