import { Icon } from '@iconify/react';



import Image from "next/image";
import Link from 'next/link';

{/* <div className='flex justify-center'>
            <Image src="/images/19.png" alt='coffe' width="300" height="300" />
          </div> */}

export default function Menu() {
    return (
        <>
            <div className="max-w-[1280px] mx-auto">


                <div className='grid grid-cols-1'>
                    <div className='flex justify-center items-center gap-2 my-5'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-[#2B1D0E]/80 font-bold mx-2">دسته بندی ها</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                    </div>
                    <div className='grid grid-cols-5 gap-10 my-10 justify-center items-center justify-items-center text-center'>

                        <Link href="#hotdrinks" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/h2.jpg" className='h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="100" height="100" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>نوشیدنی گرم</h3>

                        </Link>
                        <Link href="#matcha" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/m1.jpg" className='h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="140" height="140" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>مـاچـا</h3>

                        </Link>
                        <Link href="#shake" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/sh1.jpg" className='h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="100" height="100" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>شیک </h3>

                        </Link>
                        <Link href="#espresso" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/s1.jpg" className=' h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="100" height="100" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>قهوه</h3>

                        </Link>
                        <Link href="#icecoffee" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/i1.jpg" className='h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="100" height="100" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>آیس کافی</h3>

                        </Link>



                    </div>
                </div>



                <div id='hotdrinks' className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-10'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-[#2B1D0E]/80 font-bold mx-2">HOT DRINKS</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="grid grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>هات چاکلت</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>90,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>پودر شکلات شیری + شیر گرم + فوم شیر</h3></div>


                            </div>
                            <Image src="/images/ht.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>وایت چاکلت</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>90,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>پودر شکلات سفید + شیر گرم + فوم شیر</h3></div>


                            </div>
                            <Image src="/images/vh.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>چای لاته ماسالا</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>90,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>پودر ماسالا + شیر گرم + فوم شیر</h3></div>


                            </div>
                            <Image src="/images/hlm.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>چای لاته کرک</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>80,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>پودر چای کرک ، شیر گرم، فوم شیر</h3></div>


                            </div>
                            <Image src="/images/hlt.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>نسکافه</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>80,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>پودر نسکافه اکوادور + شیر گرم + شکر</h3></div>


                            </div>
                            <Image src="/images/n.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>شیر کاکائو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>70,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>پودر کاکائو ترک + شیر گرم + شکر</h3></div>


                            </div>
                            <Image src="/images/shk.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>چای دمی</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>35,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>چای سیاه + هل + زعفران</h3></div>


                            </div>
                            <Image src="/images/ch.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>






                    </div>

                </div>


                <div id="shake" className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-24'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-[#2B1D0E]/80 font-bold mx-2">SHAKE</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="grid grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>شیک شکلات</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>150,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>بستنی رقیق شده + تکه های شکلات</h3></div>
                            </div>
                            <Image src="/images/shsh.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>شیک نوتلا</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>180,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>بستنی رقیق شده + نوتلا</h3></div>
                            </div>
                            <Image src="/images/shn.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>شیک پینات</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>180,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>بستنی رقیق شده + کره بادام زمینی</h3></div>
                            </div>
                            <Image src="/images/shp.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>شیک لوتوس</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>160,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>بستنی رقیق شده + کرم لوتوس</h3></div>
                            </div>
                            <Image src="/images/shl.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>شیک تیرامیسو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>150,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>بستنی رقیق شده + قهوه + کرم بیسکوئیت</h3></div>
                            </div>
                            <Image src="/images/sht.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>







                    </div>

                </div>



                <div id='matcha' className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-24'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-[#2B1D0E]/80 font-bold mx-2">MATCHA BAR</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="grid grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>ماچا لاته</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>130,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>پودر ماچا و آب گرم + شیر گرم + فوم شیر</h3></div>
                            </div>
                            <Image src="/images/ml.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>آیس ماچا لاته</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>140,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>پودر ماچا + شیر سرد + یخ</h3></div>
                            </div>
                            <Image src="/images/aml.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>آیس ماچا استرابری</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>170,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>پودر ماچا + شیر سرد + یخ + سیروپ و میوه توت فرنگی</h3></div>
                            </div>
                            <Image src="/images/ama.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>آیس ماچا منگو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>190,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>پودر ماچا + شیر سرد + یخ + سیروب و میوه انبه</h3></div>
                            </div>
                            <Image src="/images/ammm.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>ماچا چیلو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>190,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>پودر ماچا + بستنی + شیر + یخ</h3></div>
                            </div>
                            <Image src="/images/mch.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>ماچا گاتو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>190,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>پودر ماچا + آب + بستنی وانیلی</h3></div>
                            </div>
                            <Image src="/images/mg.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>








                    </div>

                </div>




                <div id='espresso' className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-24'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-[#2B1D0E]/80 font-bold mx-2">ESPRESSO BAR</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="grid grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>آمریکانو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>80,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + آب جوش</h3></div>
                            </div>
                            <Image src="/images/emerican.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>لاته</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>100,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + شیر گرم</h3></div>
                            </div>
                            <Image src="/images/late.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>کاپوچینو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>100,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + شیر گرم + فوم شیر زیاد</h3></div>
                            </div>
                            <Image src="/images/capochino.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>موکا</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>120,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + شکلات + شیر گرم</h3></div>
                            </div>
                            <Image src="/images/moka.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>کارامل ماکیاتو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>120,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + کارامل + شیر گرم</h3></div>
                            </div>
                            <Image src="/images/cm.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>ماکیاتو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>110,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + شیر گرم + فوم شیر</h3></div>
                            </div>
                            <Image src="/images/m.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>فلت وایت</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>100,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + شیر گرم + فوم شیر</h3></div>
                            </div>
                            <Image src="/images/fv.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>کورتادو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>80,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + شیر گرم + فوم شیر کم</h3></div>
                            </div>
                            <Image src="/images/k.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>رومانو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>80,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + لیموی تازه + آب جوش</h3></div>
                            </div>
                            <Image src="/images/r.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>دالگونا</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>80,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + فوم دالگونا + شیر گرم</h3></div>
                            </div>
                            <Image src="/images/d.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>آفوگاتو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>120,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + دو اسکوپ بستنی وانیلی</h3></div>
                            </div>
                            <Image src="/images/af.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>










                    </div>

                </div>


                <div id='icecoffee' className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-24'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-[#2B1D0E]/80 font-bold mx-2">ICED COFFEE BAR</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="grid grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>آیس آمریکانو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>90,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + آب + یخ</h3></div>
                            </div>
                            <Image src="/images/am.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>آیس لاته</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>110,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + شیر سرد + یخ</h3></div>
                            </div>
                            <Image src="/images/al.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>کن هیلو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>70,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + یخ</h3></div>
                            </div>
                            <Image src="/images/kh.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>آیس کارامل ماکیاتو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>130,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + کارامل + شیر سرد + یخ</h3></div>
                            </div>
                            <Image src="/images/akm.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>آیس موکا</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>130,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + شکلات + شیر سرد + یخ</h3></div>
                            </div>
                            <Image src="/images/amm.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>آیس رومانو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>110,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + آب سودا + لیمو + یخ</h3></div>
                            </div>
                            <Image src="/images/ar.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>اورنج کافی</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>140,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + آب پرتقال + یخ</h3></div>
                            </div>
                            <Image src="/images/ok.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>آیس دالگونا</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>140,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + فوم دالگونا + شیر سرد + یخ</h3></div>
                            </div>
                            <Image src="/images/ad.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>کاپاچیلو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>160,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + بستنی وانیلی + شیر + یخ</h3></div>
                            </div>
                            <Image src="/images/kp.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-[#2B1D0E]/50 rounded-3xl p-2">
                            <div className="gid grid-cols-1   text-[#2B1D0E]/80 font-semibold ">
                                <div className="mt-1 flex items-center gap-1"><Icon icon="ph:shopping-bag-bold" width={20} height={20} className='font-bold' /><h3>کارامل کاپاچیلو</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="solar:dollar-outline" width={20} height={20} className='font-bold' /><h3>90,000 تومان</h3></div>
                                <div className="mt-3 flex items-center gap-1"><Icon icon="streamline-freehand:task-list-pen" width={20} height={20} className='font-bold' /><h3>اسپرسو دبل + سس کارامل + بستنی وانیلی + شیر + یخ</h3></div>
                            </div>
                            <Image src="/images/kk.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>










                    </div>

                </div>



         <div className='flex justify-center mt-10'>
                  <Image src="/images/19.png" alt='coffe' width="300" height="300" />
                </div>
        

            </div>

        </>
    )
}