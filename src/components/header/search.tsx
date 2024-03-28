'use client';

import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

export const Search = () => {
    return (
        <div className="relative md:w-fit w-full">
            <SearchIcon className="absolute text-muted-foreground left-2.5 top-2.5 h-4 w-4"/>
            <Input
            className="pl-8 w-full"
                 type='search'
                placeholder="Search..."
            />
        </div>
    )
}
