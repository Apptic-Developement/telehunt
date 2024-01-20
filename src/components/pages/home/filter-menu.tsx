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
import { FaFilter } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi";
export default function FilterMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="outline" className="flex items-center gap-2">
                    <FaFilter />
                    <span className="md:inline hidden">Filter</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-10">
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2">
                    <BiSolidUpvote />
                    <span>Top Voted</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                    <HiSparkles />
                    <span>New</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
