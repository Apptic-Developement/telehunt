'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const PersionalDetails = () => {
  return (
    <section className='flex w-full flex-col items-start justify-center gap-5'>
      <h2 className='text-xl font-bold'>Personal details</h2>
      <div className='flex w-full flex-col gap-3 md:pr-40'>
        <div className='flex items-center justify-between gap-3'>
          <div className='flex flex-col items-start justify-center gap-1'>
            <h2 className='font-semibold'>Name</h2>
            <small className='text-sm text-muted-foreground'>
              Pranoy Majumdar
            </small>
          </div>
          <Button variant='link'>Edit</Button>
        </div>
        <Separator />
      </div>
      <div className='flex w-full flex-col gap-3 md:pr-40'>
        <div className='flex items-center justify-between gap-3'>
          <div className='flex flex-col items-start justify-center gap-1'>
            <h2 className='font-semibold'>Email</h2>
            <small className='text-sm text-muted-foreground'>
              pranoymajumdar@gmail.com
            </small>
          </div>
          <Button variant='link'>Edit</Button>
        </div>
        <Separator />
      </div>
    </section>
  );
};
