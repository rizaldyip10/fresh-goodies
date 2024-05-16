"use client";

import useFetchProductList from '@/hooks/useFetchProducts';
import React from 'react';
import ProductCard from './product-card';
import { useSearchParams } from 'next/navigation';
import { slugToStr } from '@/lib/slugConvert';

const ProductContainer = () => {
    const { productList, categories, productGroup } = useFetchProductList();
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get('category');

    const finalProduct = productList.filter((product) => {
        if (!activeCategory || activeCategory == "") return true;

        return product.category.toLowerCase() == slugToStr(activeCategory);
    });

    const allProductList =
        activeCategory || !productGroup
            ? null :
            categories?.map((category) => (
                <section className='w-full py-4 flex flex-col gap-4' key={category}>
                    <h1 className='font-bold text-[25px]'>{category}</h1>
                    <div key={category} className='w-full grid grid-cols-2 md:grid-cols-4 gap-2 py-4'>
                        {
                            productGroup[category].map((item, index) => (
                                <ProductCard product={item} key={index} />
                            ))
                        }
                    </div>
                </section>
            ))

    return (
        activeCategory ?
            <section className='w-full py-4'>
                <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-2'>
                    {
                        finalProduct?.map((item, index) => (
                            <ProductCard key={index} product={item} />
                        ))
                    }
                </div>
            </section> :
            allProductList
        
    );
};

export default ProductContainer;