'use client';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useNavRoutes } from "@/hooks/useNavRoutes";
import MenuIcon from '@mui/icons-material/Menu'
import Link from "next/link";
import React from 'react'
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { cn } from "@/lib/utils";
import { UserSection } from "./user-section";

export default function MobileMenuSheet() {
    const routes = useNavRoutes();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="md:hidden block" size="icon" variant="outline">
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4 max-w-full items-center">
                <div className="flex flex-col mr-auto w-full gap-2 mt-4">

                    {
                        routes && routes.map((route) => (<NavLink  key={route.href} {...route} />))
                    }
                </div>
                <div className="flex items-center">
                    <UserSection />
                </div>
            </SheetContent>
        </Sheet>

    )
}

const NavLink = ({ name, active, href, icon: Icon }: {
    name: string;
    active: boolean;
    href: string;
    icon?: OverridableComponent<SvgIconTypeMap>
}) => {
    return (
        <Link className={cn("flex gap-2 font-medium capitalize px-2 py-1 hover:underline",
            {
                'bg-accent rounded-md border hover:no-underline': active
            })} href={href} >{name}
        </Link>
    )
}
