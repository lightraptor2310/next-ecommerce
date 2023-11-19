'use client'
import Layer from "@/components/Layer";
import { useSession } from "next-auth/react";
import Image from "next/image";
export default function Home() {
  const { data: session } = useSession();
  
  return (
   <>
    <div className="flex flex-row justify-between w-full">
      <div className="text-blue-900 flex ">
      <p>Hello {session?.user?.email}</p>
      
      </div>
      <div className="flex gap-2 items-center h-fit">
        <Image src={session?.user?.image as string} alt=""  width={32} height={32} className=" object-contain"/>
        <p>{session?.user?.email}</p>
      </div>
    </div>
   </>
  );
}
