import { NavLinks } from '@/components/nav-bar/links';
import { Button } from '@/components/ui/button';

import type { ReactNode } from 'react';

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
      <section className='container mt-5 flex w-full flex-col items-start justify-center gap-8'>
        <div id='ExploreText'>
          <h1 className='text-4xl font-bold'>Explore</h1>
        </div>

        <div
          id='ExploreActions'
          className='flex max-w-full flex-col items-start justify-start gap-4 max-md:gap-3'
        >
          <div
            id='Explore type'
            className='hidden-scrollbar flex h-10 w-full items-start justify-start gap-5 overflow-x-scroll text-nowrap text-[0.975rem] font-semibold text-muted-foreground max-md:text-sm'
          >
            <button id='active-explore-filter-button'>Top Voted</button>
            <button>Newly Voted</button>
            <button>Newly Added</button>
          </div>

          <div className='hidden-scrollbar flex w-full items-start justify-start gap-3 overflow-x-scroll'>
            {buttons.map((name, index) => {
              return (
                <Button
                  className='rounded-2xl'
                  key={name}
                  variant={index === 0 ? 'default' : 'outline'}
                >
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
