import { NavLinks } from '@/components/nav-bar/links';
import type { ReactNode } from 'react';

const ExploreLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='container flex flex-col items-start gap-5'>
      <NavLinks classNames='md:hidden flex mt-3' />
      {children}
    </main>
  );
};

export default ExploreLayout;
