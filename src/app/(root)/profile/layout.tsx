import ProfileNav from '@/components/profile-nav';
import type { ReactNode } from 'react';

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='container mt-5 flex flex-col gap-5'>
      <ProfileNav />
      <div className='p-0 md:pl-64'>{children}</div>
    </main>
  );
};

export default ProfileLayout;
