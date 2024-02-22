"use client";
import { Button, ButtonSkeleton } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useDashboardNavRoutes, useNavRoutes } from "@/hooks/useNavRoutes";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import React from "react";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { cn } from "@/lib/utils";
import { signIn, signOut, useSession } from "next-auth/react";
import { Separator } from "@/components/ui/separator";

export default function MobileMenuSheet() {
  const session = useSession();
  const routes = useNavRoutes();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="md:hidden block rounded-full"
          size="icon"
          variant="outline"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 max-w-full overflow-y-scroll">
        <div className="flex flex-col mr-auto w-full gap-2 mt-4">
          {routes &&
            routes.map((route) => <NavLink key={route.href} {...route} />)}
        </div>
        {session.status === "authenticated" && <Separator />}
        {session.status === "authenticated" && <DashboardNav />}
        <Separator />
        <div className="flex items-center">
          {session.status === "loading" && <ButtonSkeleton />}
          {session.status === "unauthenticated" && (
            <Button onClick={() => signIn("google")}>Login</Button>
          )}
          {session.status === "authenticated" && (
            <Button variant="destructive" onClick={() => signOut()}>
              Logout
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

const NavLink = ({
  name,
  active,
  href,
  icon: Icon,
}: {
  name: string;
  active: boolean;
  href: string;
  icon: OverridableComponent<SvgIconTypeMap>;
}) => {
  return (
    <Link
      className={cn(
        "flex items-center gap-2 bg-secondary border rounded-md p-1 supports-[backdrop-filter]:bg-secondary/30",
        {
          "supports-[backdrop-filter]:bg-secondary": active,
        },
      )}
      href={href}
    >
      <Icon fontSize="small" />
      <span className="capitalize text-sm font-semibold">{name}</span>
    </Link>
  );
};

const DashboardNav = () => {
  const routes = useDashboardNavRoutes();
  return (
    <div className="flex flex-col gap-2">
      {routes && routes.map((route) => <NavLink key={route.href} {...route} />)}
    </div>
  );
};
