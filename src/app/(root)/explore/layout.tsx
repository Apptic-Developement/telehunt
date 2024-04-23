import { ExploreHeader } from '@/components/explore-layout';
import { NavLinks } from '@/components/nav-bar/links';
 
import type { ReactNode } from 'react';

const ExploreLayout = ({ children }: { children: ReactNode }) => {
   
  return (
    <main className='flex w-full flex-col items-start gap-5'>
      <section className='mt-3 flex w-full border-b md:hidden'>
        <NavLinks classNames='md:hidden flex mx-[2rem] mb-2' />
      </section>
      <ExploreHeader />
      {children}
    </main>
  );
};

export default ExploreLayout;
