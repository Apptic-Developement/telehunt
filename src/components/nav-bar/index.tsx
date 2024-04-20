'use client';

import Link from 'next/link';
import { Logo } from '../utils/logo';
import { SearchBar } from './search-bar';
import { Button, buttonVariants } from '../ui/button';
import { Menu } from 'lucide-react';
import { NavLinks } from './links';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export const NavBar = () => {
  return (
    <nav className='container sticky top-0 flex h-[4rem] w-full items-center justify-between gap-4 overflow-x-hidden bg-background'>
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

const MenuPopover = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <Menu />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='mr-5 flex h-fit flex-col gap-5 bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/65'>
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

        <ul className='flex w-full flex-col items-start justify-center gap-3'>
          <li className='w-full rounded-md px-2 py-1 text-muted-foreground hover:bg-secondary/40 hover:text-foreground'>
            <Link className='text-sm font-semibold' href='#'>
              Blogs
            </Link>
          </li>
          <li className='w-full rounded-md px-2 py-1 text-muted-foreground hover:bg-secondary/40 hover:text-foreground'>
            <Link className='text-sm font-semibold' href='#'>
              Policy
            </Link>
          </li>

          <Separator />

          <li className='w-full rounded-md px-2 py-1 text-red-500 hover:text-red-500/50'>
            <Link className='text-sm font-semibold' href='#'>
              Logout
            </Link>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};
