'use client';

import { CircleAlert } from 'lucide-react';
import Link from 'next/link';
import { useRoutes } from './routes';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import { Button } from '../ui/button';
import { MobileSheet } from './mobile-sheet';

export const Header = () => {
  const routes = useRoutes();
  return (
    <header className='sticky top-0 flex h-14 items-center justify-between border-b bg-background/60 px-4 backdrop-blur-lg md:px-6 lg:px-8 mb-5' id='scrollBar'>

      <div className="flex items-center gap-5">
        <Link href='/' className='flex items-center gap-2'>
          <CircleAlert />
          <h2 className='text-md font-bold'>Telehunt<span className='text-md font-semibold text-primary'>.xyz</span></h2>
        </Link>
        <nav className='md:flex hidden items-center gap-3'>
          {
            routes && routes.map(({ name, href, active }) => {
              return (
                <Link className={cn(
                  'text-muted-foreground text-sm font-normal hover:text-foreground',
                  { '!text-foreground font-medium': active }
                )} href={href} key={href}>
                  {name}
                </Link>
              )
            })
          }
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button className='md:inline-block hidden'>Login</Button>
        <MobileSheet />
      </div>
    </header>
  );
};
