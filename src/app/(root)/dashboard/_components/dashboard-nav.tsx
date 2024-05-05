'use client';
import { cn } from '@/lib/utils';
import { LucideIcon, StickyNote, Bell, User2, Wallet } from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

interface Route {
  name: string;
  icon: LucideIcon;
  active: boolean;
  href: string;
}
const DashboardNavLinks = () => {
  const pathName = usePathname();
  const routes = useMemo<Route[]>(
    () => [
      {
        name: 'Account',
        href: '/dashboard/account',
        active: pathName === '/dashboard/account',
        icon: User2,
      },
      {
        name: 'Notifications',
        href: '/dashboard/notifications',
        active: pathName.startsWith('/dashboard/notifications'),
        icon: Bell,
      },
      {
        name: 'Posts',
        href: '/dashboard/posts',
        active: pathName.startsWith('/dashboard/posts'),
        icon: StickyNote,
      },
      {
        name: 'Wallet',
        href: '/dashboard/wallet',
        active: pathName.startsWith('/dashboard/wallet'),
        icon: Wallet,
      },
    ],
    [pathName]
  );
  return (
    <aside className='hidden-scrollbar mb-5 flex flex-row gap-4 md:fixed md:bottom-0 md:top-16 md:mt-10 md:w-48 md:flex-col md:gap-3 lg:w-64'>
      {routes &&
        routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link
              className={cn(
                'text-nowrap font-medium text-muted-foreground transition hover:text-foreground md:flex md:items-center md:justify-start md:gap-2 md:font-semibold',
                {
                  'max-md:active-explore-filter-button !text-foreground':
                    route.active,
                }
              )}
              key={route.href}
              href={route.href}
            >
              <Icon className='hidden h-5 w-5 md:block' />
              <span>{route.name}</span>
            </Link>
          );
        })}
    </aside>
  );
};

export default DashboardNavLinks;
