import React from "react";
import Header from "./components/header";
import DashboardShell from "./components/shell";
import useUser from "@/hooks/useUser";

export default async function Dashboard() {
  const user = await useUser();
  return (
    <section className="flex flex-col gap-4 w-full">
      <Header user={user} title="Dashboard" description="Your dashboard." />
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
    </section>
  );
}
