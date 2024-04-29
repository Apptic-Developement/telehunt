'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

interface SectionProps {
  title: string;
  description: string;
  type: 'display-name' | 'email' | 'username';
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
      className='flex w-full flex-col items-start justify-center gap-3 rounded-lg border'
    >
      <div className='flex flex-col items-start justify-center gap-1 px-4 pt-3'>
        <h2 className='text-lg font-bold capitalize'>{title}</h2>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </div>
      <div className='px-4 py-3'>
        <Input type='text' className='w-fit' />
      </div>
      <Separator />
      <div className='flex w-full items-center justify-between gap-3 px-4 pb-3'>
        <h2 className='text-sm text-muted-foreground'>{footerText}</h2>
        <Button>Save</Button>
      </div>
    </section>
  );
};
