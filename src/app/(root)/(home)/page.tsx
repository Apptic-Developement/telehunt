import { buttonVariants } from '@/components/ui/button';
import { MouseIcon } from 'lucide-react';
import Link from 'next/link';

const Home = () => {
  return (
    <main className='mt-10 flex flex-col items-center'>
      <div id='hero' className='flex flex-col items-center gap-5'>
        <div className='flex flex-col items-center text-center font-bold'>
          <h2 className='text-3xl md:text-4xl'>Discover and Connect</h2>
          <h1 className='text-sm font-medium text-muted-foreground'>
            Your Ultimate Hub for Telegram Bots, Channels, and Groups
          </h1>
        </div>

        <Link
          href='#'
          className={buttonVariants({
            className: 'flex items-center gap-1 text-sm',
            variant: 'outline',
            size: 'sm',
          })}
        >
          <MouseIcon className='h-4 w-4' />
          <span>Explore</span>
        </Link>
      </div>
    </main>
  );
};

export default Home;
