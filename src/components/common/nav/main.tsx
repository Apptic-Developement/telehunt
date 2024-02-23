"use client";

import { useNavRoutes } from "@/hooks/useNavRoutes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/utils/theme-toggle";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NotificationIcon from "@mui/icons-material/NotificationsRounded";
import MobileMenuSheet from "./mobile-sheet";
import { UserSection } from "./user-section";

export function NavBar() {
  const routes = useNavRoutes();

  return (
    <nav className="container bg-background backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b top-0 sticky transition-all duration-300 ease-in-out z-0">
      <div className="flex items-center gap-4 justify-between h-14">
        {/* Nav Right Section */}
        <div className="flex items-center gap-6 w-full">
          {/* Nav Branding */}
          <NavBranding />
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
                    "border supports-[backdrop-filter]:bg-secondary/50 text-secondary-foreground rounded-md px-3 py-1":
                      active,
                  })}
                >
                  <span className="font-medium capitalize">{name}</span>
                </Link>
              );
            })}
          </div>
          {/* Nav Buttons */}
          <div className="flex items-center gap-3">
            <NotificationButton />
            <ThemeToggle />
            <UserSection />
            <MobileMenuSheet />
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavBranding = () => {
  const isHome = usePathname() === "/";

  if (!isHome) {
    return (
      <Link href="/" className="flex gap-1 items-center">
        <Image
          className="object-cover block"
          id="nav-logo"
          width={40}
          height={40}
          alt="logo"
          src="/logo.png"
          priority
        />
        <span className="md:block hidden text-lg font-bold capitalize">
          telehunt
        </span>
      </Link>
    );
  }
  return (
    <div className="flex gap-1 items-center">
      <Image
        className="object-cover block"
        id="nav-logo"
        width={40}
        height={40}
        alt="logo"
        src="/logo.png"
        priority
      />
      <span className="md:block hidden text-lg font-bold capitalize">
        telehunt
      </span>
    </div>
  );
};

const NotificationButton = () => {
  return (
    <Button variant="outline" className="rounded-full" size="icon">
      <NotificationIcon />
    </Button>
  );
};
