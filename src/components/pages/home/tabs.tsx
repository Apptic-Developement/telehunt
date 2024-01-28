"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HomeTabsType } from "@/lib/types";

export default function HomeTabs({
  updateTab,
}: {
  updateTab: (tabName: HomeTabsType) => void;
}) {
  return (
    <Tabs
      defaultValue='channels'
      onValueChange={(value: string) => updateTab(value as HomeTabsType)}
      className='w-fit'
    >
      <TabsList>
        <TabsTrigger value='channels'>Channels</TabsTrigger>
        <TabsTrigger value='groups'>Groups</TabsTrigger>
        <TabsTrigger value='bots'>Bots</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
