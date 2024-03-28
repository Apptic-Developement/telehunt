import { usePathname } from "next/navigation";
import { useMemo } from "react";

type Route = {
    name: string;
    href: string;
    active: boolean;
    blank: boolean;
}

export default function (): Route[] {
    const pathName = usePathname();
    return useMemo<Route[]>(() => ([
        {
            name: 'Home',
            href: '/',
            active: pathName === '/',
            blank: false
        },
        {
            name: 'Channels',
            href: '/channels',
            active: pathName.startsWith('/channels'),
            blank: false
        },
        {
            name: 'Bots',
            href: '/bots',
            active: pathName.startsWith('/bots'),
            blank: false
        },
        {
            name: 'Groups',
            href: '/groups',
            active: pathName.startsWith('/groups'),
            blank: false
        },
        {
            name: 'Policy',
            href: '/policy',
            active: pathName === '/policy',
            blank: false
        },
        {
            name: 'Support',
            href: '/support',
            active: pathName === '/support',
            blank: true
        },

    ]), [pathName])
}