import { Icon } from '@iconify/react';



import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto " >




        <div className="my-24 ">
          <div className="grid grid-cols-1 justify-items-center  md:flex md:justify-between ">
            <div className='order-1 md:order-2 mx-4 md:mx-0 mb-8 md:mb-0'>
              <Image src="/images/17.png" alt="hirosection" width="600" height="600" />
            </div>


            <div className="w-11/12 order-2 text-textPrimary md:order-1 grid grid-cols-1 gap-8 md:gap-0  md:mt-6  md:w-6/12  ">
              <h1 className=" text-4xl font-bold m-0">به کافه « کاریبو » خوش آمدید</h1>
              <h1 className=" text-2xl font-bold ">
                کاریبو؛ همون جایی که حس خوب قهوه شروع می‌شه.
              </h1>
              <h1 className=" text-[16px] md:text-[19px] font-bold leading-loose  ">یه فضای ساده و دنج برای وقت‌هایی که می‌خوای از شلوغی روز فاصله بگیری.
                ما قهوه‌هامون رو با دقت انتخاب می‌کنیم، تازه برشته‌شده و خوش‌طعم،<br></br>
                تا هر فنجونش حس خوبی از کیفیت و آرامش بده.</h1>

              <div className="flex gap-2 md:gap-6 ">
                <Link href="/menu">
                  <Button variant="outline" className="px-12 md:px-16 py-5 bg-surface/90  text-textPrimary/90 text-base border-[2px] border-textPrimary   transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-surface  hover:text-textPrimary">مشاهده منو</Button>
                </Link>
                <Link href="#about">
                  <Button variant="outline" className="px-12 md:px-16 py-5 bg-textPrimary/90 font-bold  text-surface text-base border-[2px] border-surface  transition-all duration-300 ease-out hover:-translate-y-1 hover:border-surface hover:bg-textPrimary  hover:text-primary/80">دربـــاره ما</Button>
                </Link>


              </div>
            </div>

          </div>

        </div>



        <div id="about" className="flex justify-center  items-center my-32 mx-4 md:mx-0 md:my-40 ">

          <div className="bg-surface text-textPrimary p-4 md:p-10 text-center leading-10 rounded-3xl md:w-1/2 grid grid-cols-1 gap-2">
            <h2 className="text-xl text-white">کافه « کاریبو »</h2>
            <h3>در «کافه کاریبو»، هر جزئی با عشق کنار هم نشسته تا فضایی بسازیم گرم، دل‌نشین و واقعی؛ جایی که عطر قهوهٔ تازه، نور ملایم و حال‌وهوای آرامِ کافه، یک نفسِ عمیق را مهمان دلت می‌کند. باور ما این است که قهوه فقط طعم ندارد؛ قصه دارد. قصه‌ای از مکث، از آرام گرفتن میان هیاهو، از پیدا کردن لحظه‌ای برای خودت. اینجا کاریبوست؛ جایی برای فکر کردن، لبخند زدن و ساختن لحظه‌هایی که ارزش ماندن دارند.</h3>

          </div>

        </div>





        <div className='grid grid-cols-1 gap-28 justify-items-center md:flex md:justify-between my-40'>
          <div className='grid grid-cols-1 justify-items-center md:justify-items-start gap-6 md:gap-0 mx-4 md:mx-0 md:w-1/3'>
            <h3 className='text-textPrimary font-bold text-2xl '>منوی کافه ما</h3>
            <h3 className='text-textPrimary font-semibold text-lg text-center md:text-start'>از منوی متنوع و خوش‌طعم ما دیدن کنید؛ نوشیدنی‌ها و خوراکی‌هایی که با عشق و دقت تهیه شده‌اند تا لحظه‌های شما خاص‌تر شوند.</h3>
            <Link href="/menu">
              <Button className="px-16 py-5 bg-textPrimary/90 font-bold  text-surface text-base border-[2px] border-surface  transition-all duration-300 ease-out hover:-translate-y-1 hover:border-surface hover:bg-textPrimary  hover:text-surface">مشـــاهده منــــو</Button>
            </Link>


          </div>
          <div className='grid items-center'>
            <Image src="/images/19.png" className='rotate-90' alt='coffe' width="300" height="300" />
          </div>
          <div className='mx-4'>
            <Image src="/images/4.png" alt='cofe' width={500} height={500} />
          </div>
        </div>


        <div className='my-10 md:my-32 grid grid-cols-1  text-textPrimary mx-3 md:mx-0 md:grid-cols-4 gap-6'>
          <div className='grid grid-cols-1 gap-2  border-2 border-textPrimary p-3 rounded-3xl'>
            <Icon icon="streamline-plump:coffee-bean-remix" className='text-2xl' />
            <h3 className='text-xl font-bold'>قهوه تازه و باکیفیت</h3>
            <h3 className='leading-relaxed'>ما دانه‌های قهوه را با دقت انتخاب و تازه‌برشته می‌کنیم تا هر فنجون، طعمی خاص و ماندگار داشته باشد.</h3>

          </div>
          <div className='grid grid-cols-1 gap-2 border-2 border-textPrimary p-3 rounded-3xl'>
            <Icon icon="simple-icons:ticktick" className='text-2xl' />
            <h3 className='text-xl font-bold'>طراحی ساده و مدرن</h3>
            <h3 className='leading-relaxed'>فضای کافه با الهام از سادگی و جزئیات ظریف طراحی شده تا تجربه‌ای آرام، تمیز و دلپذیر و صمیمی بسازد.</h3>

          </div>
          <div className='grid grid-cols-1 gap-2 border-2 border-textPrimary p-3 rounded-3xl'>
            <Icon icon="cib:buy-me-a-coffee" className='text-2xl' />
            <h3 className='text-xl font-bold'>لحظه‌هایی برای خودت</h3>
            <h3 className='leading-relaxed'>کافه کاریبو جایی‌ست برای رهایی از شلوغی روز، نوشیدن قهوه، فکر کردن و لذت بردن از لحظه‌های کوچک اما واقعی.</h3>

          </div>
          <div className='grid grid-cols-1 gap-2 border-2 border-textPrimary p-3 rounded-3xl'>
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
