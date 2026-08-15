import Link from "next/link";
import { Calendar } from "lucide-react";

export default function AfspraakMaken() {
  return (
    <main className="min-h-screen py-24 px-6 flex flex-col items-center justify-center bg-slate-50">
      <div className="max-w-2xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 text-center">
        <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <Calendar className="text-blue-600 w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold mb-4 text-slate-900">Afspraak Maken</h1>
        <p className="text-slate-600 mb-10 text-lg">
          Kies hieronder een datum en tijd die jou uitkomt in de kalender. We kijken uit naar ons gesprek!
        </p>
        
        {/* Placeholder voor Calendly (of ander systeem) */}
        <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl h-80 flex flex-col items-center justify-center text-slate-400 mb-10">
          <p className="font-medium text-slate-500">Plaats hier je Calendly / plannings widget</p>
          <code className="text-sm bg-slate-200 px-3 py-1 rounded mt-2 text-slate-600">
            {'<iframe src="jouw-calendly-url" />'}
          </code>
        </div>
        
        <Link href="/" className="text-blue-600 font-bold hover:text-blue-800 transition">
          &larr; Terug naar de homepage
        </Link>
      </div>
    </main>
  );
}
