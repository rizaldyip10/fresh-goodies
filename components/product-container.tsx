"use client";

import useFetchProductList from '@/hooks/useFetchProducts';
import React from 'react';
import ProductCard from './product-card';

const ProductContainer = () => {
    const { productList } = useFetchProductList()
    return (
        <section className='w-full grid grid-cols-2 gap-2 py-4'>
            {
                productList?.map((item, index) => (
                    <ProductCard key={index} product={item} />
                ))
            }
        </section>
    );
};

export default ProductContainer;