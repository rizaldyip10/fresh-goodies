"use client";

import React from 'react'
import CategoryItem from './category-item'    
import useFetchProductList from '@/hooks/useFetchProducts'
import { strToSlug } from '@/lib/slugConvert'

const CategoryBar = () => {
    const { categories } = useFetchProductList()
    return (
        <div className='w-full flex gap-6 overflow-x-scroll no-scrollbar py-5'>
            <CategoryItem label='All' href='' />
            {
                categories?.map((item, index) => (
                    <CategoryItem key={index} label={item} href={strToSlug(item)} />
                ))
            }
        </div>
    )
}

export default CategoryBar