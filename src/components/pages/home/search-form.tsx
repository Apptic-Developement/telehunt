import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchForm() {
  return (
    <form
      className="flex items-center gap-2 w-full 
    md:h-full px-3
    border rounded-md
    md:border-t-0 md:border-x-0
    md:rounded-none"
    >
      <SearchIcon fontSize="small" />
      <Input
        className="md:h-full h-14 w-full border-none rounded-none
      focus-visible:outline-none focus-visible:ring-0"
        placeholder="Search channels, bots, groups..."
      />
    </form>
  );
}
