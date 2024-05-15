import weightConvert from '@/lib/weightConvert'
import { Plus } from 'lucide-react'
import React from 'react'

interface AddButtonProductProps {
  weight: number
}

const AddButtonProduct: React.FC<AddButtonProductProps> = ({ weight }) => {
  return (
    <div className='w-full flex justify-between items-center'>
      <p className='text-[#C4C4C4] font-sf-pro-display'>{ weightConvert(weight) }</p>
      <button className='w-10 h-10 flex justify-center items-center rounded-full border border-[#C4C4C4]'>
        <Plus className='w-3 h-3' />
      </button>
    </div>
  )
}

export default AddButtonProduct