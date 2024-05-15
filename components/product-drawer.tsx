import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from './ui/drawer'
import { Button } from './ui/button'
import ProductCard from './product-card'
import { Product } from '@/types/product';
import Image from 'next/image';
import ProductDrawerContent from './drawer-content';

interface ProductDrawerProps {
    product: Product;
}

const ProductDrawer: React.FC<ProductDrawerProps> = ({ product }) => {
    return (
        <Drawer>
            <DrawerTrigger>
                <div className='w-full flex flex-col items-start'>
                    <Image alt={product.name} src={product.imageUrl} width={145} height={113} className='mix-blend-multiply w-full aspect-square object-cover' />
                    <h1 className='font-semibold font-sf-pro-display text-xl'>${product.price}</h1>
                    <p>{product.name}</p>
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <ProductDrawerContent product={product} />
            </DrawerContent>
        </Drawer>

    )
}

export default ProductDrawer