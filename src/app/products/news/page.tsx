'use client'
import React from 'react'
import ProductForm from '@/components/ProductForm'


const page = () => {
    
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className='text-3xl'>New Product</div>
        <ProductForm />
      </div>
    </>
  )
}

export default page