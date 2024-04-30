import type { ReactNode } from 'react';
import AccountNav from './_components/account-nav';

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='container mt-5 flex flex-col gap-5'>
      <AccountNav />
      <div className='p-0 md:pl-48 lg:pl-64'>{children}</div>
    </main>
  );
};

export default ProfileLayout;
