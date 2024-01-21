export type CardData = {
  logo: string;
  name: string;
  categories: string[];
  description: string;
  totalUsers: number;
  totalVotes: number;
};

export type HomeTabsType = "channels" | "groups" | "bots";
export type HomeFiltersType = "top-voted" | "new";
