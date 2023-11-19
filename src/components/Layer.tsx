'use client' 
import React from 'react'
import Navigation from './Navigation';
import { signIn, useSession, signOut } from "next-auth/react";

const Layer = (props: any) => {
    const { data: session } = useSession();
    if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with google
          </button>
        </div>
      </div>
    );
  }
  return (
    
          <div className="h-screen bg-blue-900 flex ">
            <Navigation />
            <div className="bg-white flex flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
            {props.children}
            </div>
          </div>

  )
}

export default Layer