import React from "react";
import Header from "../components/header";
import DashboardShell from "../components/shell";
import useUser from "@/hooks/useUser";

export default async function Settings() {
  const user = await useUser();
  return (
    <section className="flex flex-col gap-4 w-full">
      <Header user={user} title="Bots" description="Bots added by you." />
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
    </section>
  );
}
