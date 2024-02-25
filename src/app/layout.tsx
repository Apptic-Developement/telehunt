import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/common/nav";
import Providers from "@/components/providers";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={cn(inter.className)}>
          <Providers>
            <Toaster/>
            <NavBar />
            {children}
          </Providers>
        </body>
      </SessionProvider>
    </html>
  );
}
