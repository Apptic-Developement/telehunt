import React, { ReactNode } from "react";
import Nav from "./components/nav";

export default function ProfileLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="flex container mx-auto md:flex-row md:px-16 my-4 flex-col gap-6">
      <Nav />
      {children}
    </main>
  );
}
