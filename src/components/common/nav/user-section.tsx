"use client";
import { Button, ButtonSkeleton } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { UserDropdown } from "./user-dropdown";
import { Skeleton } from "@/components/ui/skeleton";

export const UserSection = () => {
  const { data, status } = useSession();
  if (status === "unauthenticated") {
    return (
      <Button
        className="hidden md:inline-block"
        onClick={() => signIn("google")}
      >
        Login
      </Button>
    );
  }

  if (status === "loading") {
    return <ButtonSkeleton className="hidden md:inline-block !px-10" />;
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
