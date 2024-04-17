'use client';

import type { ReactNode } from 'react';
import { Button } from '../ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { LanguageSelect } from '../language-select';
import { useTheme } from 'next-themes';

export const SettingsDrawer = ({ children }: { children: ReactNode }) => {
  const { theme, setTheme } = useTheme();
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
        </DrawerHeader>
        <div className="container flex flex-col gap-3">
          <Separator />
          <div className="flex items-center justify-between space-x-2 h-10">
            <Label htmlFor="dark-theme">Dark Theme</Label>
            <Switch checked={theme === 'dark'} onCheckedChange={(ev) => setTheme(ev.valueOf() ? 'dark' : 'light')} id="dark-theme" />
          </div>
          <Separator />
          <Separator />
          <div className="flex items-center justify-between space-x-2 h-10">
            {/* <Label htmlFor="language">Language</Label>
            <Switch id="language" /> */}
            <LanguageSelect />
          </div>
          <Separator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
