import { Icon } from '@iconify/react';



import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from 'next/link';


export default function Header() {
  return (
    <>

      <div className="max-w-[1280px] mx-auto">

        <div className="flex justify-between items-center md:mx-0 mx-4">
          <div className="flex items-center gap-4 text-xl font-bold md:font-medium md:gap-12 text-textPrimary md:text-2xl">
            <Image
              src="/images/logoo.jpg"
              className="rounded-full my-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              width={80}
              height={80}
              alt="logo"
            />
            <div className='grid gap-1 md:flex md:gap-8'>
              <Link href="/">خــــانــه</Link>

              <Link href="/menu">منـــوی کــافه</Link>
            </div>

          </div>
          <h2 className="font-bold text-2xl md:text-5xl text-textPrimary/80">CARIBOU</h2>
        </div>
        <div className="h-0 border-[0.1px] border-textPrimary/40"></div>


      </div>
    </>
  )
}