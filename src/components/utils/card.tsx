"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUsers } from "react-icons/fa6";
import { BiUpvote } from "react-icons/bi";

export default function Card({
    logo,
    name,
    categories,
    description,
    totalUsers,
    totalVotes,
}: {
    logo: string;
    name: string;
    categories: string[];
    description: string;
    totalUsers: number;
    totalVotes: number;
}) {
    const filteredCategories = categories.slice(0, 2).map((category, index) =>
        index === categories.slice(0, 2).length - 1 ? category : `${category},`,
    );
    return (
        <Link
            href="/"
            passHref
            className="flex flex-col px-4 py-3 gap-2 bg-card border mx-auto w-[280px] h-fit overflow-hidden rounded-md"
        >
            <div className="flex items-center gap-3">
                <Image
                    className="rounded-md"
                    src={logo}
                    alt="Logo"
                    width={60}
                    height={60}
                />
                <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <div className="flex text-xs space-x-2">
                        {filteredCategories.map((category) => (
                            <span key={category}>{category}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex mb-2 h-24">
                <p className="text-sm">{description}</p>
            </div>

            <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1">
                    <FaUsers />
                    <span className="font-medium text-sm">{totalUsers}</span>
                </div>
                <div className="flex items-center gap-1">
                    <BiUpvote />
                    <span className="font-medium text-sm">{totalVotes}</span>
                </div>
            </div>
        </Link>
    );
}
