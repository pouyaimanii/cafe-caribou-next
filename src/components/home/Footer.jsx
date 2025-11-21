import { Icon } from '@iconify/react';



import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from 'next/link';



export default function Footer() {
  return (
    <>
      <div className=' mt-24 py-14 bg-footer text-textPrimary'>
        <div className='max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-start px-5 md:px-0  md:justify-items-center '>

          <div className='grid grid-cols-1 gap-6'>
            <Image src="/images/logoo.jpg" className='rounded-full' alt='logo' width={85} height={85} />
            <p className='text-lg'>
«کافه کاریبو» جایی گرم، دوست‌داشتنی و آرام برای لذت‌بردن از قهوه‌های تازه و لحظه‌های خاص شماست. هر فنجان در کاریبو، ترکیبی از طعم واقعی، حس خوب و آرامشی عمیق را به همراه دارد. 
            </p>
            <div className="h-0 border-[0.1px] border-textPrimary/40"></div>
            <h3 >آدرس : اردبیل , خیابان دانش نرسیده به چهارراه حافظ روبروی فروشگاه هفت </h3>
          </div>
          
          <div className='grid grid-cols-1 gap-1 mt-5 md:mt-0'>
            <h3 className=' text-2xl font-bold'>لینک های سریع</h3>

            <Link href="/menu" className='text-xl'>منوی کافه</Link>
            <Link href="/" className='mb-4  text-xl '>خانه</Link>


          </div>
          


          <div className='grid grid-cols-1 gap-3'>
            <h3 className='text-2xl font-bold'>تمـــاس باما</h3>
            <a
              href="https://www.instagram.com/caribou_coffee.68"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className='  text-xl'>اینستاگرام</h3>
            </a>
            


          </div>
        </div>
        <div className='max-w-[1280px] mx-auto mt-10 h-0 border-[0.1px] border-textPrimary/40 text-center '>
          <h3 className='mt-4'>ساخت و توسعه توسط تیم پلاریس</h3>
        </div>

      </div>
    </>
  )
}