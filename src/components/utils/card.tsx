'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { ServerIcon, ArrowBigUpDashIcon } from 'lucide-react';
import Link from 'next/link';

interface CardProps {
  icon: string;
  name: string;
  tags: string[];
  description: string;
  totalUsers: number;
  totalVoters: number;
}
export const Card = ({
  icon,
  name,
  tags,
  description,
  totalUsers,
  totalVoters,
}: CardProps) => {
  return (
    <Link
      href='#'
      passHref
      className='flex h-56 w-64 flex-col gap-4 rounded-lg bg-card px-4 py-3 text-card-foreground max-sm:w-full'
    >
      <div id='header' className='flex items-center gap-3'>
        <Avatar>
          <AvatarImage className='h-10 w-10' src={icon} alt={name} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <div className='flex flex-col'>
          <h2 className='text-md font-semibold'>{name}</h2>
          <div className='flex items-center gap-1 text-sm font-medium text-muted-foreground'>
            {tags &&
              tags.map((tag, index) => {
                return (
                  <small key={tag}>{index === 2 ? tag : `${tag},`} </small>
                );
              })}
          </div>
        </div>
      </div>

      <p
        className='mb-auto h-24 overflow-hidden text-sm font-normal text-muted-foreground'
        id='description'
      >
        {description}
      </p>

      <div id='footer' className='flex items-center justify-between gap-2'>
        <div className='flex items-center gap-1'>
          <ServerIcon className='h-4 w-4' />
          <span className='text-sm font-normal'>{totalUsers}</span>
        </div>
        <div className='flex items-center gap-1'>
          <ArrowBigUpDashIcon className='h-4 w-4' />
          <span className='text-sm font-normal'>{totalVoters}</span>
        </div>
      </div>
    </Link>
  );
};
