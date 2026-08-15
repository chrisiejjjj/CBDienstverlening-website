export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-950">
      <div className="max-w-4xl w-full bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-800">
        {/* Left Side: Dark Theme */}
        <div className="p-10 flex flex-col justify-between text-white md:w-1/2">
          <div>
            <h1 className="text-2xl font-bold mb-2 tracking-wider">CB DIENSTVERLENING</h1>
            <div className="w-12 h-1 bg-teal-500 mb-6"></div>
            <h2 className="text-3xl font-bold leading-tight mb-4">WIJ BOUWEN AAN IETS GEWELDIGS.</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Excuses voor het ongemak. We zijn achter de schermen druk bezig om onze website te vernieuwen en onze nieuwe diensten te lanceren.
            </p>
          </div>
          <div className="mt-10">
            <p className="text-xs text-slate-500">Europaweg 14, 2678 XH De Lier</p>
          </div>
        </div>

        {/* Right Side: Tikbon Preview Card */}
        <div className="bg-gradient-to-br from-teal-500 to-emerald-700 p-10 text-white md:w-1/2 flex flex-col justify-center items-center text-center">
          <div className="bg-white px-5 py-2.5 rounded-xl mb-6 shadow-lg">
            <div className="text-slate-950 font-black text-2xl tracking-tight">tikbon</div>
          </div>
          <h3 className="text-xl font-bold mb-4">DE LANCERING VAN TIKBON KOMT ERAAN!</h3>
          <p className="mb-6 opacity-90 text-sm leading-relaxed">
            Tikbon vereenvoudigt je werkbonnen en Moneybird facturatie. Wil je meer weten over wat we bouwen?
          </p>
          
          <a
            href="mailto:info@cbdienstverlening.nl?subject=Interesse%20in%20Tikbon"
            className="w-full bg-white text-teal-800 font-bold py-3 rounded-xl hover:bg-slate-100 transition shadow-lg text-center text-sm"
          >
            Neem contact op via e-mail
          </a>
        </div>
      </div>
    </main>
  );
}
