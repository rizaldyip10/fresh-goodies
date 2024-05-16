import Image from 'next/image'
import React from 'react'
import carVector from '@/public/Vector.png'

const FreeShippingCounter = () => {
    return (
        <div className='w-full flex gap-8 items-center'>
            <Image alt='car' src={carVector} className='w-14 h-5' />
            <div className='w-full flex flex-col gap-3'>
                <h1>Before free shipping <span>$1.67</span></h1>
                <div className='w-full relative'>
                    <div className='w-[80%] h-1 bg-[#66D4B3] absolute z-10' />
                    <div className='w-full h-1 bg-[#FAFAFA] relative' />
                </div>
            </div>
        </div>
    )
}

export default FreeShippingCounter