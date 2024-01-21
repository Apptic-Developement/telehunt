"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HomeTabsType } from "@/lib/types";
import { Dispatch, SetStateAction } from "react";


export default function HomeTabs({
    setTab,
}: {
    setTab: Dispatch<SetStateAction<HomeTabsType>>;
}) {
    return (
        <Tabs defaultValue="channels" onValueChange={(value: string) => setTab(value as HomeTabsType)} className="w-fit">
            <TabsList>
                <TabsTrigger value="channels">Channels</TabsTrigger>
                <TabsTrigger value="groups">Groups</TabsTrigger>
                <TabsTrigger value="bots">Bots</TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
