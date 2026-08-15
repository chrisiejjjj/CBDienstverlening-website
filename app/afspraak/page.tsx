'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, MessageSquare, Clock, Zap } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const googleFormData = new FormData();
    googleFormData.append('entry.123456789', formData.get('naam') as string);
    googleFormData.append('entry.987654321', formData.get('email') as string);
    googleFormData.append('entry.456789123', formData.get('onderwerp') as string);
    googleFormData.append('entry.654321987', formData.get('bericht') as string);

    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSen5gqKsPpPqEoeImxcu2AgEDqQZUtT_CfDRpdYoOWDuHKP3w/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: googleFormData,
        }
      );
      setSubmitted(true);
    } catch (error) {
      console.error('Fout bij versturen:', error);
      alert('Er ging iets mis. Probeer het opnieuw.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-16 px-6 bg-slate-50 text-slate-900 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full">
        
        {/* USPs gericht op de klant */}
        <div className="text-center mb-10">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-blue-200">
            Snel & Persoonlijk Contact ✉️
          </div>
          <h1 className="text-4xl font-extrabold mb-4 text-slate-900">Stuur ons een bericht</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Heb je een vraag over Tikbon.com, een idee voor een nieuwe WebApp of wil je sparren? Laat een bericht achter en we reageren snel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-left">
            <div className="bg-white border border-slate-200 p-4 rounded-2xl flex items-center space-x-3 shadow-sm">
              <Clock className="text-blue-600 w-6 h-6 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-700">Binnen 24 uur reactie in je mailbox.</span>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-2xl flex items-center space-x-3 shadow-sm">
              <Zap className="text-blue-600 w-6 h-6 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-700">Direct inhoudelijk & eerlijk advies.</span>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-2xl flex items-center space-x-3 shadow-sm">
              <MessageSquare className="text-blue-600 w-6 h-6 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-700">Persoonlijk contact met de ontwikkelaar.</span>
            </div>
          </div>
        </div>

        {/* Formulier Card */}
        <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-xl">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-slate-900">Bericht ontvangen!</h2>
              <p className="text-slate-600 mb-8">
                Bedankt voor je bericht. We bekijken je vraag en nemen zo snel mogelijk contact met je op via e-mail.
              </p>
              <Link
                href="/"
                className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition"
              >
                &larr; Terug naar de homepage
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">
                    Naam *
                  </label>
                  <input
                    type="text"
                    name="naam"
                    required
                    placeholder="Je naam"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="naam@bedrijf.nl"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Waar gaat je vraag over?
                </label>
                <select
                  name="onderwerp"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                >
                  <option value="Tikbon.com">Vraag over Tikbon.com</option>
                  <option value="Nieuw WebApp Idee">Eigen WebApp / Micro-SaaS idee laten bouwen</option>
                  <option value="Overig">Overige vraag / Samenwerking</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Je bericht / Toelichting *
                </label>
                <textarea
                  name="bericht"
                  required
                  rows={5}
                  placeholder="Omschrijf kort je vraag of idee..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{loading ? 'Versturen...' : 'Bericht Versturen'}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-slate-500 hover:text-slate-800 transition text-sm">
            &larr; Terug naar de homepage
          </Link>
        </div>

      </div>
    </main>
  );
}
