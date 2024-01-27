'use client';
import { useDashboardNavRoutes } from "@/hooks/useNavRoutes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const routes = useDashboardNavRoutes();
  return (
    <section className="hidden md:flex flex-col gap-3 w-52">
      {
        routes.map(({ name, href, active, icon: Icon }) => {
          return (
            <Link 
            href={href} 
            key={href} 
            className={cn("flex gap-2 items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground", 
            {'bg-accent text-accent-foreground': active})}>
              <span><Icon /></span>
              <span className="font-semibold text-sm">{name}</span>
            </Link>
          )
        })
      }
    </section>
  );
}
