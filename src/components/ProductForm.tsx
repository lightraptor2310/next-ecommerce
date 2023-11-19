import React,{ useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FileUploadIcon from '@mui/icons-material/FileUpload';

interface formProductProps {
    _id?:string,
    title?: string,
    description?: string,
    price?: string,
    images?: string[]
}
const ProductForm= ({
    _id,
        title: exitingTitle,
    description: exitingDescription,
    price: exitingPrice,
    images
    }: formProductProps
) => {
    const [title, setTitle] = useState(exitingTitle || "");
    const [description,setDescription] = useState( exitingDescription ||"");
    const [price,setPrice] = useState(exitingPrice|| "");
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();

    async function saveProduct(e:any) {
         e.preventDefault();
         const data = {title, description,price};
         if(_id){
            await axios.put('/api/products',{...data,_id})
            setGoToProducts(true);
         }
         else {
            await axios.post('/api/products',data);
            setGoToProducts(true);
         }
         
    }
    if (goToProducts) {
      router.push('/products');
    }

    const uploadImages = (ev:any) => {
        console.log(ev?.target?.files[0]?.name);
    }
  return (
    <>
    <div className='flex flex-col gap-4'>
    <form action="" onSubmit={saveProduct}>
        <FormControl component="fieldset" className='gap-3 flex flex-col' >
          <FormGroup >
            <p>Product Name</p>
            <TextField
              id="productName"
              variant='outlined'
              value={title}
              size='small'
              onChange={(e:any)=> {setTitle(e?.target?.value)}} 
            />
          </FormGroup>
          <FormGroup>
            <p>
              Photo
            </p>
            <label className="w-24 h-24 border rounded-lg bg-gray-200 flex flex-row justify-center items-center text-sm gap-1 text-gray-500">
                <FileUploadIcon />
                <p>Upload</p>
                <input type="file" onChange={uploadImages} className='hidden'/>
            </label>
            {!images && (
              <div>
                No photo in this product
              </div>
            )}
          </FormGroup>
          <FormGroup >
            <p>Description</p>
            <TextField
              id="description"
              variant='outlined'
              value={description}
              size='small'
              onChange={(e:any)=> {setDescription(e?.target?.value)}} 
            />
          </FormGroup>
          <FormGroup >
            <p>Price (in USD)</p>
            <TextField
              id="description"
              variant='outlined'
              value={price}
              size='small'
              onChange={(e:any)=> {setPrice(e?.target?.value)}} 
              placeholder='price'
            />
          </FormGroup>
            <Button type='submit' variant="contained" color="primary">
              Save
            </Button>
        </FormControl>
    </form>
    </div>
    </>
  )
}

export default ProductForm