'use client'
import React from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const page = ({ params }: {
    params: {id: string}
}) => {
  const router = useRouter();
  const id = params.id
  const goBack = () => {
    router.push('/products')
  }
  const deleteProduct =async () => {
    await axios.delete('/api/products?id='+id)
    goBack();
  } 
  return (
    <div className='flex flex-col gap-3 '><p>
      Do you want to delete X product ?
    </p>
    <div className="flex flex-row justify-between">
      <Button variant="contained" color="error" onClick={goBack}>
        Cancel
      </Button>
      <Button variant="contained" color="success" onClick={deleteProduct} >
        Delete
      </Button>
    </div>
    </div>
    
  )
}

export default page