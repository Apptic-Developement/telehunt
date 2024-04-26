import ProfileNav from '@/components/profile-nav';
import type { ReactNode } from 'react';

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex flex-col gap-5 md:flex-row'>
      <ProfileNav />
      {children}
    </main>
  );
};

export default ProfileLayout;
