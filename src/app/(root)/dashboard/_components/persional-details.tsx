'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useMounted } from '@/hooks/useMounted';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface PersionalDetailEdit {
  toggle: boolean;
  title: string;
  description: string;
  label: string;
  select?: string[];
}
interface PersionalDetail {
  type: 'name' | 'email' | 'region';
  title: string;
  value: string;
  edit: PersionalDetailEdit;
}

export const PersionalDetails = () => {
  const [details, setDetails] = useState<PersionalDetail[]>([
    {
      type: 'name',
      title: 'Name',
      value: 'Pranoy Majumdar',
      edit: {
        toggle: false,
        title: 'Edit name',
        description:
          'This will be visible on your profile and for your other team members if you’re in a team',
        label: 'Full name',
      },
    },
    {
      type: 'email',
      title: 'Email',
      value: 'pranoymajumdar@gmail.com',
      edit: {
        toggle: false,
        title: 'Edit email address',
        description: 'This will be used for logging in and account recovery.',
        label: 'Email address',
      },
    },
    {
      type: 'region',
      title: 'Region',
      value: 'India',
      edit: {
        toggle: false,
        title: 'Edit region',
        description:
          'This will be used to know that from which region you belongs to.',
        label: 'Select Region',
      },
    },
  ]);

  const isMounted = useMounted();

  return (
    <section className='flex w-full flex-col items-start justify-center gap-5'>
      <h2 className='text-xl font-bold'>Personal details</h2>
      {isMounted &&
        details &&
        details.map((detail) => {
          return (
            <div
              key={detail.title}
              className='flex w-full flex-col gap-3 md:pr-40'
            >
              <div className='flex items-center justify-between gap-3'>
                <div className='flex flex-col items-start justify-center gap-1'>
                  <h2 className='font-semibold'>{detail.title}</h2>
                  <small className='text-sm text-muted-foreground'>
                    {detail.value}
                  </small>
                </div>
                <EditModal {...detail.edit} />
              </div>
              <Separator />
            </div>
          );
        })}

      {isMounted === false &&
        Array.from(Array(3).keys()).map((_, index) => {
          return (
            <div key={index} className='flex w-full flex-col gap-3 md:pr-40'>
              <div className='flex items-center justify-between gap-3'>
                <div className='flex flex-col items-start justify-center gap-3'>
                  <Skeleton className='h-7 w-24' />
                  <small className='text-sm text-muted-foreground'>
                    <Skeleton className='h-5 w-32' />
                  </small>
                </div>
                <Skeleton className='h-8 w-10' />
              </div>
              <Separator />
            </div>
          );
        })}
    </section>
  );
};

const EditModal = ({
  title,
  description,
  label,
  select,
}: PersionalDetailEdit) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='link'>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className='flex flex-col items-start justify-start gap-2'>
          <Label htmlFor={`${label}-input`.replace(' ', '')}>{label}</Label>
          <Input type='text' id={`${label}-input`} />
        </div>
        <DialogFooter className='w-full justify-between gap-2'>
          <DialogClose
            className={cn(
              buttonVariants({
                variant: 'secondary',
              }),
              'w-full rounded-2xl'
            )}
          >
            Cancel
          </DialogClose>
          <Button className='w-full rounded-2xl'>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
