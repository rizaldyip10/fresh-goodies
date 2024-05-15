import { ArrowUpDown, Search } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full flex'>
            <div className='w-full flex justify-between items-center'>
                <h1 className='text-xl font-sf-pro-display font-semibold'>Vegetables</h1>
                <div className='flex gap-7 items-center'>
                    <button>
                        <ArrowUpDown className='w-6 h-6' />
                    </button>
                    <button>
                        <Search className='w-6 h-6' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar