import React, { ReactNode } from "react";
import Nav from "./components/nav";


export default async function DashboardLayout({
  children,
}: Readonly<{ children: ReactNode }>) {

  return (
    <main className="flex container mx-auto md:flex-row md:px-6 my-6 flex-col gap-6">
      <Nav />
      {children}
    </main>
  );
}
