'use client';
import { useContext, useTransition } from 'react'
import SearchForm from './search-form'
import HomeTabs from './tabs'
import FilterMenu from './filter-menu'
import { HomeFiltersType, HomeTabsType } from '@/lib/types';
import { HomeContext } from '@/components/contexts/home';


export default function Hero() {
    const [isTabTransitionPending, startTabTransition] = useTransition();
    const [isFilterTransitionPending, startFilterTransition] = useTransition();
    const context = useContext(HomeContext)
    const updateTabWithTransition = (tabName: HomeTabsType) => {
        startTabTransition(() => {
            context.setTab(tabName)
        })
    }

    const updateFiltersWithTransition = (filterName: HomeFiltersType) => {
        startFilterTransition(() => {
            context.setFilter(filterName)
        })
    }
    return (
        <section className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Discover numerous Telegram bots, channels, groups!</h1>
            <SearchForm />
            <div className="flex justify-between">
                <HomeTabs setTab={updateTabWithTransition} />
                <FilterMenu filter={context.filter} setFilter={updateFiltersWithTransition} />
            </div>
        </section>
    )
}