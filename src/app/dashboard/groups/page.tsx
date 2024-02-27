import React from "react";
import Header from "../components/header";
import DashboardShell from "../components/shell";
import useUser from "@/hooks/useUser";

export default async function Groups() {
  const user = await useUser();
  return (
    <section className="flex flex-col gap-4 w-full">
      <Header
        user={user}
        title="Groups"
        description="Groups uploaded by you."
        showButton
        buttonText="Add"
        buttonType="group"
      />
      <DashboardShell>
        <h2>Content here</h2>
      </DashboardShell>
    </section>
  );
}
