'use client';

import Link from 'next/link';
import { Logo } from '../../utils/logo';
import { SearchBar } from './search-bar';
import { buttonVariants } from '../../ui/button';
import { NavLinks } from './links';
import { useMounted } from '@/hooks/useMounted';
import { Skeleton } from '../../ui/skeleton';
import { UserPopover } from '../utils/user-popover';
import Image from 'next/image';

export const ExploreNavBar = () => {
  const isMounted = useMounted();

  return (
    <nav className='container sticky top-0 z-50 flex h-[4rem] w-full items-center justify-between gap-4 overflow-x-hidden bg-background'>
      <div className='flex items-center justify-center gap-5'>
        <Logo />
        <NavLinks classNames='md:flex hidden' />
      </div>
      <div className='flex w-full items-center justify-center'>
        {isMounted ? (
          <SearchBar />
        ) : (
          <Skeleton className='h-10 w-full rounded-2xl' />
        )}
      </div>
      <div className='flex w-fit items-center justify-end gap-3 lg:w-full'>
        <Link
          href='#'
          className={buttonVariants({
            variant: 'link',
            className: 'hidden px-2 md:block lg:px-4',
          })}
        >
          Policy
        </Link>
        <Link
          href='#'
          className={buttonVariants({ className: 'hidden md:block' })}
        >
          Login
        </Link>
        {isMounted ? <UserPopover /> : <Skeleton className='h-10 w-10' />}
      </div>
    </nav>
  );
};
