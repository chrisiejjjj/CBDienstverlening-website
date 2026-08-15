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
        <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-slate-900 hover:opacity-90 transition">
              CB Dienstverlening<span className="text-blue-600">.nl</span>
            </Link>
            
            <nav className="flex items-center space-x-8">
              <Link href="/" className="text-slate-600 hover:text-slate-900 font-semibold transition text-base">
                Home
              </Link>
              <Link href="/#initiatieven" className="text-slate-600 hover:text-slate-900 font-semibold transition text-base">
                Onze Initiatieven
              </Link>
              <Link 
                href="/afspraak" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition"
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
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p>&copy; {new Date().getFullYear()} CB Dienstverlening. Alle rechten voorbehouden.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
