import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowBigUpIcon } from 'lucide-react';
 

const VALID_POST_TYPE = ['bot', 'channel', 'group'];

const Post = async ({
  params: { postType, username },
 
}: {
  params: { postType: string; username: string };
 
}) => {
  if (!VALID_POST_TYPE.includes(postType)) {
    // An error should be thrown!
  }

  return (
    <main className='container mt-5 flex max-w-full flex-col items-center justify-center'>
      <section className='flex w-full flex-col items-center justify-center gap-3 md:flex-row md:justify-between'>
        <div className='flex flex-col items-center justify-center gap-5 md:items-start md:justify-start'>
          <div className='flex flex-col items-center justify-center gap-4 md:flex-row'>
            <Avatar className='flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-muted'>
              <AvatarImage
                className='h-full w-full'
                src='https://github.com/shadcn.png'
                alt={username}
              />
              <AvatarFallback>Bot</AvatarFallback>
            </Avatar>
            <div className='flex md:text-start text-center flex-col gap-1'>
              <h1 className='text-xl font-bold'>Crypto Hub</h1>
              <small className='text-md text-muted-foreground'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cumque, et!
              </small>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {
              Array.from(['Crypto', 'Bitcoin', 'Trading']).map(tag => {
                return (
                  <Badge variant='secondary' key={tag}>{tag}</Badge>
                )
              })
            }
          </div>
        </div>
        <div className='flex md:justify-normal justify-between md:w-fit items-center gap-3 w-full'>
          <Button className='rounded-2xl w-full md:w-fit'>Join</Button>
          <Button
            className='flex items-center w-full md:w-fit justify-center gap-1 rounded-2xl'
            variant='secondary'
          >
            <ArrowBigUpIcon />
            <span>Vote</span>
          </Button>
        </div>
      </section>
      <Separator className='mt-5' />
    </main>
  );
};

export default Post;
 