import React from "react";
import Header from "../components/header";
import DashboardShell from "../components/shell";

export default function Groups() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <Header
        title="Groups"
        description="Groups uploaded by you."
        showButton
        buttonText="Add"
      />
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
    </section>
  );
}
