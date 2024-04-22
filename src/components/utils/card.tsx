'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { ServerIcon, ArrowBigUpDashIcon } from 'lucide-react';
import Link from "next/link";
export const PostCard = () => {
    return (
        <Link href="#" passHref className="flex flex-col gap-4 h-56 w-64 max-sm:w-full px-4 py-3 bg-card text-card-foreground rounded-lg">
            <div id="header" className='flex items-center gap-3'>
                <Avatar>
                    <AvatarImage className="w-10 h-10" src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <h2 className="text-md font-semibold">Bornol HQ</h2>
                    <div className="flex gap-1 items-center text-muted-foreground text-sm font-medium">
                        <small>Featured,</small>
                        <small>Community,</small>
                        <small>Anime</small>
                    </div>
                </div>
            </div>


            <p className='text-sm font-normal text-muted-foreground h-24 mb-auto overflow-hidden' id="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque temporibus minima minus accusamus quod voluptatum fuga architecto similique ad asperiores voluptatibus doloremque repellat autem porro corporis, praesentium quia facilis?</p>

            <div id="footer" className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                    <ServerIcon className="w-4 h-4" />
                    <span className="text-sm font-normal">224</span>
                </div>
                <div className="flex items-center gap-1">
                    <ArrowBigUpDashIcon className="w-4 h-4" />
                    <span className="text-sm font-normal">224</span>
                </div>
            </div>
        </Link>

    )
}
