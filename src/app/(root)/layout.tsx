import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen min-w-full', poppins.className)}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
