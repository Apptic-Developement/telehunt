'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useState } from 'react';

export const DeleteAccountModal = () => {
  const DELETE_TEXT = 'Delete My Account';
  const [deleteText, setDeleteText] = useState<string>();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='destructive'>Continue</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are You Sure?</DialogTitle>
          <DialogDescription className='text-sm text-muted-foreground'>
            You want to delete your account permanently.
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

        <DialogFooter>
          <Button variant='destructive' disabled={deleteText !== DELETE_TEXT}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
