"use client";
import React from "react";
import { ThemeProvider } from "./theme";
import { HomeContextProvider } from "../contexts/home";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <HomeContextProvider>
        {children}
      </HomeContextProvider>
    </ThemeProvider>
  );
}
