export type CardData = {
  logo: string;
  name: string;
  categories: string[];
  description: string;
  totalUsers: number;
  totalVotes: number;
};

export type HomeTabsType = "channels" | "groups" | "bots";
export type HomeShortByType = "top-voted" | "new";

export interface ApiTelegramChannelData {
  name: string;
  description: string;
  icon: string;
  subscribers: string;
}
