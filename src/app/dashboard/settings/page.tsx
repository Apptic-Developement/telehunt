import React from "react";
import Header from "../components/header";
import DashboardShell from "../components/shell";

export default function Settings() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <Header
        title="Settings"
        description="Manage account and website settings."
      />
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
    </section>
  );
}


