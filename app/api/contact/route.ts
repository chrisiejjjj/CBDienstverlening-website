import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { naam, email, onderwerp, bericht } = body;

    if (!naam || !email || !onderwerp || !bericht) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht.' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'CBDienstverlening <onboarding@resend.dev>',
      to: [process.env.NOTIFICATION_EMAIL || 'info@cbdienstverlening.nl'],
      replyTo: email, // Hiermee antwoord je direct naar de afzender als je in je inbox op 'Beantwoorden' klikt!
      subject: `Nieuwe afspraak / contactbericht: ${onderwerp}`,
      html: `
        <h2>Nieuw bericht ontvangen via de website</h2>
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>E-mailadres:</strong> ${email}</p>
        <p><strong>Onderwerp:</strong> ${onderwerp}</p>
        <br />
        <p><strong>Bericht:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f4f4f4; padding: 12px; rounded: 8px;">${bericht}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Fout bij het versturen van de e-mail.' },
      { status: 500 }
    );
  }
}
