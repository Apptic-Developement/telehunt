import { ExploreHeader } from '@/components/explore-layout';
import { NavLinks } from '@/components/nav-bars/default/links';
import type { ReactNode } from 'react';

const ExploreLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex w-full flex-col items-start gap-5'>
      <ExploreHeader />
      {children}
    </main>
  );
};

export default ExploreLayout;
