import { Icon } from '@iconify/react';



import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from 'next/link';



export default function Footer() {
    return (
        <>
        <div className=' mt-24 py-14 bg-[#2B1D0E]/70 '>
        <div className='max-w-[1280px] mx-auto grid grid-cols-3 justify-items-center '>

          <div className='grid grid-cols-1 gap-6'>
            <Image src="/images/logo.jpg" className='rounded-full' alt='logo' width={85} height={85} />
            <p className=' text-[#FFEFD5]  text-lg'>
              «کافه اُ» جایی دنج و صمیمی برای لذت بردن از قهوه تازه و لحظه‌های آرامش‌بخش است. هر فنجون، تجربه‌ای از طعم، گرما و انرژی مثبت به شما هدیه می‌دهد. ☕
            </p>
            <div className="h-0 border-[0.1px] border-[#FFF7ED]/40"></div>
            <h3 className='text-[#FFEFD5]'>آدرس : اردبیل، میدان شریعتی </h3>
          </div>
          <div className='grid grid-cols-1 gap-1'>
            <h3 className='text-[#FFEFD5]  text-2xl font-bold'>لینک های سریع</h3>
            
            <Link href="/menu" className='text-[#FFEFD5]  text-xl'>منوی کافه</Link>
            <Link href="/" className='text-[#FFEFD5] mb-4  text-xl '>خانه</Link>
            

          </div>


          <div className='grid grid-cols-1 gap-3'>
            <h3 className='text-[#FFEFD5]  text-2xl font-bold'>تمـــاس باما</h3>
           <a
  href="https://www.instagram.com/ocafe_ir"
  target="_blank"
  rel="noopener noreferrer"
>
            <h3 className='text-[#FFEFD5]  text-xl'>اینستاگرام</h3>
 </a>
            <h3 className='text-[#FFEFD5]  text-xl'>تلگرام</h3>
            <h3 className='text-[#FFEFD5]  text-xl'>واتساپ</h3>
            

          </div>
        </div>
        <div className='max-w-[1280px] mx-auto mt-10 h-0 border-[0.1px] border-[#FFF7ED]/40 text-center '>
          <h3 className='mt-4 text-[#FFEFD5]/80'>ساخت و توسعه توسط تیم پلاریس</h3>
        </div>

      </div>
        </>
    )
}