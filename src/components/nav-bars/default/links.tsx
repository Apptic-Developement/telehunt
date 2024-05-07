'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

interface Route {
  name: string;
  active: boolean;
  href: string;
}
export const NavLinks = ({ classNames }: { classNames?: string }) => {
  const pathName = usePathname();
  const routes = useMemo<Route[]>(
    () => [
      {
        name: 'Bots',
        href: '/explore/bots',
        active: pathName.startsWith('/explore/bots'),
      },
      {
        name: 'Channels',
        href: '/explore/channels',
        active: pathName.startsWith('/explore/channels'),
      },
      {
        name: 'Groups',
        href: '/explore/groups',
        active: pathName.startsWith('/explore/groups'),
      },
    ],
    [pathName]
  );
  return (
    <ul
      id='nav-items'
      className={cn('items-center justify-center gap-5', classNames)}
    >
      {routes &&
        routes.map(({ name, href, active }) => {
          return (
            <li className='w-fit' key={href}>
              <Link
                className={cn(
                  'text-md font-semibold text-muted-foreground transition-all duration-300 hover:text-foreground',
                  {
                    '!text-foreground': active,
                  }
                )}
                href={href}
                key={href}
              >
                {name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
