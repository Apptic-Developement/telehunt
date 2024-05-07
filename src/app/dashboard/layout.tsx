import type { ReactNode } from 'react';
import DashboardNavLinks from './_components/dashboard-nav';

const AccountLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='container mt-5 flex flex-col gap-5 md:mt-10'>
      <DashboardNavLinks />
      <div className='p-0 md:pl-48 lg:pl-64'>{children}</div>
    </main>
  );
};

export default AccountLayout;
