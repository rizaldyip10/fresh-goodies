import weightConvert from '@/lib/weightConvert'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

interface MetadataItem {
  unit: string;
  weight: number;
  calorie: number;
  proteins: number;
  fats: number;
  increment: number;
  carbs: number;
}

interface AddButtonProductProps {
  weight: number;
  metadata: MetadataItem;
}

const AddButtonProduct: React.FC<AddButtonProductProps> = ({ weight, metadata }) => {
  const [isBuying, setIsBuying] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(weight)

  const addQuantity = () => {
    setQuantity(preVal => preVal + metadata.increment);
  }

  const decreaseQuantity = () => {
    if (quantity === weight) {
      setIsBuying(false);
    } else {
      setQuantity(preVal => preVal - metadata.increment)
    }
  }
  return (
    <div className='w-full flex justify-between items-center'>
      {
        !isBuying ? 
          <>
            <p className='text-[#C4C4C4] font-sf-pro-display'>{ weightConvert(quantity) }</p>
            <button onClick={() => setIsBuying(true)} className='w-10 h-10 flex justify-center items-center rounded-full border border-[#C4C4C4]'>
              <Plus className='w-3 h-3' />
            </button>
          </> :
          <>
            <button
              onClick={decreaseQuantity}
              className='w-10 h-10 rounded-full bg-black flex justify-center items-center'
            >
              <Minus className='w-3 h-3 text-white' />
            </button>
            <p>{weightConvert(quantity)}</p>
            <button
              onClick={addQuantity}
              className='w-10 h-10 rounded-full bg-black flex justify-center items-center'
            >
              <Plus className='w-3 h-3 text-white' />
            </button>
          </>
      }
    </div>
  )
}

export default AddButtonProduct