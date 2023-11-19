import clientPromise from "@/lib/mongodb";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import mongoose from "mongoose";

export async function POST(req: Request, res: Response) {
    const data = await req.json();

    await mongooseConnect();
    const {title, description,price} = data;
    const productDoc = await Product.create({
        title, description,price
    })
    return Response.json({productDoc});
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if(id?.length as number > 0) {
        const data =  await Product.findOne({_id: id})
        return Response.json(data)
    }
    await mongooseConnect();
    const data = await Product.find()
    return Response.json(data);
}

export async function PUT(req:Request) {
    const data = await req.json();
    await mongooseConnect();
    const {title, description,price,_id} = data;
    await Product.updateOne({_id},{title, description,price})
    return Response.json(true)
}

export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if(id?.length as number > 0 ) {
        await Product.deleteOne({_id:id})
        return Response.json(true)
    }
}

