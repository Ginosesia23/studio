
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

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

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 1. Send Notification to Apex Systems Admin
    const adminMailOptions = {
      from: `"Apex Systems Website" <${process.env.SMTP_USER}>`,
      to: 'contact@apex-systems.co.uk',
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
    };

    // 2. Send Automated Confirmation to User
    const userMailOptions = {
      from: '"Apex Systems" <contact@apex-systems.co.uk>',
      to: email,
      subject: 'Inquiry Received - Apex Systems',
      html: `
        <div style="font-family:sans-serif;line-height:1.6;color:#111;padding:20px;">
          <h2 style="color:#021123;">Hello ${safeName.split(' ')[0]},</h2>
          <p>Thank you for reaching out to Apex Systems. We've received your inquiry regarding your technical infrastructure and custom development needs.</p>
          <p>A member of our engineering team will review your message and get back to you within 24 hours.</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
          <p style="font-size:12px;color:#666;">
            This is an automated confirmation. Please do not reply directly to this email.
          </p>
        </div>
      `,
    };

    // Execute both mail sends
    await transporter.sendMail(adminMailOptions);
    
    try {
      await transporter.sendMail(userMailOptions);
    } catch (userError) {
      console.warn('User confirmation email could not be sent:', userError);
      // We don't fail the whole request if only the user confirmation fails
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Nodemailer Error:', err);
    return NextResponse.json(
      { error: `Internal Server Error: ${err.message || 'Failed to send email'}` },
      { status: 500 }
    );
  }
}
