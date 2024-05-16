import { Product } from '@/types/product';
import Image from 'next/image'
import React from 'react'
import EditTotalDrawer from './drawer-edit-total';
import LikeBtn from './like-btn';
import ToCartDrawer from './drawer-to-cart-btn';

interface ProductDrawerContentProps {
    product: Product;
}

const ProductDrawerContent: React.FC<ProductDrawerContentProps> = ({ product }) => {
    return (
        <div className='w-full flex flex-col items-center justify-center pt-6 pb-5'>
            <div className='w-full flex justify-center'>
                <Image src={product.imageUrl} alt={product.name} width={279} height={252} className='aspect-square object-cover' />
            </div>
            <div className='w-full flex flex-col p-4 gap-6'>
                <h1 className='font-bold text-3xl font-sf-pro-display'>{product.name}</h1>
                <div className='w-full flex flex-col gap-4'>
                    <h3 className='font-semibold font-sf-pro-display'>In 100 grams</h3>
                    <div className='w-full flex border border-[#F1F1F1] rounded-md items-center px-7 py-5 justify-between'>
                        <div className='flex flex-col items-center'>
                            <h3 className='font-semibold font-sf-pro-display'>{product.metadata.calorie}</h3>
                            <p>Calories</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className='font-semibold font-sf-pro-display'>{product.metadata.proteins}</h3>
                            <p>Proteins</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className='font-semibold font-sf-pro-display'>{product.metadata.fats}</h3>
                            <p>Fats</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className='font-semibold font-sf-pro-display'>{product.metadata.carbs}</h3>
                            <p>Carbs</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between'>
                    <div className='w-full flex items-center'>
                        <EditTotalDrawer />
                    </div>
                    <div className='flex items-center'>
                        <LikeBtn />
                    </div>
                </div>
                <div className='w-full'>
                    <ToCartDrawer />
                </div>
            </div>
        </div>
    )
}

export default ProductDrawerContent