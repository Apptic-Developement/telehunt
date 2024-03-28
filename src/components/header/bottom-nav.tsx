'use client';

import {LucideIcon} from 'lucide-react'
import { Home, List, SettingsIcon, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';

export const BottomNav = () => {
     
    return (
        <div className="md:hidden block fixed bottom-0 left-0 right-0 px-2 py-4 bg-background/80 backdrop-blur shadow-md border rounded">
            <div className="flex justify-around items-center">
                <NavItem
                    icon={Home}
                    name='Home'
                    href='/'
                />
                <NavItem
                    icon={List}
                    name='Menu'
                 />
                <NavItem
                    icon={SettingsIcon}
                    name='Settings'
 
                />
                <NavItem
                    icon={User}
                    name='User'
                    href='/me' 
                />
            </div>
        </div>
    )
}


const NavItem = ({
    icon: Icon, name, href
}: { icon: LucideIcon; name: string; href?: string }) => {
    const pathName = usePathname();
    if (href) {

        return (
            <Link href={href} className={`${pathName === href ? 'text-primary' : 'text-muted-foreground'}`}>
                <Icon />
            </Link>
        )
    }
    return (
        <button className={`${pathName === href ? 'text-primary' : 'text-muted-foreground'}`}>
            <Icon />
        </button>
    )
}