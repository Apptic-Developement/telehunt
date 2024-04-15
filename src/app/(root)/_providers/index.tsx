import { type ReactNode } from 'react';
import { ThemeProvider } from './theme';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  )
};

export default Providers;
