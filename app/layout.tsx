import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NeonReel | Movie News & Discovery',
  description: 'Premium movie news and discovery portal powered by TMDB.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
