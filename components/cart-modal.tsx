import React from 'react'
import { Button } from './ui/button'
import { X } from 'lucide-react'

const CartModal = () => {
    return (
        <div className='absolute min-h-screen flex flex-col px-4'>
            <div className='w-full'>
                <Button variant='ghost' className='w-12 h-12'>
                    <X className='w-6 h-6' />
                </Button>
            </div>
            <div className='w-full'>
                <h1>Cart</h1>
            </div>
            
        </div>
    )
}

export default CartModal