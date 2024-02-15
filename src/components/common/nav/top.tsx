"use client";

import { useTopNavRoutes } from "@/hooks/useNavRoutes";
import Link from "next/link";
import { Button, ButtonSkeleton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/utils/theme-toggle";
import { useEffect, useState } from "react";
import { UserDropdown } from "./user-dropdown";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NotificationIcon from "@mui/icons-material/NotificationsRounded";

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
        "container bg-background backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b -top-[200px] sticky transition-all duration-300 ease-in-out z-0",
        { "top-0": shouldVisible },
      )}
    >
      <div className="flex items-center justify-between h-14">
        {/* Nav Right Section */}
        <div className="flex items-center gap-6">
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
                    "bg-secondary text-secondary-foreground rounded-md px-3 py-1":
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
          </div>
        </div>
      </div>
    </nav>
  );
}

const UserSection = () => {
  const { data, status } = useSession();
  if (status === "unauthenticated") {
    return <Button onClick={() => signIn("google")}>Login</Button>;
  }

  if (status === "loading") {
    return <ButtonSkeleton className="!px-10" />;
  }
  if (status === "authenticated" && data.user) {
    return (
      <UserDropdown
        name={data?.user.name as string}
        email={data?.user.email as string}
        icon={data?.user.image as string}
      />
    );
  }
};

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
