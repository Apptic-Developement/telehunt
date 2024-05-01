import type { ReactNode } from 'react';
import AccountNav from './_components/dashboard-nav';
import { AccountsNavBar } from '@/components/nav-bars/dashboard';

const AccountLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AccountsNavBar />
      <main className='container mt-5 flex flex-col gap-5 md:mt-10'>
        <AccountNav />
        <div className='p-0 md:pl-48 lg:pl-64'>{children}</div>
      </main>
    </>
  );
};

export default AccountLayout;
