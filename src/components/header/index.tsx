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
    <header
      className='sticky top-0 mb-5 flex h-14 items-center justify-between border-b bg-background/60 px-4 backdrop-blur-lg md:px-6 lg:px-8'
      id='scrollBar'
    >
      <div className='flex items-center gap-5'>
        <Link href='/' className='flex items-center gap-2'>
          <CircleAlert />
          <h2 className='text-md font-bold'>
            Telehunt
            <span className='text-md font-semibold text-primary'>.xyz</span>
          </h2>
        </Link>
      </div>
      <nav className='hidden items-center gap-3 md:flex'>
        {routes &&
          routes.map(({ name, href, active }) => {
            return (
              <Link
                className={cn(
                  'text-sm text-muted-foreground hover:text-foreground',
                  { 'font-medium !text-foreground': active }
                )}
                href={href}
                key={href}
              >
                {name}
              </Link>
            );
          })}
      </nav>

      <div className='flex items-center gap-3'>
        <ThemeToggle />
        {/* <Button className='hidden md:inline-block'>Login</Button> */}
        <button className='group relative hidden cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline shadow-2xl shadow-zinc-900  md:inline-block'>
          <span className='absolute inset-0 overflow-hidden rounded-full'>
            <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
          </span>
          <div className='relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10 '>
            <span>Login</span>
            <svg
              fill='none'
              height='16'
              viewBox='0 0 24 24'
              width='16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.75 8.75L14.25 12L10.75 15.25'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
              />
            </svg>
          </div>
          <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40' />
        </button>
        <MobileSheet />
      </div>
    </header>
  );
};
