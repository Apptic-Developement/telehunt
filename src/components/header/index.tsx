'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { Logo } from '../logo';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Person as PersionIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { MoonIcon } from '@radix-ui/react-icons';
import { useScreenSize } from '@/hooks/useScreenSize';
export const Header = () => {
  const { isMobile } = useScreenSize();
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
      });
  }, []);

  if (!isMobile) {
    return (
      <header
        className={cn(
          'h-[3.5rem] flex items-center justify-center z-50 sticky transition-all duration-500 ease-in-out',
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
              <MoonIcon />
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
  }

  return <></>;
};

const NavLinks = () => {
  const routes = [
    { name: 'Home', href: '/', active: true },
    { name: 'Bots', href: '/', active: false },
    { name: 'Channels', href: '/', active: false },
    { name: 'Groups', href: '/', active: false },
    { name: 'Policy', href: '/', active: false },
  ];
  return (
    <div className="flex items-center gap-2">
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
