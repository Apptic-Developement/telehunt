'use client';

import { Logo } from '@/components/utils/logo';
import { useMounted } from '@/hooks/useMounted';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import React from 'react';
import { UserPopover } from '../utils/user-popover';
import { Skeleton } from '@/components/ui/skeleton';

export const DashboardNavBar = () => {
  const isMounted = useMounted();
  return (
    <nav className='container sticky top-0 z-50 flex h-[4rem] w-full items-center justify-between gap-3 overflow-x-hidden bg-background'>
      <div className='flex items-center justify-center gap-5'>
        <Link href='/explore/bots' className='hidden md:inline'>
          <Logo />
        </Link>
        <Link
          className='block font-medium text-muted-foreground transition hover:text-foreground md:hidden'
          href='/explore/bots'
        >
          <ArrowLeft />
        </Link>
      </div>
      <div className='block md:hidden'>
        <h2 className='text-xl font-bold'>Dashboard</h2>
      </div>
      <div>
        {isMounted ? <UserPopover /> : <Skeleton className='h-10 w-10' />}
      </div>
    </nav>
  );
};
