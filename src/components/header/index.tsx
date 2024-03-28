'use client';
import useRoutes from "@/hooks/useRoutes";
import { ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Search } from "./search";
import { ThemeToggle } from "./theme-toggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";



export const Header = () => {
  const routes = useRoutes();
  return (
    <header className="flex md:justify-between items-center w-full gap-3 px-6 py-2 sticky h-14 border-b top-0 bg-background/80 backdrop-blur-md z-0">
      <nav className="md:flex hidden gap-3 text-sm items-center">
        <Link href='/'>
          <ShoppingBag />
        </Link>
        {
          routes && routes.map((route) => {
            return <Link className={`text-muted-foreground transition-colors hover:text-foreground ${route.active && 'font-semibold !text-foreground'}`} href={route.href} key={route.href}>{route.name}</Link>
          })
        }
      </nav>
      {/* <Button variant='outline' size='icon' className="md:hidden">
        <HamburgerMenuIcon />
      </Button> */}
      <div className="flex items-center justify-between gap-2 md:w-fit w-full">
        <Search />
        <div className="md:flex hidden items-center gap-2">
          <ThemeToggle />
          <Button>Login</Button>
        </div>
      </div>
    </header>
  )
}
