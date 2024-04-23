'use client';

import Link from 'next/link';
import { Logo } from '../utils/logo';
import { SearchBar } from './search-bar';
import { Button, buttonVariants } from '../ui/button';
import { ExternalLink, LogOutIcon, Menu } from 'lucide-react';
import { NavLinks } from './links';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

export const NavBar = () => {
  return (
    <nav className='container sticky top-0 z-50 flex h-[4rem] w-full items-center justify-between gap-4 overflow-x-hidden bg-background'>
      <div className='flex items-center justify-center gap-5'>
        <Logo />
        <NavLinks classNames='md:flex hidden' />
      </div>
      <div className='flex w-full items-center justify-center'>
        <SearchBar />
      </div>
      <div className='flex w-fit items-center justify-end gap-3 lg:w-full'>
        <Link
          href='#'
          className={buttonVariants({
            variant: 'link',
            className: 'hidden px-2 md:block lg:px-4',
          })}
        >
          Policy
        </Link>
        <Link
          href='#'
          className={buttonVariants({ className: 'hidden md:block' })}
        >
          Login
        </Link>
        <MenuPopover />
      </div>
    </nav>
  );
};

interface Route {
  name: string;
  href: string;
  active: boolean;
  link?: boolean;
}
const MenuPopover = () => {
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();
  const routes = useMemo<Route[]>(
    () => [
      { name: 'Home', href: '/', active: pathName === '/' },
      { name: 'Blogs', href: '/blogs', active: pathName.startsWith('/blogs') },
      { name: 'Policy', href: '/policy', active: pathName === '/policy' },
      {
        name: 'Join Telegram',
        href: '/join-telegram',
        active: pathName === '/join-telegram',
        link: true,
      },
    ],
    [pathName]
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <Menu />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='mr-5 flex h-fit flex-col gap-5 rounded-xl bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/65'>
        <div className='flex w-full flex-col items-center md:hidden'>
          <Button className='w-full'>Login</Button>
        </div>
        <Separator className='block md:hidden' />
        <div className='flex items-center justify-start gap-5'>
          <button
            className='flex flex-col items-start gap-2'
            onClick={() => setTheme('light')}
          >
            <Image
              src='/assets/light-theme.svg'
              alt='Light Theme'
              width={60}
              height={60}
              className={cn('rounded-md', {
                'border-2 border-blue-500': theme === 'light',
              })}
            />
            <span
              className={cn('text-sm font-semibold text-muted-foreground', {
                '!text-foreground': theme === 'light',
              })}
            >
              Light
            </span>
          </button>
          <button
            className='flex flex-col items-start gap-2'
            onClick={() => setTheme('dark')}
          >
            <Image
              src='/assets/dark-theme.svg'
              alt='Dark Theme'
              width={60}
              height={60}
              className={cn('rounded-md', {
                'border-2 border-blue-500': theme === 'dark',
              })}
            />
            <span
              className={cn('text-sm font-semibold text-muted-foreground', {
                '!text-foreground': theme === 'dark',
              })}
            >
              Dark
            </span>
          </button>
          <button
            className='flex flex-col items-start gap-2'
            onClick={() => setTheme('system')}
          >
            <Image
              src='/assets/system-theme.svg'
              alt='system Theme'
              width={60}
              height={60}
              className={cn('rounded-md', {
                'border-2 border-blue-500': theme === 'system',
              })}
            />
            <span
              className={cn('text-sm font-semibold text-muted-foreground', {
                '!text-foreground': theme === 'system',
              })}
            >
              System
            </span>
          </button>
        </div>
        <Separator />

        <ul className='flex w-full flex-col items-start justify-center gap-1'>
          {routes &&
            routes.map((route) => {
              return (
                <li
                  className={cn(
                    'w-full rounded-xl border-2 border-transparent px-2 py-2 text-[0.9rem] font-medium',
                    'hover:border-border hover:bg-popover hover:text-popover-foreground dark:hover:bg-popover/20',
                    {
                      'border-border bg-popover text-popover-foreground dark:bg-popover/60':
                        route.active,
                      'flex items-center justify-between gap-2': route.link,
                    }
                  )}
                  key={route.href}
                >
                  <Link href={route.href} target={route.link ? '_blank' : ''}>
                    {route.name}
                  </Link>
                  {route.link && <ExternalLink className='h-5 w-5' />}
                </li>
              );
            })}

          <Separator />

          <li className='flex w-full items-center justify-between gap-2  rounded-md px-2 py-2 text-red-500 hover:text-red-500/50'>
            <Link className='text-sm font-semibold' href='#'>
              Logout
            </Link>
            <LogOutIcon className='h-5 w-5' />
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};
