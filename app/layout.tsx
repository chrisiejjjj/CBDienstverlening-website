import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CB Dienstverlening – Wij bouwen aan iets geweldigs',
  description: 'CB Dienstverlening vernieuwt haar website. Ontdek binnenkort onze nieuwste diensten en Tikbon.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="dark">
      <body className="antialiased bg-slate-950 text-slate-100 font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
