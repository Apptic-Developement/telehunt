"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from "./avatar";
import { useDashboardNavRoutes } from "@/hooks/useNavRoutes";
import Link from "next/link";

export function UserDropdown() {
    const routes = useDashboardNavRoutes();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button>
                    <UserAvatar />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Pranoy</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {
                        routes.map(({ name, href }) => {
                            return (
                                <Link href={href} key={href} passHref>
                                    <DropdownMenuItem>
                                        {name}
                                    </DropdownMenuItem>

                                </Link>
                            )
                        })
                    }
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <Link href="/logout" passHref>
                    <DropdownMenuItem className="text-destructive">
                        Log out
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
