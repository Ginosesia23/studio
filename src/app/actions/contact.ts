'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
}) {
  try {
    const { firstName, lastName, email, company, message } = data;

    await resend.emails.send({
      from: 'Apex Systems Inquiry <onboarding@resend.dev>',
      to: ['contact@apex-systems.co.uk'],
      subject: `New Technical Inquiry from ${firstName} ${lastName}`,
      replyTo: email,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || 'N/A'}

Message:
${message}
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: 'Failed to send email' };
  }
}