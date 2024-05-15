"use client";

import { cn } from '@/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react'

interface CategoryItemProps {
    label: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ label }) => {
    const location = usePathname()
    const searchParams = useSearchParams();
    const category = searchParams.get("category")

    const onClick = () => {
        
    }
    
    return (
        <div className='h-45' onClick={onClick}>
            <h3 className='text-lg font-sf-pro-display'>{ label }</h3>
            <div className={cn('mt-auto h-[1px] w-full bg-black', category != label ? 'hidden' : 'block')} />
        </div>
    )
}

export default CategoryItem