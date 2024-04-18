'use client';
import {
  Home as HomeIcon,
  HomeOutlined as HomeOutlinedIcon,
  Explore as ExploreIcon,
  ExploreOutlined as ExploreOutlinedIcon,
  Notifications as NotificationsIcon,
  NotificationsOutlined as NotificationsOutlinedIcon,
  Settings as SettingsIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  Person as PersonIcon,
  PersonOutlined as PersonOutlinedIcon,
  SvgIconComponent,
} from '@mui/icons-material';
import { cn } from '@/lib/utils';
import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SettingsDrawer } from '../mobile-drawers/settings';
import { NotificationsDrawer } from '../mobile-drawers/notifications';

interface Route {
  name: string;
  active: boolean;
  onClick: (...args: any) => void;
  href?: string;
  icon: {
    filled: SvgIconComponent;
    outlined: SvgIconComponent;
  };
  parentComponent?: any;
}

export const BottomNav = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
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

  const pathName = usePathname();
  const routes = useMemo<Route[]>(
    () => [
      {
        name: 'Home',
        href: '/',
        active: pathName === '/',
        icon: {
          filled: HomeIcon,
          outlined: HomeOutlinedIcon,
        },
        onClick() {},
      },
      {
        name: 'Explore',
        href: '/explore/bots',
        active: pathName.startsWith('/explore'),
        icon: {
          filled: ExploreIcon,
          outlined: ExploreOutlinedIcon,
        },
        onClick() {},
      },
      {
        name: 'Notifications',
        active: false,
        icon: {
          filled: NotificationsIcon,
          outlined: NotificationsOutlinedIcon,
        },
        onClick() {},
        parentComponent: NotificationsDrawer,
      },
      {
        name: 'Settings',
        active: false,
        icon: {
          filled: SettingsIcon,
          outlined: SettingsOutlinedIcon,
        },
        onClick() {},
        parentComponent: SettingsDrawer,
      },
      {
        name: 'Profile',
        href: '/profile',
        active: pathName.startsWith('/profile'),
        icon: {
          filled: PersonIcon,
          outlined: PersonOutlinedIcon,
        },
        onClick() {},
      },
    ],
    [pathName]
  );
  return (
    <section
      className={cn(
        'md:hidden block fixed bottom-0 left-0 right-0 rounded-t-md bg-card drop-shadow-lg border-t-2 h-[3.2rem] p-1 transition-all duration-300 ease-in-out',

        {
          '-bottom-14': scrollPosition > lastScrollPosition,
        }
      )}
    >
      <div className="flex items-center gap-4 justify-around py-auto h-full">
        {routes &&
          routes.map((route) => {
            const ActiveIcon = route.icon.filled;
            const NonActiveIcon = route.icon.outlined;
            const classNames = cn(
              'bg-transparent text-muted-foreground p-1 rounded-sm',
              {
                '!text-primary bg-primary/20 p-1': route.active,
              }
            );
            if (route.href) {
              return (
                <Link href={route.href} key={route.href} className={classNames}>
                  {route.active ? <ActiveIcon /> : <NonActiveIcon />}
                </Link>
              );
            }
            if (route.parentComponent) {
              const ParentComponent = route.parentComponent;

              return (
                <ParentComponent key={route.name}>
                  <button className={classNames}>
                    {route.active ? <ActiveIcon /> : <NonActiveIcon />}
                  </button>
                </ParentComponent>
              );
            }
            return (
              <button
                key={route.name}
                onClick={() => route.onClick()}
                className={classNames}
              >
                {route.active ? <ActiveIcon /> : <NonActiveIcon />}
              </button>
            );
          })}
      </div>
    </section>
  );
};
