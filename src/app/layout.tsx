"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import Layer from "@/components/Layer";
import '@/app/globals.css'


const inter = Inter({ subsets: ["latin"] });
export default function RootLayout(props: any) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider>
        <Layer >
      {props.children}
        </Layer>
       </SessionProvider> 
      </body>
    </html>
  );
}
