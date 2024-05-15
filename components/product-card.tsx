import { Product } from '@/types/product';
import Image from 'next/image';
import React from 'react'
import AddButtonProduct from './add-button-product';
import ProductDrawer from './product-drawer';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className='w-full flex flex-col p-3 bg-[#F9F8F6] rounded-md gap-4'>
            <ProductDrawer product={product} />
            <AddButtonProduct weight={product.weight} />
        </div>
    )
}

export default ProductCard