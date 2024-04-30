'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { DeleteAccountModal } from './delete-account';

interface SectionProps {
  title: string;
  description: string;
  type: 'display-name' | 'email' | 'username' | 'delete';
  footerText: string;
}
export const GeneralSection = ({
  title,
  description,
  type,
  footerText,
}: SectionProps) => {
  return (
    <section
      id='Display Name Section'
      className={cn(
        'flex w-full flex-col items-start justify-center gap-3 rounded-lg border',
        {
          'border-destructive bg-destructive/20': type === 'delete',
        }
      )}
    >
      <div className='flex flex-col items-start justify-center gap-1 px-4 pt-3'>
        <h2 className='text-lg font-bold capitalize'>{title}</h2>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </div>
      {type !== 'delete' && (
        <div className='px-4 py-3'>
          <Input type='text' className='w-fit' />
        </div>
      )}
      <Separator />
      <div className='flex w-full items-center justify-between gap-3 px-4 pb-3'>
        <h2 className='text-sm text-muted-foreground'>{footerText}</h2>
        {type === 'delete' ? <DeleteAccountModal /> : <Button>Save</Button>}
      </div>
    </section>
  );
};
