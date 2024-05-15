import { Minus, Plus } from 'lucide-react'
import React from 'react'

const EditTotalDrawer = () => {
    return (
        <div className='w-full flex items-center justify-between rounded-full bg-[#FAFAFA] h-14 px-4'>
            <button className='h-6 w-6 rounded-full'>
                <Minus />
            </button>
            <p>1</p>
            <button className='h-6 w-6 rounded-full'>
                <Plus />
            </button>
        </div>
    )
}

export default EditTotalDrawer