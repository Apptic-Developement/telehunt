import React from "react";
import Header from "./components/header";
import DashboardShell from "./components/shell";

export default async function Dashboard() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <Header title="Dashboard" description="Your dashboard." />
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
    </section>
  );
}
