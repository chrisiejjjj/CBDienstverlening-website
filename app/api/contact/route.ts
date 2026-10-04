import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const naam = body.naam ? String(body.naam).trim() : '';
    const email = body.email ? String(body.email).trim() : '';
    const onderwerp = body.onderwerp ? String(body.onderwerp).trim() : '';
    const bericht = body.bericht ? String(body.bericht).trim() : '';

    // Valideer of alle velden aanwezig zijn
    if (!naam || !email || !onderwerp || !bericht) {
      return NextResponse.json(
        { error: 'Niet alle velden zijn ingevuld.' },
        { status: 400 }
      );
    }

    // Verstuur de e-mail via Resend
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'CBDienstverlening <onboarding@resend.dev>',
      to: [process.env.NOTIFICATION_EMAIL || 'info@cbdienstverlening.nl'],
      replyTo: email,
      subject: `Nieuwe afspraak / contactbericht: ${onderwerp}`,
      html: `
        <h2>Nieuw bericht ontvangen via de website</h2>
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>E-mailadres:</strong> ${email}</p>
        <p><strong>Onderwerp:</strong> ${onderwerp}</p>
        <br />
        <p><strong>Bericht:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f4f4f4; padding: 12px; border-radius: 8px;">${bericht}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: error?.message || 'Fout bij het versturen van de e-mail.' },
      { status: 500 }
    );
  }
}
