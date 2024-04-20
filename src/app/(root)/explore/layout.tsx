import { NavLinks } from '@/components/nav-bar/links';
import type { ReactNode } from 'react';

const ExploreLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex flex-col items-start gap-3'>
      <div className='mt-3 flex w-full border-b-2 md:hidden'>
        <NavLinks classNames='md:hidden flex mx-[2rem] mb-2' />
      </div>
      <div className='container'>{children}</div>
    </main>
  );
};

export default ExploreLayout;
