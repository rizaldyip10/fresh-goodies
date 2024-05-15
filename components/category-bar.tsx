import React from 'react'
import CategoryItem from './category-item'

const category = [
    {
        label: 'All',
        href: ''
    },
    {
        label: 'Spicy',
        href: 'spicy'
    },
    {
        label: 'Dressing',
        href: 'dressing'
    },
    {
        label: 'Sweet',
        href: 'sweet'
    },
    {
        label: 'Roots',
        href: 'roots'
    },
    {
        label: 'Vegetables',
        href: 'vegetables'
    },
]

const CategoryBar = () => {
    return (
        <div className='w-full flex gap-6 overflow-x-scroll no-scrollbar py-5'>
            {
                category.map((item, index) => (
                    <CategoryItem key={index} label={item.label} href={item.href} />
                ))
            }
        </div>
    )
}

export default CategoryBar