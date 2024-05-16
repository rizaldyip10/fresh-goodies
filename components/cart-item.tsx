import Image from 'next/image'
import React from 'react'
import cucumberImg from '@/public/products/cucumber.png'
import { Button } from './ui/button'
import { Minus, Plus } from 'lucide-react'

const CartItem = () => {
  return (
    <div className='w-full flex items-center p-4'>
        <Image alt='cucumber' src={cucumberImg} />
        <div className='w-full flex flex-col gap-2'>
            <h1 className='text-base font-sf-pro-display font-semibold'>Cucumber</h1>
            <div className='w-full flex items-center justify-between pr-4'>
                <div className='flex items-center gap-2'>
                    <Button className='h-10 w-10 rounded-full bg-[#F4F4F4]'>
                        <Minus className='w-3 h-3 text-black' />
                    </Button>
                    <p className='text-base font-sf-pro-display'>1</p>
                    <Button className='h-10 w-10 rounded-full bg-[#F4F4F4]'>
                        <Plus className='w-3 h-3 text-black' />
                    </Button>
                </div>
                <p className='font-sf-pro-display text-[#7D7D7D]'>$5.1</p>
            </div>
        </div>
    </div>
  )
}

export default CartItem