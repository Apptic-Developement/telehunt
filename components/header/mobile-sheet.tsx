'use client';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button, buttonVariants } from "../ui/button";
import { ListIcon } from "lucide-react";
import useRoutes from "@/hooks/useRoutes";
import Link from "next/link";

export const MobileSheet = () => {
    const routes = useRoutes();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size='icon' variant='outline'>
                    <ListIcon />
                </Button>
            </SheetTrigger>
             <SheetContent side='left'>
                <nav className="flex gap-2 flex-col items-start">
                    {
                        routes && routes.map(({ name, href, active }) => {
                            return (
                                <Link className={buttonVariants({variant: 'link' })} key={href} href={href}>
                                    {name}
                                </Link>
                            )
                        })
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}
