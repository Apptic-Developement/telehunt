import { useMemo } from "react";
import { usePathname } from "next/navigation";
import ChannelIcon from "@mui/icons-material/DynamicFeed";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ExploreIcon from "@mui/icons-material/ExploreOutlined";
import BotsIcon from "@mui/icons-material/BoltOutlined";
import SupportIcon from "@mui/icons-material/ContactSupportOutlined";
import PolicyIcon from "@mui/icons-material/PolicyOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";

export interface NavRoute {
  name: string;
  href: string;
  active: boolean;
  icon: OverridableComponent<SvgIconTypeMap>;
}

export const useNavRoutes = (): NavRoute[] => {
  const pathName = usePathname();

  return useMemo<NavRoute[]>(
    () => [
      {
        name: "home",
        href: "/",
        active: pathName === "/",
        icon: HomeIcon,
      },
      {
        name: "explore",
        href: "/explore",
        active: pathName.startsWith("/explore"),
        icon: ExploreIcon,
      },
      {
        name: "support",
        href: "/support",
        active: pathName === "/support",
        icon: SupportIcon,
      },
      {
        name: "policy",
        href: "/policy",
        active: pathName === "/policy",
        icon: PolicyIcon,
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
        name: "dashboard",
        href: "/dashboard",
        active: pathName === "/dashboard",
        icon: DashboardIcon,
      },
      {
        name: "settings",
        href: "/dashboard/settings",
        active: pathName === "/dashboard/settings",
        icon: SettingsIcon,
      },
      {
        name: "channels",
        href: "/dashboard/channels",
        active: pathName === "/dashboard/channels",
        icon: ChannelIcon,
      },
      {
        name: "groups",
        href: "/dashboard/groups",
        active: pathName === "/dashboard/groups",
        icon: GroupIcon,
      },
      {
        name: "bots",
        href: "/dashboard/bots",
        active: pathName === "/dashboard/bots",
        icon: BotsIcon,
      },
    ],
    [pathName],
  );
};
