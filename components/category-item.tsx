"use client";

import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

interface CategoryItemProps {
    label: string;
    href: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ label, href }) => {
    const location = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams();
    const category = searchParams.get("category")

    const onClick = () => {
        router.push(`${location}/?category=${href}`)
    }
    
    return (
        <div className='h-45' onClick={onClick}>
            <h3 className='text-lg font-sf-pro-display'>{ label }</h3>
            <div className={cn('mt-1 h-[1px] w-full bg-black', category != href ? 'hidden' : 'block')} />
        </div>
    )
}

export default CategoryItem