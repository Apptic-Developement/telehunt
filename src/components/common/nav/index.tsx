"use client";

import useMobile from "@/hooks/useMobile";
import BottomNav from "./bottom";
import TopNav from "./top";

export default function NavBar() {
  const isMobile = useMobile();
  return (
    <>
      <TopNav />
      {isMobile && <BottomNav />}
    </>
  );
}
