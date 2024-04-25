'use client';

import { useState } from 'react';
import { Button } from '../ui/button';

type FilterType = 'popular' | 'newly-voted' | 'newly-added';
type FilterButton = {
  name: string;
  href: FilterType;
};
export const ExploreHeader = () => {
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
  const [activeFilter, setActiveFilter] = useState<FilterType>('popular');
  const filterButtons: FilterButton[] = [
    { name: 'Popular', href: 'popular' },
    { name: 'Newly Voted', href: 'newly-voted' },
    { name: 'Newly Added', href: 'newly-added' },
  ];
  return (
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
          {filterButtons.map((button) => (
            <button
              onClick={() => setActiveFilter(button.href)}
              className='transition-all duration-300 ease-in-out hover:text-foreground'
              key={button.href}
              id={
                activeFilter === button.href
                  ? 'active-explore-filter-button'
                  : ''
              }
            >
              {button.name}
            </button>
          ))}
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
  );
};
