import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowBigUpIcon } from 'lucide-react';

const PostHeader = ({ postType }: { postType: string }) => {
  return (
    <section className='flex w-full flex-col items-center justify-center gap-3 md:flex-row md:justify-between'>
      <div className='flex flex-col items-center justify-center gap-4 md:flex-row'>
        <Avatar className='flex h-[4rem] w-[4rem] items-center justify-center rounded-xl bg-muted'>
          <AvatarImage
            className='h-full w-full'
            src='https://github.com/shadcn.png'
            alt={`${postType} logo`}
          />
          <AvatarFallback>Bot</AvatarFallback>
        </Avatar>
        <div className='flex flex-col gap-1 text-center md:text-start'>
          <h1 className='text-xl font-bold'>Crypto Hub</h1>
          <small className='text-md text-muted-foreground'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            et!
          </small>
        </div>
      </div>

      <div className='flex w-full items-center justify-between gap-3 md:w-fit md:justify-normal'>
        <Button className='w-full rounded-2xl md:w-fit'>Join</Button>
        <Button
          className='flex w-full items-center justify-center gap-1 rounded-2xl md:w-fit'
          variant='secondary'
        >
          <ArrowBigUpIcon />
          <span>Vote</span>
        </Button>
      </div>
    </section>
  );
};

export default PostHeader;
