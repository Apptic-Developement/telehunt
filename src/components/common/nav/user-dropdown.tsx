"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./avatar";
import { useDashboardNavRoutes } from "@/hooks/useNavRoutes";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

export function UserDropdown({
  email,
  icon,
  name,
}: {
  email: string;
  icon: string;
  name: string;
}) {
  const routes = useDashboardNavRoutes();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span>
          <UserAvatar name={name} icon={icon} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {routes.map((route) => {
            return (
              <Link href={route.href} key={route.href} passHref>
                <DropdownMenuItem className={cn({ "bg-accent": route.active })}>
                  {route.name}
                </DropdownMenuItem>
              </Link>
            );
          })}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut()}
          className="text-destructive"
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
