import type { Metadata } from 'next';
import Link from 'next/link';
import './global.css';

export const metadata: Metadata = {
  title: 'CB Dienstverlening - Slimme WebApps & Micro-SaaS',
  description: 'Van IT-Beheer naar slimme, snelle WebApps en Micro-SaaS oplossingen.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen flex flex-col">
        
        {/* Header */}
        <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900">
              CB Dienstverlening<span className="text-blue-600">.nl</span>
            </Link>
            
            {/* Desktop Navigatie (alleen zichtbaar op grotere schermen) */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-slate-600 hover:text-slate-900 font-semibold transition">Home</Link>
              <Link href="/#initiatieven" className="text-slate-600 hover:text-slate-900 font-semibold transition">Initiatieven</Link>
              <Link href="/afspraak" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition">Contact</Link>
            </nav>

            {/* Mobiele Navigatie (alleen zichtbaar op mobiel) */}
            <details className="md:hidden">
              <summary className="list-none cursor-pointer p-2 text-slate-900 font-bold text-2xl">
                ☰
              </summary>
              <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl p-6 flex flex-col space-y-4">
                <Link href="/" className="text-lg font-semibold text-slate-900 block border-b pb-2">Home</Link>
                <Link href="/#initiatieven" className="text-lg font-semibold text-slate-900 block border-b pb-2">Onze Initiatieven</Link>
                <Link href="/afspraak" className="bg-blue-600 text-white text-center py-3 rounded-xl font-semibold mt-2">Contact</Link>
              </div>
            </details>

          </div>
        </header>

        {/* Hoofdinhoud */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} CB Dienstverlening. Alle rechten voorbehouden.</p>
        </footer>
        
      </body>
    </html>
  );
}
