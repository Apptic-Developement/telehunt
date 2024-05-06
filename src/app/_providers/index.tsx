'use client';

import { type ReactNode } from 'react';
import { ThemeProvider } from './theme';
import { TRPCReactProvider } from '@/trpc/react';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <TRPCReactProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </TRPCReactProvider>
  );
};
