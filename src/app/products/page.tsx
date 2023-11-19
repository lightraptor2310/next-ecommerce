"use client";

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import axios from "axios";
interface ProductProp {
  _id: string;
  title: string;
  description: string;
  price: string;
}

const page = () => {
  const [products, setProducts] = useState<ProductProp[]>();
  useEffect(() => {
    axios.get("api/products").then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
      <p>
        <Button component="label" variant="contained" startIcon={<AddIcon />}>
          <Link href={"products/news"}>New product</Link>
        </Button>
      </p>
      <table className="basic table-auto border-collapse border border-slate-500 w-[90%]">
        <thead>
          <tr>
            <td className="border border-slate-600">Product name</td>
            <td className="border border-slate-600"></td>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, key) => (
            <tr key={key}>
              <td className="border border-slate-700">{product?.title}</td>
              <td className="border border-slate-700 flex flex-row gap-2 ">
                <Button variant="contained" color="success">
                  <Link href={`/products/edit/` + product._id}>edit</Link>
                </Button>
                <Button variant="contained" color="error">
                  <Link href={`/products/delete/` + product._id}>delete</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default page;
