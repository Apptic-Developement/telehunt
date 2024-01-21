"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUsers } from "react-icons/fa6";
import { BiUpvote } from "react-icons/bi";
import { CardData } from "@/lib/types";
import { Skeleton } from "../ui/skeleton";

export default function Card({
  logo,
  name,
  categories,
  description,
  totalUsers,
  totalVotes,
}: CardData) {
  const filteredCategories = categories
    .slice(0, 2)
    .map((category, index) =>
      index === categories.slice(0, 2).length - 1 ? category : `${category},`,
    );
  return (
    <Link
      href="/"
      passHref
      className="flex flex-col px-4 py-3 gap-2 mx-auto md:w-[280px] w-full h-fit overflow-hidden rounded-md"
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


export const CardSkeleton = () => {
  return (
    <div className="flex flex-col px-4 py-3 gap-2 mx-auto md:w-[280px] w-full h-fit overflow-hidden rounded-md">
      <div className="flex gap-3">
        <Skeleton className="rounded-md w-16 h-16" />
        <div className="flex flex-col gap-2 py-4">
          <Skeleton className="rounded w-[90px] h-2" />
          <div className="flex gap-2">
            <Skeleton className="rounded w-[35px] h-2" />
            <Skeleton className="rounded w-[35px] h-2" />
          </div>
        </div>
      </div>

      <div className="flex mb-2 h-24 flex-col gap-2">
        <Skeleton className="rounded w-[120px] h-2" />
        <Skeleton className="rounded w-[100px] h-2" />
        <Skeleton className="rounded w-[90px] h-2" />
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="rounded-full w-6 h-6" />
          <Skeleton className="rounded w-4 h-2" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="rounded-full w-6 h-6" />
          <Skeleton className="rounded w-4 h-2" />
        </div>
      </div>
    </div>
  )
}