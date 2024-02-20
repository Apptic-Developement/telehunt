import { useMemo } from "react";
import { usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import ChannelIcon from "@mui/icons-material/DynamicFeed";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupsIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";

export interface NavRoute {
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
        name: "explore",
        href: "/explore",
        active: pathName.startsWith("/explore"),
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
