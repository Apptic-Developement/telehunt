'use client';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { LayoutDashboardIcon, Menu } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { ThemeSwitcher } from './theme';
import { Links } from './links';
import { cn } from '@/lib/utils';

export const UserPopover = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <Menu />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='mr-5 flex h-fit flex-col gap-5 rounded-xl bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/65'>
        <div className='flex w-full flex-col items-center md:hidden'>
          <Button className='w-full'>Login</Button>
        </div>
        <Separator className='block md:hidden' />
        <ThemeSwitcher />
        <Separator />
        <button
          className={cn(
            'flex w-full items-center justify-start gap-3 rounded-xl border-2 border-transparent px-2 py-2 text-[0.9rem] font-medium',
            'hover:border-border hover:bg-popover hover:text-popover-foreground dark:hover:bg-popover/40',
            {
              'border-border bg-popover text-popover-foreground dark:bg-popover/40':
                pathName.startsWith('/dashboard/'),
              'flex items-center justify-start gap-3':
                pathName.startsWith('/dashboard/'),
            }
          )}
          onClick={() => router.push('/dashboard')}
        >
          <LayoutDashboardIcon className='h-[1.3rem] w-[1.3rem]' />
          <span>Dashboard</span>
        </button>
        <Separator />

        <Links />
      </PopoverContent>
    </Popover>
  );
};
