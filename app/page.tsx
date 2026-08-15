import Link from 'next/link';
import { ArrowRight, CheckCircle, Calendar, Wrench, Smartphone, Code } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      {/* Hero Sectie - De Pivot aankondigen */}
      <section className="w-full bg-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-500/30">
            Een Nieuwe Koers 🚀
          </div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Van IT-Beheer naar <span className="text-blue-500">Slimme WebApps</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10">
            CBDienstverlening stopt met IT-services, hardware en gamingsystemen. 
            Onze volledige focus ligt vanaf nu op het ontwikkelen van snelle, specifieke WebApps en Micro-SaaS oplossingen.
          </p>
          <Link href="#initiatieven" className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-500 transition shadow-lg inline-flex items-center">
            Bekijk onze projecten <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Initiatieven / Tikbon Sectie */}
      <section id="initiatieven" className="w-full py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Onze Initiatieven</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We bouwen applicaties die pijnpunten oplossen. Geen overbodige functies, gewoon tools die werken. Ontdek ons eerste project.
          </p>
        </div>

        {/* Tikbon Showcase */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold mb-4">
              Nu Live
            </div>
            <h3 className="text-4xl font-extrabold mb-4 text-slate-900">Tikbon.com</h3>
            <p className="text-lg text-slate-600 mb-8 font-medium">
              De ultra-snelle &quot;Snelle Werkbon&quot; PWA voor de mobiele ZZP&apos;er (installateurs, monteurs, klusbedrijven).
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 w-6 h-6" />
                <span className="text-slate-700"><strong>Gemaakt voor onderweg:</strong> Binnen 30 seconden een werkbon maken, zonder gepriegel.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 w-6 h-6" />
                <span className="text-slate-700"><strong>Digitale Handtekening:</strong> De klant tekent direct op het scherm van je telefoon voor akkoord.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 w-6 h-6" />
                <span className="text-slate-700"><strong>Moneybird Koppeling:</strong> Schiet automatisch een conceptfactuur in Moneybird en mailt een PDF naar de klant.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 w-6 h-6" />
                <span className="text-slate-700"><strong>Geen Overkill:</strong> Voor slechts €9,99/mnd, perfect voor de éénpitter.</span>
              </li>
            </ul>

            <a href="https://tikbon.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 hover:underline transition">
              Ga naar Tikbon.com <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="flex-1 flex justify-center w-full">
             {/* Simpele CSS telefoon Mockup */}
             <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl w-full max-w-[300px] border-8 border-slate-900 aspect-[9/19] flex flex-col relative overflow-hidden">
                <div className="w-1/3 h-5 bg-slate-900 absolute top-0 left-1/3 rounded-b-xl z-10"></div>
                <div className="flex-1 flex flex-col pt-8">
                  <h4 className="text-center font-bold text-xl mb-4 text-blue-600">Tikbon</h4>
                  <div className="bg-slate-100 rounded-lg p-3 mb-3 text-sm text-slate-500">Klant: Jan Jansen</div>
                  <div className="bg-slate-100 rounded-lg p-3 mb-3 text-sm text-slate-500">Uren: 2,5 uur</div>
                  <div className="bg-slate-100 rounded-lg p-3 mb-6 text-sm text-slate-500">Materialen: Kabel (5m)</div>
                  
                  <div className="mt-auto">
                    <div className="border-2 border-dashed border-slate-300 rounded-lg h-24 mb-4 flex items-center justify-center text-slate-400 text-sm">
                      Handtekening hier
                    </div>
                    <button className="bg-blue-600 text-white py-3 rounded-xl w-full font-bold shadow-md">
                      Rond Werkbon Af
                    </button>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA / Afspraak maken Sectie */}
      <section className="w-full bg-blue-50 py-24 px-6 border-t border-blue-100 text-center">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Klaar om te innoveren?</h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-10 text-lg">
          We bouwen niet alleen onze eigen initiatieven, maar denken ook graag met je mee over jouw WebApp of Micro-SaaS idee.
        </p>
        <Link href="/afspraak" className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg">
          <Calendar className="mr-3 w-5 h-5" /> Plan een afspraak
        </Link>
      </section>

    </main>
  );
}
