import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      
      {/* Hero Sectie */}
      <section className="w-full bg-slate-900 py-24 px-6 text-center">
        <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-500/30">
          Slimme WebApps & Tools ⚡
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Van IT-Beheer naar <br />
          <span className="text-blue-500">Slimme WebApps</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          CB Dienstverlening focust zich op het ontwikkelen van snelle, specifieke WebApps en Micro-SaaS oplossingen.
        </p>
        <Link 
          href="#initiatieven" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition inline-block"
        >
          Bekijk onze projecten &rarr;
        </Link>
      </section>

      {/* Over Mij Sectie */}
      <section className="w-full max-w-5xl mx-auto py-20 px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3 aspect-square relative rounded-2xl overflow-hidden shadow-md border border-slate-100">
            <img 
              src="/profiel.jpg" 
              alt="Chris - CB Dienstverlening" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Over CB Dienstverlening</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              CB Dienstverlening is opgericht door mij, Chris. Met jarenlange ervaring in IT-beheer combineer ik praktische IT-kennis met moderne webtechnologie. 
            </p>
            <p className="text-slate-600 leading-relaxed text-lg mt-4">
              Mijn doel is software te bouwen die écht tijd bespaart. Geen overbodige toeters en bellen, maar tools die direct waarde toevoegen aan jouw dagelijkse werkzaamheden.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatieven Sectie */}
      <section id="initiatieven" className="w-full py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-slate-900">Onze Initiatieven</h2>
          <p className="text-slate-600 text-lg">
            We bouwen applicaties die pijnpunten oplossen. Geen overbodige functies, <br />gewoon tools die werken. Ontdek ons eerste project.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
          <div className="mb-4">
            <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase">Nu Live</span>
          </div>
          <h3 className="text-3xl font-bold mb-4 text-slate-900">Tikbon.com</h3>
          <p className="text-slate-600 mb-6 text-lg">
            De ultra-snelle "Snelle Werkbon" PWA voor de mobiele ZZP'er (installateurs, monteurs, klusbedrijven).
          </p>
          <a 
            href="https://tikbon.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-50 text-blue-600 hover:bg-blue-100 font-semibold px-6 py-3 rounded-xl transition"
          >
            Bezoek Tikbon.com &rarr;
          </a>
        </div>
      </section>

    </main>
  );
}
