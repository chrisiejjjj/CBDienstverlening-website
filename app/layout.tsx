export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="antialiased bg-slate-900 text-white font-sans">
        {children}
      </body>
    </html>
  );
}