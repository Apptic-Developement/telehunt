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
  PersonOutlined as PersonOutlined,
} from '@mui/icons-material';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export const BottomNav = () => {
  const routes = [
    { name: 'Home', type: 'page', href: '/', active: true, icon: HomeIcon },
    {
      name: 'Explore',
      type: 'page',
      href: '/',
      active: false,
      icon: ExploreOutlinedIcon,
    },
    {
      name: 'Notifications',
      type: 'page',
      href: '/',
      active: false,
      icon: NotificationsOutlinedIcon,
    },
    {
      name: 'Settings',
      type: 'page',
      href: '/',
      active: false,
      icon: SettingsOutlinedIcon,
    },
    {
      name: 'Profile',
      type: 'page',
      href: '/',
      active: false,
      icon: PersonOutlined,
    },
  ];
  return (
    <div className="h-[3.5rem] flex items-center justify-center bg-card border-t fixed z-50 left-0 right-0 bottom-0 rounded-t-sm">
      <nav className="flex items-center gap-3 w-full px-1">
        {routes &&
          routes.map((route) => {
            const Icon = route.icon;
            if (route.type === 'page' && typeof route.href !== 'undefined') {
              return (
                <Link
                  href="/"
                  className={cn('mx-auto flex flex-col items-center', {
                    'text-primary': route.active,
                  })}
                >
                  <Icon />
                  <span
                    className={cn('text-[.5rem]', {
                      'text-[.7rem]': route.active,
                    })}
                  >
                    {route.name}
                  </span>
                </Link>
              );
            }
          })}
      </nav>
    </div>
  );
};
