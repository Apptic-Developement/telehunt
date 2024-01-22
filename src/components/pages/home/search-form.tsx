import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import SearchIcon from "@mui/icons-material/Search"

export default function SearchForm() {
  return (
    <form className="flex items-center gap-2">
      <Input className="relative h-14" placeholder="Search..." />
      <Button variant="secondary" className="h-14">
        <SearchIcon />
      </Button>
    </form>
  );
}
