'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex items-center justify-start gap-5'>
      <button
        className='flex flex-col items-start gap-2'
        onClick={() => setTheme('light')}
      >
        <Image
          src='/assets/light-theme.svg'
          alt='Light'
          width={60}
          height={60}
          className={cn('h-10 w-[4rem] rounded-md', {
            'border-2 border-blue-500': theme === 'light',
          })}
        />
        <span
          className={cn('text-sm font-semibold text-muted-foreground', {
            '!text-foreground': theme === 'light',
          })}
        >
          Light
        </span>
      </button>
      <button
        className='flex flex-col items-start gap-2'
        onClick={() => setTheme('dark')}
      >
        <Image
          src='/assets/dark-theme.svg'
          alt='Dark'
          width={60}
          height={60}
          className={cn('h-10 w-[4rem] rounded-md', {
            'border-2 border-blue-500': theme === 'dark',
          })}
        />
        <span
          className={cn('text-sm font-semibold text-muted-foreground', {
            '!text-foreground': theme === 'dark',
          })}
        >
          Dark
        </span>
      </button>
      <button
        className='flex flex-col items-start gap-2'
        onClick={() => setTheme('system')}
      >
        <Image
          src='/assets/system-theme.svg'
          alt='System'
          width={60}
          height={60}
          className={cn('h-10 w-[4rem] rounded-md', {
            'border-2 border-blue-500': theme === 'system',
          })}
        />
        <span
          className={cn('text-sm font-semibold text-muted-foreground', {
            '!text-foreground': theme === 'system',
          })}
        >
          System
        </span>
      </button>
    </div>
  );
};
