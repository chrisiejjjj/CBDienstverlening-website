export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Dark Blue Theme */}
        <div className="bg-slate-900 p-10 flex flex-col justify-between text-white md:w-1/2">
            <div>
              <h1 className="text-2xl font-bold mb-2">CB DIENSTVERLENING</h1>
              <div className="w-12 h-1 bg-teal-500 mb-6"></div>
              <h2 className="text-3xl font-bold leading-tight mb-4">WIJ BOUWEN AAN IETS GEWELDIGS.</h2>
              <p className="text-slate-400">Excuses voor het ongemak. We zijn achter de schermen druk bezig om onze website te vernieuwen en onze nieuwe diensten te lanceren.</p>
            </div>
            <div className="mt-10">
                <p className="text-sm text-slate-500">Hoofdstraat 1, Kaatsheuvel, NL</p>
            </div>
        </div>

        {/* Right Side: Gradient Tikbon Card */}
        <div className="bg-gradient-to-br from-teal-500 to-emerald-700 p-10 text-white md:w-1/2 flex flex-col justify-center items-center text-center">
            <div className="bg-white p-4 rounded-xl mb-6 shadow-lg">
                {/* Placeholder for Tikbon Logo */}
                <div className="text-teal-700 font-black text-2xl">tikbon</div>
            </div>
            <h3 className="text-xl font-bold mb-4">DE LANCERING VAN TIKBON KOMT ERAAN!</h3>
            <p className="mb-6 opacity-90 text-sm">Tikbon vereenvoudigt uw urenregistratie en werkbonnen. Laat uw e-mail achter om als eerste op de hoogte te zijn.</p>
            
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Uw e-mailadres" className="w-full p-3 rounded-lg mb-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-white" />
                <button className="w-full bg-white text-teal-700 font-bold py-3 rounded-lg hover:bg-slate-100 transition">Houd mij op de hoogte</button>
            </form>
        </div>
      </div>
    </main>
  );
}