'use client';
import { cn } from '@/lib/utils';
import { LucideIcon, Settings, User2, Bot, Server, Group } from 'lucide-react';
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
    <div className='border-b md:border-none'>
      <ul className='container mb-2 mt-5 flex flex-row gap-5 md:sticky md:top-[7rem] md:mx-0 md:mb-0 md:mt-0 md:flex md:h-fit md:w-72 md:flex-col md:gap-3'>
        {routes &&
          routes.map((route) => {
            const Icon = route.icon;
            return (
              <li key={route.href}>
                <Link
                  className='flex items-center justify-start gap-2'
                  href={route.href}
                >
                  <Icon className='hidden h-5 w-5 md:block' />
                  <span
                    className={cn(
                      'font-semibold text-muted-foreground transition hover:text-foreground',
                      {
                        '!text-foreground': route.active,
                      }
                    )}
                  >
                    {route.name}
                  </span>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProfileNav;
