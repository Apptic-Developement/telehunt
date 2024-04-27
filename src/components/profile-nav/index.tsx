'use client';
import { cn } from '@/lib/utils';
import { LucideIcon, User2, Bot, Server, Group } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

interface Route {
  name: string;
  icon: LucideIcon;
  active: boolean;
  href: string;
}
const ProfileNav = () => {
  const pathName = usePathname();
  const routes = useMemo<Route[]>(
    () => [
      {
        name: 'Profile',
        href: '/profile',
        active: pathName === '/profile',
        icon: User2,
      },
      {
        name: 'Bots',
        href: '/profile/bots',
        active: pathName === '/profile/bots',
        icon: Bot,
      },
      {
        name: 'Channels',
        href: '/profile/channels',
        active: pathName === '/profile/channels',
        icon: Server,
      },
      {
        name: 'Groups',
        href: '/profile/groups',
        active: pathName === '/profile/groups',
        icon: Group,
      },
    ],
    [pathName]
  );
  return (
    <aside className='hidden-scrollbar flex flex-row gap-4 md:fixed md:bottom-0 md:top-16 md:mt-5 md:w-64 md:flex-col md:gap-3'>
      {routes &&
        routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link
              className={cn(
                'md:text-md text-nowrap font-semibold text-muted-foreground transition hover:text-foreground md:flex md:items-center md:justify-start md:gap-3',
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

export default ProfileNav;
