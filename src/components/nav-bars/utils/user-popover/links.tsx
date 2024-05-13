'use client';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { ExternalLinkIcon, LogOutIcon } from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

interface Route {
  name: string;
  href: string;
  active: boolean;
  link?: boolean;
}

export const Links = () => {
  const pathName = usePathname();
  const routes = useMemo<Route[]>(
    () => [
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
              {route.link && <ExternalLinkIcon className='h-5 w-5' />}
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
  );
};
