import { NavLinks } from '@/components/nav-bar/links';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import type { ReactNode } from 'react';

const ExploreLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex flex-col items-start gap-3'>
      <div className='mt-3 flex w-full border-b md:hidden'>
        <NavLinks classNames='md:hidden flex mx-[2rem] mb-2' />
      </div>
      <div className='container flex flex-col gap-5 mt-5'>
        <div className="flex flex-col gap-5">
          <h1 className='font-bold text-4xl'>Explore</h1>
          <div className="flex items-center justify-start gap-3 text-muted-foreground md:text-md text-sm font-medium">
            <button className='active-explore-filter-button'>Popular</button>
            <button>Recently Voted</button>
            <button>Recently Added</button>
          </div>

          <div className="mt-3 flex items-center gap-2 overflow-x-scroll">
            <Button variant='secondary'>Filter</Button>

          </div>

        </div>
        {children}
      </div>
    </main>
  );
};

export default ExploreLayout;
