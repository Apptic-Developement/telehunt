'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { FilterIcon, TagIcon, SortAsc } from 'lucide-react';
import { ResetIcon } from '@radix-ui/react-icons';

type FilterType = 'popular' | 'newly-voted' | 'newly-added';
type FilterButton = {
  name: string;
  href: FilterType;
};

export const ExploreHeader = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('popular');

  const filterButtons: FilterButton[] = [
    { name: 'Popular', href: 'popular' },
    { name: 'Recently Voted', href: 'newly-voted' },
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
          className='hidden-scrollbar flex h-10 w-full items-start justify-start gap-5 overflow-x-scroll text-nowrap text-[0.975rem] font-semibold text-muted-foreground'
        >
          {filterButtons.map((button) => (
            <button
              onClick={() => setActiveFilter(button.href)}
              className={cn(
                'transition-all duration-300 ease-in-out hover:text-foreground',
                {
                  'active-explore-filter-button': activeFilter === button.href,
                }
              )}
              key={button.href}
            >
              {button.name}
            </button>
          ))}
        </div>

        <div className='flex w-full items-center justify-start gap-3'>
          <Button
            className='flex items-center justify-center gap-2 rounded-full'
            variant='outline'
            // size='sm'
          >
            <FilterIcon className='h-4 w-4' />
            <span>Filters</span>
          </Button>
          <Button
            className='flex items-center justify-center gap-2 rounded-full'
            variant='outline'
            // size='sm'
          >
            <SortAsc className='h-4 w-4' />
            <span>Short</span>
          </Button>
          <Button
            className='flex items-center justify-center gap-2 rounded-full'
            variant='outline'
            // size='sm'
          >
            <TagIcon className='h-4 w-4' />
            <span>Tags</span>
          </Button>
          {/* <Button
            className='flex items-center justify-center gap-2 rounded-full border-destructive'
            variant='secondary'
            size='sm'
          >
            <ResetIcon className='h-4 w-4' />
            <span>Reset</span>
          </Button> */}
        </div>
      </div>
    </section>
  );
};
