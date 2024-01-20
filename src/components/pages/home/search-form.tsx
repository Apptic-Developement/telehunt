import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { FaSearch } from 'react-icons/fa';


export default function SearchForm() {
    return (
        <form className="flex items-center gap-2">
            <Input className="relative h-14" placeholder="Search..." />
            <Button variant="secondary" className="h-14"><FaSearch /></Button>
        </form>
    )
}
