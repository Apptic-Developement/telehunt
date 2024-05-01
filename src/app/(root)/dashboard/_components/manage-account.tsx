'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useState } from 'react';

const DeleteAccountModal = () => {
  const DELETE_TEXT = 'Delete My Account';
  const [deleteText, setDeleteText] = useState<string>();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='link' className='text-destructive'>
          Delete
        </Button>
      </DialogTrigger>

      <DialogContent className='flex flex-col items-center justify-center'>
        <DialogHeader className='flex flex-col items-center justify-center'>
          <DialogTitle>Are You Sure?</DialogTitle>
          <DialogDescription className='text-center text-sm text-muted-foreground'>
            Deleting your account is permanent and irreversible. You will lose
            all your posts and membership status, if any.
          </DialogDescription>
        </DialogHeader>

        <div className='w-full'>
          <Input
            value={deleteText}
            onChange={(e) => setDeleteText(e.target.value)}
            type='text'
            placeholder={`Type '${DELETE_TEXT}'`}
          />
        </div>

        <DialogFooter className='flex w-full items-center justify-between gap-2'>
          <DialogClose
            className={buttonVariants({
              variant: 'outline',
              className: 'w-full rounded-xl border-foreground',
            })}
          >
            Cancel
          </DialogClose>

          <Button
            variant='outline'
            className='w-full rounded-xl border-destructive text-destructive'
            disabled={deleteText !== DELETE_TEXT}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const ManageAccount = () => {
  return (
    <section className='flex w-full flex-col items-start justify-center gap-5'>
      <h2 className='text-xl font-bold'>Manage Account</h2>
      <div className='flex w-full flex-col gap-3 md:pr-40'>
        <div className='flex items-center justify-between gap-3'>
          <div className='flex flex-col items-start justify-center gap-1'>
            <h2 className='font-semibold'>Delete Account</h2>
            <small className='text-sm text-muted-foreground'>
              Permanently delete your Telehunt account.
            </small>
          </div>
          <DeleteAccountModal />
        </div>
        <Separator />
      </div>
    </section>
  );
};
