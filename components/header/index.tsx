'use client'

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle"
import {  ShoppingBag } from 'lucide-react';
import useRoutes from "@/hooks/useRoutes";
import { Button } from "../ui/button";
import { MobileSheet } from "./mobile-sheet";
 
export const Header = () => {
  const routes = useRoutes();
  return (
    <header className="sticky top-0 border-b h-12 flex justify-between items-center lg:px-8 md:px-6 px-4 mx-auto bg-background/50 backdrop-blur-lg">
      <nav className="md:flex hidden gap-3 items-center">
        <Link href='/'>
          <ShoppingBag className="w-5 h-5" />
        </Link>

        {
          routes && routes.map(({ name, href, active }) => {
            return (
              <Link className={`text-muted-foreground font-medium text-sm ${active && '!text-foreground'} hover:text-foreground transition-all duration-300 ease-in-out`} key={href} href={href}>{name}</Link>
            )
          })
        }
      </nav>

      <div className="md:hidden flex items-center gap-3">
         <MobileSheet/>
        <Link href='/'>
          <ShoppingBag className="w-5 h-5" />
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <ThemeToggle />
        <Button>Login</Button>
      </div>
    </header>
  )
}
