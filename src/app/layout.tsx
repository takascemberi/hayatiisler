import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hayati İşler',
  description: 'Urfa Sıra Gecesi – 20 yıllık sahne deneyimiyle unutulmaz anlar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
