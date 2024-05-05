import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

import { Providers } from './_providers';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  applicationName: 'Telehunt',
  title: 'Telehunt',
  description:
    'Discover and list Telegram channels, groups, and bots effortlessly. Join us to explore a diverse range of communities tailored to your interests.',
  manifest: '/manifest/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Telehunt',

    // startUpImage: [],
  },
};

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
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
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicons/android-chrome-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='512x512'
          href='/favicons/android-chrome-512x512.png'
        />
      </head>
      <body className={cn(inter.className, 'overflow-x-hidden')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
