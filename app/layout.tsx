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
    <html lang="nl">
      <body className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen flex flex-col justify-between">
        {/* Header Navigatie */}
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
              CB Dienstverlening<span className="text-blue-600">.nl</span>
            </Link>
            
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-slate-600 hover:text-slate-900 font-medium transition text-sm">
                Home
              </Link>
              <Link href="/#initiaticven" className="text-slate-600 hover:text-slate-900 font-medium transition text-sm">
                Onze Initiatieven
              </Link>
              <Link 
                href="/afspraak" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-sm transition"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Pagina inhoud */}
        {children}

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
          <div className="max-w-6xl mx-auto px-6">
            <p>&copy; {new Date().getFullYear()} CB Dienstverlening. Alle rechten voorbehouden.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
