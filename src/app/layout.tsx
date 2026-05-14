import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Client Proof Pack Builder — Build client-ready proof packs effortlessly',
  description: 'The Client Proof Pack Builder enables small digital agency owners to efficiently transform disparate campaign results into compelling, client-ready proof packs, ensuring faster reporting and stronger client retention arguments.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50 antialiased`}>
        <div className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 text-zinc-100 text-xs px-4 py-2 flex justify-between items-center">
          <span>⚡ Demo Mode — Client Proof Pack Builder · Built with NEXUS OS</span>
          <Link href="/dashboard/dashboard" className="text-zinc-300 hover:text-white transition-colors">
            Open Dashboard →
          </Link>
        </div>
        <div className="pt-9">
          {children}
        </div>
      </body>
    </html>
  );
}