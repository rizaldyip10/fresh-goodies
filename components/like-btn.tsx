import { Heart } from 'lucide-react'
import React from 'react'

const LikeBtn = () => {
    return (
        <button className='w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#FAFAFA]'>
            <Heart className='w-4 h-4' />
        </button>
    )
}

export default LikeBtn