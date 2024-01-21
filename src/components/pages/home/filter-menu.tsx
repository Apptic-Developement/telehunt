"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiSolidUpvote } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi";
import { HomeFiltersType } from "@/lib/types";

export default function FilterMenu({
  filter,
  setFilter,
}: {
  filter: "top-voted" | "new";
  setFilter: (filterName: HomeFiltersType) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" className="flex items-center gap-2">
          {filter === "top-voted" && <BiSolidUpvote />}
          {filter === "new" && <HiSparkles />}
          <span className="md:inline hidden capitalize">
            {filter.replace("-", " ")}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-10">
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={() => setFilter("top-voted")}
        >
          <BiSolidUpvote />
          <span>Top Voted</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={() => setFilter("new")}
        >
          <HiSparkles />
          <span>New</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
