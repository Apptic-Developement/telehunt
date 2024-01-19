"use client";
import { useBottomNavRoutes } from "@/hooks/useNavRoutes";
import { cn } from "@/lib/utils";
import Link from "next/link";
export default function BottomNav() {
  const routes = useBottomNavRoutes();
  return (
    <nav className="bg-background border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed flex justify-around bottom-0 right-0 left-0 py-4">
      {
        routes.map(({ href, active, icon: Icon, }) => {
          return (
            <Link href={href} key={href} className={cn("text-xl text-muted-foreground", { '!text-primary': active })}>
              <Icon />
            </Link>
          )
        })
      }
    </nav>
  )
}
