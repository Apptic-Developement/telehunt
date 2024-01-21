'use client';
import { useState } from 'react'
import SearchForm from './search-form'
import HomeTabs from './tabs'
import FilterMenu from './filter-menu'
import { HomeFiltersType, HomeTabsType } from '@/lib/types';


export default function Hero() {
    const [tab, setTab] = useState<HomeTabsType>('channels')
    const [filter, setFilter] = useState<HomeFiltersType>('top-voted');
    return (
        <section className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Discover numerous Telegram bots, channels, groups!</h1>
            <SearchForm />
            <div className="flex justify-between">
                <HomeTabs  setTab={setTab} />
                <FilterMenu filter={filter} setFilter={setFilter} />
            </div>
        </section>
    )
}