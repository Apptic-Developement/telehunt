import { SearchOutlined } from "@mui/icons-material";
import React from "react";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex items-center gap-2 w-full backdrop-blur supports-[backdrop-filter]:bg-secondary/40 border rounded-md px-3 py-2 shadow">
      <input
        className="w-full focus-visible:outline-none bg-transparent"
        type="text"
        placeholder={placeholder}
      />
      <button className="text-muted-foreground">
        <SearchOutlined />
      </button>
    </div>
  );
}
