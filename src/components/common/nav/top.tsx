"use client";

import { useTopNavRoutes } from "@/hooks/useNavRoutes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/utils/theme-toggle";

export default function TopNav() {
  const routes = useTopNavRoutes();
  return (
    <nav className="hidden container lg:px-16 md:px-8 md:flex items-center justify-between h-16">
      {/* Nav Right Section */}
      <div className="flex items-center gap-6">
        {/* Nav Branding */}
        <Link href="/" className="text-xl font-extrabold capitalize">
          telehunt
        </Link>
        {/* Nav Links */}
        <div className="flex items-center space-x-6">
          {routes.map(({ name, href, active, icon: Icon }) => {
            return (
              <Link
                href={href}
                key={href}
                className={cn("text-muted-foreground", {
                  "!text-foreground": active,
                })}
              >
                <span className="font-medium">{name}</span>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Nav Left Section */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button>Login</Button>
      </div>
    </nav>
  );
}
