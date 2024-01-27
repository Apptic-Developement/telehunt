import { HomeShortByType, HomeTabsType } from "@/lib/types";
import { create } from "zustand";

type State = {
  tabs: HomeTabsType;
  shortBy: HomeShortByType;
};
type Action = {
  updateTabs: (tabName: HomeTabsType) => void;
  updateShortBy: (shortByName: HomeShortByType) => void;
};
export const useHomeFilterStore = create<State & Action>((set) => ({
  tabs: "channels",
  shortBy: "top-voted",
  updateTabs: (tabName: HomeTabsType) => set(() => ({ tabs: tabName })),
  updateShortBy: (shortByName: HomeShortByType) =>
    set(() => ({ shortBy: shortByName })),
}));
