import { useMemo } from "react";
import { usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import ChannelIcon from "@mui/icons-material/DynamicFeed";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupsIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

export interface BaseNavRoute {
  name: string;
  href: string;
  active: boolean;
  [key: string]: unknown;
}

export interface NavRoute extends BaseNavRoute {
  icon: OverridableComponent<SvgIconTypeMap>;
}

export interface NavRouteTop extends BaseNavRoute {
  icon?: OverridableComponent<SvgIconTypeMap>;
}

export const useTopNavRoutes = (): NavRouteTop[] => {
  const pathName = usePathname();

  return useMemo<NavRouteTop[]>(
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

export const useBottomNavRoutes = (): NavRoute[] => {
  const pathName = usePathname();

  return useMemo<NavRoute[]>(
    () => [
      {
        name: "home",
        href: "/",
        active: pathName === "/",
        icon: pathName === "/" ? HomeIcon : HomeOutlinedIcon,
      },
      {
        name: "menu",
        href: "/mobile-menu",
        active: pathName.startsWith("/mobile-menu"),
        icon: MenuOpenIcon,
      },
      {
        name: "notifications",
        href: "/notifications",
        active: pathName.startsWith("/notifications"),
        icon: pathName.startsWith("/notifications")
          ? NotificationsIcon
          : NotificationsNoneOutlinedIcon,
      },
      {
        name: "dashboard",
        href: "/dashboard",
        active: pathName.startsWith("/dashboard"),
        icon: pathName.startsWith("/dashboard")
          ? DashboardIcon
          : DashboardOutlinedIcon,
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
