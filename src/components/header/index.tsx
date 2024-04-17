'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { Logo } from '../logo';
import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Person as PersionIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

import { usePathname } from 'next/navigation';

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', (_) => {
      setScrollPosition((previousPosition) => {
        previousPosition !== window.scrollY &&
          setLastScrollPosition(previousPosition);

        return window.scrollY;
      });
    });

    return () =>
      window.removeEventListener('scroll', () => {
        setScrollPosition(0);
        setLastScrollPosition(0);
      });
  }, []);

  return (
    <header
      className={cn(
        'h-[3.5rem] md:flex hidden items-center justify-center z-50 sticky transition-all duration-500 ease-in-out',
        {
          'bg-background/95 supports-[backdrop-filter]:bg-background/65 backdrop-blur border-b':
            scrollPosition > 30,
        },
        `${scrollPosition < lastScrollPosition ? 'top-0' : '-top-24'}`
      )}
    >
      <nav className="container flex items-center justify-between my-3">
        <div className="flex items-center gap-5" id="leftSection">
          <Link href="/">
            <Logo />
          </Link>
          <NavLinks />
        </div>
        <div className="flex items-center gap-2" id="rightSection">
          <Button size="icon" variant="outline">
            <NotificationsIcon />
          </Button>
          <Button size="icon" variant="outline">
            <SettingsIcon />
          </Button>
          <Button size="icon" variant="outline">
            <PersionIcon />
          </Button>
        </div>
      </nav>
    </header>
  );
};

interface Route {
  name: string;
  href: string;
  active: boolean;
}
const NavLinks = () => {
  const pathName = usePathname();
  const routes = useMemo<Route[]>(
    () => [
      { name: 'Home', href: '/', active: pathName === '/' },
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
    <div className="md:flex hidden items-center gap-2">
      {routes &&
        routes.map((route) => {
          return (
            <Link
              className={cn('font-medium text-sm', {
                'text-primary': route.active,
              })}
              href={route.href}
              key={route.href}
            >
              {route.name}
            </Link>
          );
        })}
    </div>
  );
};
