import React from 'react'
import CategoryItem from './category-item'

const category = [
    {
        label: 'All'
    },
    {
        label: 'Spicy'
    },
    {
        label: 'Dressing'
    },
    {
        label: 'Sweet'
    },
    {
        label: 'Roots'
    },
    {
        label: 'Vegetables'
    },
]

const CategoryBar = () => {
    return (
        <div className='w-full flex gap-5 overflow-x-scroll py-5'>
            {
                category.map((item, index) => (
                    <CategoryItem key={index} label={item.label} />
                ))
            }
        </div>
    )
}

export default CategoryBar