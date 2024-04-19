'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from './theme';

export const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
