import React, { ReactNode } from "react";

export default function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col px-4 py-3 bg-card text-card-foreground rounded-md border'>
      {children}
    </div>
  );
}
