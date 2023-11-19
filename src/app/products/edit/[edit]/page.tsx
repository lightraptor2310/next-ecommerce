"use client";
import { useParams } from "next/navigation";
import React, { useEffect,useState } from "react";
import axios from "axios";
import ProductForm from "@/components/ProductForm";
interface ProductInfoProps {
  _id: string;
  title: string;
  description: string;
  price: string;
}
const EditProductPage = ({params} : {params: {
  edit: string
}}) => {
  const [productInfo, setProductInfo] = useState<ProductInfoProps>();
  const id = params.edit
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
      console.log(response.data);
    });
  }, [id]);
  return (
    <>
    <div className="flex flex-col gap-2">
    <div className='text-3xl'>Edit Product</div>
      {productInfo && <ProductForm {...productInfo}/>}
    </div>
    </>
  );
};

export default EditProductPage;
