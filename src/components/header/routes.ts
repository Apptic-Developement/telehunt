'use client';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
interface Route {
  name: string;
  href: string;
  active: boolean;
}

export const useRoutes = (): Route[] => {
  const pathName = usePathname();
  return useMemo<Route[]>(
    () => [
      {
        name: 'Home',
        href: '/',
        active: pathName === '/',
      },
      {
        name: 'Bots',
        href: '/bots',
        active: pathName.startsWith('/bots'),
      },
      {
        name: 'Channels',
        href: '/channels',
        active: pathName.startsWith('/channels'),
      },
      {
        name: 'Groups',
        href: '/groups',
        active: pathName.startsWith('/groups'),
      },
      {
        name: 'Tags',
        href: '/tags',
        active: pathName.startsWith('/tags'),
      },
    ],
    [pathName]
  );
};
