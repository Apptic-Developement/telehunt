import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { ThemeProvider } from './_providers/theme';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen min-w-full', poppins.className)}>
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
        <Header />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
