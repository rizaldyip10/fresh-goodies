"use client";

import React, { useState } from 'react';
import CartModal from './cart-modal';

const ToCartBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onModalOpen = () => {
    setIsModalOpen(true);
  }

  const onModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div 
        onClick={onModalOpen}
        className='fixed w-[90%] z-50 bottom-0 -translate-y-12 h-14 rounded-full bg-black text-white flex justify-between items-center px-7'
      >
        <div>
          <h1>Cart</h1>
        </div>
        <h1>$27.3</h1>
      </div>

      <CartModal isOpen={isModalOpen} onClose={onModalClose} />
    </>
  )
}

export default ToCartBtn