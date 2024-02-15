"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

export default function UserAvatar({
  icon,
  name,
}: {
  icon: string;
  name: string;
}) {
  return (
    <Avatar className="border-2 h-9 w-9">
      <AvatarImage src={icon} alt={name} />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
  );
}
