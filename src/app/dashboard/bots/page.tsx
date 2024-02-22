import React from "react";
import Header from "../components/header";
import DashboardShell from "../components/shell";

export default function Settings() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <Header title="Bots" description="Bots added by you." />
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
    </section>
  );
}
