"use client";
import { useBottomNavRoutes } from "@/hooks/useNavRoutes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function BottomNav() {
  const [shouldVisible, setShouldVisible] = useState<boolean>(true);
  const [previousOffset, setPreviousOffset] = useState<number>();
  const routes = useBottomNavRoutes();


  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.scrollY
      setShouldVisible(typeof previousOffset !== 'undefined' ? currentOffset < previousOffset : currentOffset < 100)
      setPreviousOffset(currentOffset)
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [previousOffset])


  return (
    <nav className={cn("bg-background border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed flex justify-around bottom-0 right-0 left-0 py-4 duration-300 transition-all ease-in-out",
      { '-bottom-20': shouldVisible === false })}>
      {
        routes.map(({ href, active, icon: Icon }) => {
          return (
            <Link
              href={href}
              key={href}
              className={cn("text-xl text-muted-foreground", {
                "!text-primary": active,
              })}
            >
              <Icon />
            </Link>
          );
        })
      }
    </nav >
  );
}
