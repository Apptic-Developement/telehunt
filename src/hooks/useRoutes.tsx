import { SvgIconComponent } from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import {
  Home as HomeIcon,
  HomeOutlined as HomeOutlinedIcon,
  Explore as ExploreIcon,
  ExploreOutlined as ExploreOutlinedIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
} from '@mui/icons-material';

interface Route {
  name: string;
  href?: string;
  active?: boolean;
  icon?: {
    filled: SvgIconComponent;
    outlined: SvgIconComponent;
  };
}

export const useRoutes = ({
  bottomRoutes,
}: {
  bottomRoutes: boolean;
}): Route[] => {
  const pathName = usePathname();

  const headerNavRoutes = useMemo<Route[]>(
    () => [
      {
        name: 'Home',
        href: '/',
        active: pathName === '/',
      },
      {
        name: 'Explore',
        href: '/explore/bots',
        active: pathName.startsWith('/explore/'),
      },
      {
        name: 'Support',
        href: '/support',
        active: pathName.startsWith('/support'),
      },
      {
        name: 'Policy',
        href: '/policy',
        active: pathName.startsWith('/policy'),
      },
    ],
    [pathName]
  );

  const bottomNavRoutes = useMemo<Route[]>(
    () => [
      {
        name: 'Home',
        href: '/',
        active: pathName === '/',
        icon: {
          filled: HomeIcon,
          outlined: HomeOutlinedIcon,
        },
      },

      {
        name: 'Explore',
        href: '/explore/bots',
        active: pathName.startsWith('/explore/'),
        icon: {
          filled: ExploreIcon,
          outlined: ExploreOutlinedIcon,
        },
      },
      {
        name: 'Notifications',
        icon: {
          filled: NotificationsIcon,
          outlined: NotificationsIcon,
        },
      },
      {
        name: 'Profile',
        href: '/profile',
        active: pathName.startsWith('/profile'),
        icon: {
          filled: AccountCircleIcon,
          outlined: AccountCircleOutlinedIcon,
        },
      },
    ],

    [pathName]
  );

  return bottomRoutes ? bottomNavRoutes : headerNavRoutes;
};
