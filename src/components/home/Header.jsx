import { Icon } from '@iconify/react';



import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from 'next/link';


export default function Header() {
    return(
        <>
        
        <div className="max-w-[1280px] mx-auto">

             <div className="flex justify-between items-center">
          <div className="flex items-center gap-12 text-[#FFF7ED] text-2xl">
          <Image src="/images/logo.jpg" className="rounded-full my-4" width="70" height="70" alt="logo" />
            <Link href="/">خــــانــه</Link>
           
            <Link href="/menu">منـــوی کــافه</Link>
           

          </div>
          <h2 className="font-bold text-5xl text-[#FFF7ED]/80">O CAFE</h2>
        </div>
         <div className="h-0 border-[0.1px] border-[#FFF7ED]/40"></div>


        </div>
        </>
    )
}