"use client";

import { useTopNavRoutes } from "@/hooks/useNavRoutes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/utils/theme-toggle";
import { useEffect, useState } from "react";
import { UserDropdown } from "./user-dropdown";

export default function TopNav() {
  const routes = useTopNavRoutes();
  const [shouldVisible, setShouldVisible] = useState<boolean>(true);
  const [previousOffset, setPreviousOffset] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.scrollY;
      setShouldVisible(
        typeof previousOffset !== "undefined"
          ? currentOffset < previousOffset
          : currentOffset < 100,
      );

      setPreviousOffset(currentOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [previousOffset]);

  return (
    <nav
      className={cn(
        "container  bg-background backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b -top-[200px] sticky transition-all duration-300 ease-in-out z-0",
        { "top-0": shouldVisible },
      )}
    >
      <div className="lg:px-16 md:px-8 flex items-center justify-between h-14">
        {/* Nav Right Section */}
        <div className="flex items-center gap-6">
          {/* Nav Branding */}
          <Link href="/" className="text-xl font-extrabold capitalize">
            telehunt
          </Link>
        </div>
        {/* Nav Left Section */}
        <div className="flex items-center gap-6">
          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {routes.map(({ name, href, active, icon: Icon }) => {
              return (
                <Link
                  href={href}
                  key={href}
                  className={cn("text-muted-foreground", {
                    "bg-secondary text-secondary-foreground rounded-md px-3 py-1": active,
                  })}
                >
                  <span className="font-medium capitalize">{name}</span>
                </Link>
              );
            })}
          </div>
          {/* Nav Buttons */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <UserDropdown />
            {/* <Button>Login</Button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
