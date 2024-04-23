import { NavLinks } from '@/components/nav-bar/links';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { ReactNode } from 'react';
import { FilterIcon } from 'lucide-react';

const ExploreLayout = ({ children }: { children: ReactNode }) => {
  const buttons = [
    'All',
    'Anime',
    'Nsfw',
    'Community',
    'Movies',
    'Entertenment',
    'Nsfw',
    'Community',
    'Movies',
    'Entertenment',
    'Nsfw',
    'Community',
    'Movies',
    'Entertenment',
    'Nsfw',
    'Community',
    'Movies',
    'Entertenment',
    'Nsfw',
    'Community',
    'Movies',
    'Entertenment',
    'Nsfw',
    'Community',
    'Movies',
    'Entertenment',
  ];
  return (
    <main className='flex w-full flex-col items-start gap-5'>
      <section className='mt-3 flex w-full border-b md:hidden'>
        <NavLinks classNames='md:hidden flex mx-[2rem] mb-2' />
      </section>
      <section className='container mt-5 flex w-full flex-col items-start justify-center gap-5'>
        <div id='ExploreText'>
          <h1 className='text-4xl font-bold'>Explore</h1>
        </div>

        <div
          id='Explore type'
          className='hidden-scrollbar flex h-10 w-full items-start justify-start gap-5 overflow-x-scroll text-nowrap text-sm font-medium text-muted-foreground md:text-[1rem]'
        >
          <button id='active-explore-filter-button'>Top Voted</button>
          <button>Recently Voted</button>
          <button>Recently Added</button>
        </div>

        <div className='flex max-w-full items-center justify-start gap-3'>
          <Button
            className='flex items-center justify-center gap-2 rounded-2xl'
            variant='secondary'
          >
            <FilterIcon className='h-5 w-5' />
            <span className='font-medium'>Filter</span>
          </Button>
          <Separator orientation='vertical' className='h-6 w-1 rounded-lg' />
          <div className='hidden-scrollbar flex items-start justify-start gap-3 overflow-x-scroll'>
            {buttons.map((name) => {
              return (
                <Button className='rounded-2xl' key={name} variant='outline'>
                  {name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>
      {children}
    </main>
  );
};

export default ExploreLayout;
