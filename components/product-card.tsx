import { Product } from '@/types/product';
import Image from 'next/image';
import React from 'react'
import AddButtonProduct from './add-button-product';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className='w-full flex flex-col p-3 bg-[#F9F8F6] rounded-md gap-4'>
            <div className='w-full flex flex-col'>
                <Image alt={product.name} src={product.imageUrl} width={145} height={113} className='aspect-square object-cover mix-blend-multiply' />
                <h1>${product.price}</h1>
                <p>{product.name}</p>
            </div>
            <AddButtonProduct weight={product.weight} />
        </div>
    )
}

export default ProductCard