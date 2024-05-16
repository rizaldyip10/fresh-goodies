import React from 'react'
import { Button } from './ui/button'
import { X } from 'lucide-react'
import FreeShippingCounter from './free-shipping-counter'
import CartItem from './cart-item'
import CheckoutBtn from './checkout-btn'
import { cn } from '@/lib/utils'

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
    return (
        <div 
            className={cn('bg-white z-[100] fixed -mx-4 h-full w-full flex-col pt-10 justify-between pb-10',
                isOpen ? 'flex' : 'hidden'
            )}
        >
            <div className='w-full px-4 '>
                <button 
                    onClick={onClose}
                    className='w-8 h-8'
                >
                    <X className='w-6 h-6' />
                </button>
            </div>
            <div className='w-full flex flex-col gap-3 px-4 '>
                <h1 className='font-bold text-3xl'>Cart</h1>
                <FreeShippingCounter />
            </div>
            <div className='w-full flex flex-col max-h-[65%] overflow-y-scroll'>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className='px-4 w-full'>
                <CheckoutBtn />
            </div>
        </div>
    )
}

export default CartModal