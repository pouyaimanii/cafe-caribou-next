import { Icon } from '@iconify/react';



import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto " >




        <div className="my-24 ">
          <div className="flex justify-between ">
            <div className="grid grid-cols-1  mt-6  w-6/12  ">
              <h1 className="text-[#FFEFD5] text-4xl font-bold m-0">به کافه «اُ» خوش آمدید</h1>
              <h1 className="text-[#FFEFD5] text-2xl font-bold ">
                «اُ»در زبان ترکی به معنی آن یا همان
                همان کافه ای که دنبالش بودی
              </h1>
              <h1 className="text-[#FFEFD5] text-[19px] font-bold leading-loose  ">یه فضای ساده و دنج برای وقت‌هایی که می‌خوای از شلوغی روز فاصله بگیری.
                ما قهوه‌هامون رو با دقت انتخاب می‌کنیم، تازه برشته‌شده و خوش‌طعم،<br></br>
                تا هر فنجونش حس خوبی از کیفیت و آرامش بده.</h1>

              <div className="flex gap-6">
                <Link href="/menu">
                <Button variant="outline" className="px-16 py-5 bg-[#2B1D0E]/50  text-[#FFF7ED] text-base border-[2px] border-[#FFEFD5]/80   transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#2B1D0E]/60  hover:text-[FFEFD5]/90">مشاهده منو</Button>
                </Link>
                <Link href="#about">
                <Button variant="outline" className="px-16 py-5 bg-[#FFEFD5]/80 font-bold  text-[#2B1D0E]/50 text-base border-[2px] border-[#2B1D0E]/50  transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-[#2B1D0E] hover:bg-[#FFEFD5]  hover:text-[#2B1D0E]/60">دربـــاره ما</Button>
               </Link>


              </div>
            </div>
            <Image src="/images/17.png" alt="hirosection" width="600" height="600" />
          </div>

        </div>



        <div id="about" className="flex justify-center items-center my-40 ">

          <div className="bg-[#2B1D0E]/85 text-[#FFF7ED] p-10 text-center leading-10 rounded-3xl w-1/2 grid grid-cols-1 gap-2">
            <h2 className="text-xl text-white">کافه « اُ »</h2>
            <h3>در «کافه اُ»، همه‌چیز با دقت کنار هم قرار گرفته تا فضایی بسازه ساده، دنج و صمیمی؛ جایی که بوی قهوه تازه، نور گرم و موسیقی آرام، لحظه‌ای از سکوت و آرامش رو بهت هدیه می‌دن. ما باور داریم قهوه فقط یه نوشیدنی نیست، بلکه فرصتیه برای مکث در میان روزهای شلوغ، برای فکر کردن، رؤیا دیدن و دوباره پیدا کردن خودت میان عطر بخار داغ فنجونت. ☕</h3>

          </div>

        </div>





        <div className='flex justify-between my-40'>
          <div className='grid grid-cols-1 w-1/3'>
            <h3 className='text-[#FFF7ED]/80 font-bold text-2xl'>منوی کافه ما</h3>
            <h3 className='text-[#FFF7ED]/70 font-semibold text-lg'>از منوی متنوع و خوش‌طعم ما دیدن کنید؛ نوشیدنی‌ها و خوراکی‌هایی که با عشق و دقت تهیه شده‌اند تا لحظه‌های شما خاص‌تر شوند.</h3>
            <Link href="/menu">
            <Button className="px-16 py-5 bg-[#FFEFD5]/80 font-bold  text-[#2B1D0E]/50 text-base border-[2px] border-[#2B1D0E]/50  transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-[#2B1D0E] hover:bg-[#FFEFD5]  hover:text-[#2B1D0E]/60">مشـــاهده منــــو</Button>
</Link>


          </div>
          <div className='grid items-center'>
            <Image src="/images/19.png" className='rotate-90' alt='coffe' width="300" height="300" />
          </div>

          <Image src="/images/4.png" alt='cofe' width={500} height={500} />
        </div>


        <div className='my-32 grid grid-cols-4 gap-6'>
          <div className='grid grid-cols-1 gap-2 text-[#FFEFD5] border-2 border-[#FFEFD5]/50 p-3 rounded-3xl'>
            <Icon icon="streamline-plump:coffee-bean-remix" className='text-2xl' />
            <h3 className='text-xl font-bold'>قهوه تازه و باکیفیت</h3>
            <h3 className='leading-relaxed'>ما دانه‌های قهوه را با دقت انتخاب و تازه‌برشته می‌کنیم تا هر فنجون، طعمی خاص و ماندگار داشته باشد.</h3>

          </div>
          <div className='grid grid-cols-1 gap-2 text-[#FFEFD5] border-2 border-[#FFEFD5]/50 p-3 rounded-3xl'>
            <Icon icon="simple-icons:ticktick" className='text-2xl' />
            <h3 className='text-xl font-bold'>طراحی ساده و مدرن</h3>
            <h3 className='leading-relaxed'>فضای کافه با الهام از سادگی و جزئیات ظریف طراحی شده تا تجربه‌ای آرام، تمیز و دلپذیر و صمیمی بسازد.</h3>

          </div>
          <div className='grid grid-cols-1 gap-2 text-[#FFEFD5] border-2 border-[#FFEFD5]/50 p-3 rounded-3xl'>
            <Icon icon="cib:buy-me-a-coffee" className='text-2xl' />
            <h3 className='text-xl font-bold'>لحظه‌هایی برای خودت</h3>
            <h3 className='leading-relaxed'>کافه اُ جایی‌ست برای رهایی از شلوغی روز، نوشیدن قهوه، فکر کردن و لذت بردن از لحظه‌های کوچک اما واقعی.</h3>

          </div>
          <div className='grid grid-cols-1 gap-2 text-[#FFEFD5] border-2 border-[#FFEFD5]/50 p-3 rounded-3xl'>
            <Icon icon="ep:dessert" className='text-2xl' />
            <h3 className='text-xl font-bold'>طعم‌های خاص و متفاوت</h3>
            <h3 className='leading-relaxed'>در کنار قهوه، نوشیدنی‌ها و دسرهایی سرو می‌کنیم که با عشق و دقت آماده شده‌اند تا لحظه‌ات را خاص‌تر کنند.</h3>

          </div>

        </div>



        <div className='flex justify-center'>
          <Image src="/images/19.png" alt='coffe' width="300" height="300" />
        </div>





      </div>
      
    </>
  );
}
