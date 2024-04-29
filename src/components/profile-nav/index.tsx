'use client';
import { cn } from '@/lib/utils';
import {
  LucideIcon,
  User2,
  Bot,
  Server,
  Group,
  UserCog,
  StickyNote,
  BadgePlus,
} from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
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
        name: 'General',
        href: '/account',
        active: pathName === '/account',
        icon: UserCog,
      },
      {
        name: 'Posts',
        href: '/account/posts',
        active: pathName.startsWith('/account/posts'),
        icon: StickyNote,
      },
      {
        name: 'Creator',
        href: '/account/creator',
        active: pathName.startsWith('/account/creator'),
        icon: BadgePlus,
      },
    ],
    [pathName]
  );
  return (
    <aside className='hidden-scrollbar flex flex-row gap-4 md:fixed md:bottom-0 md:top-16 md:mt-5 md:w-48 md:flex-col md:gap-3 lg:w-64'>
      {routes &&
        routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link
              className={cn(
                'text-nowrap font-medium text-muted-foreground transition hover:text-foreground md:flex md:items-center md:justify-start md:gap-2',
                {
                  'max-md:active-explore-filter-button !text-foreground':
                    route.active,
                }
              )}
              key={route.href}
              href={route.href}
            >
              <Icon className='hidden h-5 w-5 md:block' />
              <span className={poppins.className}>{route.name}</span>
            </Link>
          );
        })}
    </aside>
  );
};

export default ProfileNav;
