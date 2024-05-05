import type { ReactNode } from 'react';
import DashboardNavLinks from './_components/dashboard-nav';
import { DashboardNavBar } from '@/components/nav-bars/dashboard';

const AccountLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <DashboardNavBar />
      <main className='container mt-5 flex flex-col gap-5 md:mt-10'>
        <DashboardNavLinks />
        <div className='p-0 md:pl-48 lg:pl-64'>{children}</div>
      </main>
    </>
  );
};

export default AccountLayout;
