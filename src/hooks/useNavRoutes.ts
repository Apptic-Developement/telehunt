import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { GoHomeFill, GoHome } from "react-icons/go";
import { BsChatLeftDots, BsChatLeftFill } from "react-icons/bs";
import { TiGroupOutline, TiGroup } from "react-icons/ti";
import { RiMenuSearchLine, RiMenuSearchFill } from "react-icons/ri";
import { RiRobot2Fill, RiRobot2Line } from "react-icons/ri";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";

export interface NavRoute {
  name: string;
  href: string;
  active: boolean;
  icon: IconType;
}

export const useTopNavRoutes = (): NavRoute[] => {
  const pathName = usePathname();

  return useMemo<NavRoute[]>(
    () => [
      {
        name: "Home",
        href: "/",
        active: pathName.startsWith("/"),
        icon: pathName.startsWith("/") ? GoHomeFill : GoHome,
      },
      {
        name: "Explore",
        href: "/explore",
        active: pathName.startsWith("/explore"),
        icon: pathName.startsWith("/explore")
          ? RiMenuSearchFill
          : RiMenuSearchLine,
      },
      {
        name: "Bots",
        href: "/bots",
        active: pathName.startsWith("/bots"),
        icon: pathName.startsWith("/bots") ? RiRobot2Fill : RiRobot2Line,
      },
      {
        name: "Groups",
        href: "/",
        active: pathName.startsWith("/groups"),
        icon: pathName.startsWith("/groups") ? TiGroup : TiGroupOutline,
      },
      {
        name: "Channels",
        href: "/channels",
        active: pathName.startsWith("/groups"),
        icon: pathName.startsWith("/groups") ? BsChatLeftFill : BsChatLeftDots,
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
        name: "Home",
        href: "/",
        active: pathName.startsWith("/"),
        icon: pathName.startsWith("/") ? GoHomeFill : GoHome,
      },
      {
        name: "Explore",
        href: "/",
        active: pathName.startsWith("/explore"),
        icon: pathName.startsWith("/explore")
          ? RiMenuSearchFill
          : RiMenuSearchLine,
      },
      {
        name: "Menu",
        href: "/",
        active: pathName.startsWith("/mobile"),
        icon: MdOutlineMenuOpen,
      },
      {
        name: "Profile",
        href: "/",
        active: pathName.startsWith("/profile"),
        icon: FaRegCircleUser,
      },
    ],
    [pathName],
  );
};
