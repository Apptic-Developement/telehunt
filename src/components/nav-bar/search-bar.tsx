'use client';

import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

import { Search } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const SearchBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <Button
      variant='secondary'
      className='w-full items-start justify-between gap-3 rounded-full text-muted-foreground'
    >
      <div className='items-center-justify-center flex gap-3'>
        <Search className='h-5 w-5 text-foreground' />
        <span> Search...</span>
      </div>
      <p className='hidden text-sm text-muted-foreground md:inline-block'>
        Press{' '}
        <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
          <span className='text-xs'>⌘</span>J
        </kbd>
      </p>
    </Button>
  );
};
