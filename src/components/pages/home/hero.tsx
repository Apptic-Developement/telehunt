"use client";
import { useTransition } from "react";
import SearchForm from "./search-form";
import HomeTabs from "./tabs";
import ShortByMenu from "./short-by-menu";
import { HomeShortByType, HomeTabsType } from "@/lib/types";
import { useHomeFilterStore } from "@/stores/home-filter";

export default function Hero() {
  const updateTabs = useHomeFilterStore((state) => state.updateTabs);

  const shortBy = useHomeFilterStore((state) => state.shortBy);
  const updateShortBy = useHomeFilterStore((state) => state.updateShortBy);

  const [isTabTransitionPending, startTabTransition] = useTransition();
  const [isShortByTransitionPending, startShortByTransition] = useTransition();

  const updateTabWithTransition = (tabName: HomeTabsType) => {
    startTabTransition(() => {
      updateTabs(tabName);
    });
  };

  const updateShortByWithTransition = (shortByName: HomeShortByType) => {
    startShortByTransition(() => {
      updateShortBy(shortByName);
    });
  };
  return (
    <section className="flex flex-col gap-4 md:gap-8">
      <h1 className="text-2xl font-bold">
        Discover numerous Telegram bots, channels, groups!
      </h1>
      <div className="flex md:flex-row flex-col gap-4 max-w-screen md:items-center md:h-10">
        <SearchForm />
        <div className="flex justify-between md:gap-2 h-full">
          <HomeTabs updateTab={updateTabWithTransition} />
          <ShortByMenu
            shortBy={shortBy}
            updateShortBy={updateShortByWithTransition}
          />
        </div>
      </div>
    </section>
  );
}
