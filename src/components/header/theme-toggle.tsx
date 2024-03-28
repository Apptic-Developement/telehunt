'use client';

import React from 'react'
import { Button } from '../ui/button';
import { Moon } from 'lucide-react';

export const ThemeToggle = () => {
  return (
     <Button size='icon' variant='outline' className='rounded-full'>
        <Moon className='w-5 h-5'/>
     </Button>
  )
}
