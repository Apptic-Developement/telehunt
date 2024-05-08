'use client';
import { usePathname } from 'next/navigation';
import { DashboardNavBar } from './dashboard';
import { DefaultNavBar } from './default';
export const NavBar = () => {
  const pathName = usePathname();

  if (pathName.startsWith('/dashboard')) {
    return <DashboardNavBar />;
  }
  return <DefaultNavBar />;
};
