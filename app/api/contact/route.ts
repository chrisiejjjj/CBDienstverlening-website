import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const naam = body?.naam ? String(body.naam).trim() : '';
    const email = body?.email ? String(body.email).trim() : '';
    const onderwerp = body?.onderwerp ? String(body.onderwerp).trim() : '';
    const bericht = body?.bericht ? String(body.bericht).trim() : '';

    if (!naam || !email || !onderwerp || !bericht) {
      return NextResponse.json(
        { error: 'Vul alstublieft alle velden in.' },
        { status: 400 }
      );
    }

    // Direct via Resend mailserver naar jouw e-mail
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: [process.env.NOTIFICATION_EMAIL || 'info@cbdienstverlening.nl'],
      replyTo: email,
      subject: `Nieuw contactbericht: ${onderwerp}`,
      html: `
        <h2>Nieuw contactbericht via de website</h2>
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>E-mailadres:</strong> ${email}</p>
        <p><strong>Onderwerp:</strong> ${onderwerp}</p>
        <br />
        <p><strong>Bericht:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f4f4f4; padding: 12px; border-radius: 8px;">${bericht}</p>
      `,
    });

    if (error) {
      console.error('Resend fout:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Server fout:', error);
    return NextResponse.json(
      { error: error?.message || 'Server fout bij het versturen van het bericht.' },
      { status: 500 }
    );
  }
}
