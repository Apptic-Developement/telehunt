import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

import { Providers } from './providers';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Telehunt',
  manifest: '/manifest/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='shortcut icon'
          href='/favicons/favicon.ico'
          type='image/x-icon'
        />
        <link rel='apple-touch-icon' href='/favicons/apple-touch-icon.png' />
      </head>
      <body className={cn(inter.className, 'overflow-x-hidden')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
