import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CB Dienstverlening | WebApps & SaaS',
  description: 'Wij bouwen slimme WebApps voor ondernemers. Ontdek onze initiatieven zoals Tikbon.com.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={inter.className}>
        
        {/* Navigatie Menu */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-black text-gray-900 tracking-tight">
              CB Dienstverlening<span className="text-blue-600">.nl</span>
            </Link>
            <nav className="hidden md:flex gap-6 items-center font-medium text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="#initiatieven" className="hover:text-blue-600 transition">Onze Initiatieven</Link>
              <Link href="/afspraak" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm">
                Afspraak Maken
              </Link>
            </nav>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">CB Dienstverlening.nl</h3>
              <p className="mb-4">
                Wij transformeren complexe werkprocessen in simpele, doelgerichte WebApps. Vroeger IT-beheer, nu pure innovatie.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Snelkoppelingen</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/afspraak" className="hover:text-white transition">Afspraak Maken</Link></li>
                <li><a href="https://tikbon.com" target="_blank" className="hover:text-white transition">Tikbon.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Email: info@cbdienstverlening.nl</li>
                <li>KvK: [Vul KvK in]</li>
                <li>Locatie: Nederland</li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            &copy; {new Date().getFullYear()} CBDienstverlening.nl. Alle rechten voorbehouden.
          </div>
        </footer>
      </body>
    </html>
  );
}
