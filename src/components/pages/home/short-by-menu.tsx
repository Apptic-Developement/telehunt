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
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { HomeShortByType } from "@/lib/types";

export default function ShortByMenu({
  shortBy,
  updateShortBy,
}: {
  shortBy: HomeShortByType;
  updateShortBy: (shortByName: HomeShortByType) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" className="flex items-center gap-2">
          {shortBy === "top-voted" && <ArrowCircleUpIcon />}
          {shortBy === "new" && <AutoAwesomeIcon />}
          <span className="md:inline hidden capitalize">
            {shortBy.replace("-", " ")}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-10">
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={() => updateShortBy("top-voted")}
        >
          <ArrowCircleUpIcon />
          <span>Top Voted</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={() => updateShortBy("new")}
        >
          <AutoAwesomeIcon />
          <span>New</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
