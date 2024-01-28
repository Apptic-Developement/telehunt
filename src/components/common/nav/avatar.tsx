'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react'

export default function UserAvatar() {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
