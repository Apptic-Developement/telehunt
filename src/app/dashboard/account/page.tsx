import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PersionalDetails } from '../_components/persional-details';
import { ManageAccount } from '../_components/manage-account';

const Account = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-7'>
      <section className='flex flex-col items-start justify-center gap-3'>
        <Avatar className='flex h-28 w-28 items-center justify-center rounded-full bg-muted md:h-32 md:w-32'>
          <AvatarImage
            className='h-full w-full'
            src='https://github.com/shadcn.png'
            alt='Pranoy'
          />
          <AvatarFallback>PM</AvatarFallback>
        </Avatar>

        <div className='flex flex-col items-start justify-center gap-1 '>
          <h1 className='text-2xl font-bold'>Pranoy Majumdar</h1>
          <small className='text-sm text-muted-foreground'>
            pranoymajumdar@gmail.com
          </small>
        </div>
      </section>

      <PersionalDetails />
      <ManageAccount />
    </div>
  );
};

export default Account;
