import { Logo } from '@/components/utils/logo';
import React from 'react';

const Loading = () => {
  return (
    <div className='grid h-screen w-screen animate-pulse items-center justify-center'>
      <Logo />
    </div>
  );
};

export default Loading;
