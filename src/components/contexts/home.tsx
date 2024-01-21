'use client';
import { HomeFiltersType, HomeTabsType } from "@/lib/types";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type HomeContextType = {
    tab: HomeTabsType;
    setTab: Dispatch<SetStateAction<HomeTabsType>>;
    filter: HomeFiltersType;
    setFilter: Dispatch<SetStateAction<HomeFiltersType>>
}
const HomeContext = createContext<HomeContextType>({
    filter: 'top-voted', tab: 'channels', setFilter: () => { }, setTab: () => { }
});

const HomeContextProvider = ({ children }: { children: ReactNode }) => {

    const [tab, setTab] = useState<HomeTabsType>('channels');
    const [filter, setFilter] = useState<HomeFiltersType>('top-voted');
    return (
        <HomeContext.Provider value={{ tab, setTab, filter, setFilter }}>
            {children}
        </HomeContext.Provider>
    )
}

export {
    HomeContext,
    HomeContextProvider
}