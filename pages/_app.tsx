import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { Inter } from "next/font/google";
import Navbar from '@/components/common/nav';
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </MantineProvider>
  )
}
