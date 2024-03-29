import { usePathname } from "next/navigation";
import { useMemo } from "react";

type Route = {
    name: string;
    href: string;
    active: boolean
}
export default function () {
    const pathName = usePathname();

    return useMemo<Route[]>(() => ([
        { name: 'Home', href: '/', active: pathName === '/' },
        { name: 'Channels', href: '/channels', active: pathName.startsWith('/channels') },
        { name: 'Bots', href: '/bots', active: pathName.startsWith('/bots') },
        { name: 'Groups', href: '/groups', active: pathName.startsWith('/groups') },
        { name: 'Support', href: '/support', active: pathName === '/support' },
    ]), [pathName])
}