import React from 'react'
import SearchForm from './search-form'
import HomeTabs from './tabs'
import FilterMenu from './filter-menu'

export default function Hero() {
    return (
        <section className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Discover numerous Telegram bots, channels, groups!</h1>
            <SearchForm />
            <div className="flex justify-between">
                <HomeTabs />
                <FilterMenu />
            </div>
        </section>
    )
}
