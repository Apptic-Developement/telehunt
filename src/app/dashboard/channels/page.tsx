import React from "react";
import Header from "../components/header";
import DashboardShell from "../components/shell";
import useUser from "@/hooks/useUser";

export default async function Channels() {
  const user = await useUser();

  return (
    <section className="flex flex-col gap-4 w-full">
      <Header
        user={user}
        title="Channels"
        description="Channels uploaded by you."
        showButton
        buttonText="Add"
        buttonType="channel"
      />
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
    </section>
  );
}
