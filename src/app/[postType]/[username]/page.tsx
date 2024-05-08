import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  ArrowBigUpIcon,
  BadgeInfoIcon,
  CrownIcon,
  HashIcon,
  InfoIcon,
  Link2Icon,
  LinkIcon,
  TagIcon,
  TagsIcon,
  ViewIcon,
} from 'lucide-react';
import Link from 'next/link';

const VALID_POST_TYPE = ['bot', 'channel', 'group'];

const Post = async ({
  params: { postType, uid },
}: {
  params: { postType: string; uid: number };
}) => {
  if (!VALID_POST_TYPE.includes(postType)) {
    // An error should be thrown!
  }

  return (
    <main className='container mt-5 flex max-w-full flex-col items-center justify-center'>
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
      <Separator className='my-5 bg-transparent' />
      <section className='grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr]'>
        <div className='flex h-fit flex-col items-start justify-start gap-3 rounded-xl border bg-secondary/40 p-3 backdrop-blur supports-[backdrop-filter]:bg-secondary/40'>
          <div className='flex items-center gap-2'>
            <ViewIcon />
            <h2 className='text-2xl font-semibold'>Overview</h2>
          </div>
          <article>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit aliquam rem quas nobis ipsam veniam obcaecati, culpa
            soluta, earum quibusdam sint fugit voluptates? Exercitationem non
            quaerat deserunt quae laboriosam quas quis consequatur officiis,
            quia dicta neque modi consequuntur, fuga corporis, quasi fugit.
            Numquam, saepe? Quis soluta nemo ipsam voluptatibus distinctio illum
            animi ad amet, officia magni eaque quisquam corrupti, tempora
            reiciendis ullam ratione laboriosam dignissimos delectus sint
            laudantium natus at quo! Numquam ducimus modi rem voluptatibus autem
            quam quod aliquid. Reiciendis suscipit, aperiam provident at
            consectetur adipisci tempora architecto unde, consequatur maiores
            laboriosam atque veritatis aliquam. Architecto repellendus dolorem
            ducimus.
          </article>
        </div>
        <div className='flex flex-col items-start justify-start gap-6'>
          <div className='flex w-full flex-col gap-3 rounded-xl border bg-secondary/40 p-3 backdrop-blur supports-[backdrop-filter]:bg-secondary/40'>
            <div className='flex items-center gap-2'>
              <InfoIcon />
              <h2 className='text-2xl font-semibold'>Details</h2>
            </div>
            <ul className='flex flex-col gap-2'>
              {Array.from(['Votes', 'Subscribers']).map((detail) => {
                return (
                  <li key={detail} className='flex items-center gap-2'>
                    <span className='font-medium'>{detail}</span>
                    <span className='text-muted-foreground'>225</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex w-full flex-col gap-3 rounded-xl border bg-secondary/40 p-3 backdrop-blur supports-[backdrop-filter]:bg-secondary/40'>
            <div className='flex items-center gap-2'>
              <Link2Icon />
              <h2 className='text-2xl font-semibold'>Socials</h2>
            </div>
            <ul className='flex flex-col'>
              {Array.from(['Support', 'Website']).map((link) => {
                return (
                  <li key={link} className='flex items-center'>
                    <LinkIcon className='h-5 w-5 text-muted-foreground' />
                    <Link
                      className={buttonVariants({ variant: 'link' })}
                      href='#'
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex w-full flex-col gap-3 rounded-xl border bg-secondary/40 p-3 backdrop-blur supports-[backdrop-filter]:bg-secondary/40'>
            <div className='flex items-center gap-2'>
              <TagsIcon />
              <h2 className='text-2xl font-semibold'>Tags</h2>
            </div>
            <ul className='flex items-center gap-2'>
              {Array.from(['Crypto', 'Bitcoin', 'Trading']).map((tag) => {
                return (
                  <li
                    key={tag}
                    className={buttonVariants({
                      className: 'flex items-center gap-1 !rounded-2xl',
                      variant: 'outline',
                      size: 'sm',
                    })}
                  >
                    <HashIcon className='h-4 w-4' />
                    <span>{tag}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='flex w-full flex-col gap-3 rounded-xl border bg-secondary/40 p-3 backdrop-blur supports-[backdrop-filter]:bg-secondary/40'>
            <div className='flex items-center gap-2'>
              <CrownIcon />
              <h2 className='text-2xl font-semibold'>Creator</h2>
            </div>
            <Button
              variant='secondary'
              className='flex w-fit items-center gap-2 rounded-2xl'
              size='sm'
            >
              <Avatar className='flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-xl bg-muted'>
                <AvatarImage
                  className='h-full w-full'
                  src='https://github.com/shadcn.png'
                  alt={`${postType} logo`}
                />
                <AvatarFallback>Bot</AvatarFallback>
              </Avatar>
              <h2 className='text-sm font-semibold'>Pranoy</h2>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Post;
