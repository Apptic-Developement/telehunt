import { useMemo } from "react";
import { usePathname } from "next/navigation";
import ChannelIcon from "@mui/icons-material/DynamicFeed";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupsIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";

export interface NavRoute {
  name: string;
  href: string;
  active: boolean;
  [key: string]: unknown;
}
export interface NavRouteDashboard {
  name: string;
  href: string;
  active: boolean;
  [key: string]: unknown;
}

export const useNavRoutes = (): NavRoute[] => {
  const pathName = usePathname();

  return useMemo<NavRoute[]>(
    () => [
      {
        name: "home",
        href: "/",
        active: pathName === "/",
      },
      {
        name: "support",
        href: "/",
        active: pathName === "/support",
      },
      {
        name: "policy",
        href: "/",
        active: pathName === "/policy",
      },
    ],
    [pathName],
  );
};

export const useDashboardNavRoutes = (): NavRoute[] => {
  const pathName = usePathname();
  return useMemo<NavRoute[]>(
    () => [
      {
        name: "Dashboard",
        href: "/dashboard",
        active: pathName === "/dashboard",
        icon: DashboardIcon,
      },
      {
        name: "Settings",
        href: "/dashboard/settings",
        active: pathName === "/dashboard/settings",
        icon: SettingsIcon,
      },
      {
        name: "Channels",
        href: "/dashboard/channels",
        active: pathName === "/dashboard/channels",
        icon: ChannelIcon,
      },
      {
        name: "Groups",
        href: "/dashboard/groups",
        active: pathName === "/dashboard/groups",
        icon: GroupsIcon,
      },
    ],
    [pathName],
  );
};
