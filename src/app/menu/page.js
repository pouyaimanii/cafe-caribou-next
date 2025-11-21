import { Icon } from '@iconify/react';



import Image from "next/image";
import Link from 'next/link';


export default function Menu() {
    return (
        <>
            <div className="max-w-[1280px] mx-auto">


                <div className='grid grid-cols-1'>
                    <div className='flex justify-center items-center gap-2 my-5'>
                        <div className="h-0 border-[0.1px] w-full border-textPrimary/50"></div>
                        <h3 className="whitespace-nowrap text-textPrimary/90 font-bold mx-2">دسته بندی ها</h3>

                        <div className="h-0 border-[0.1px] w-full border-textPrimary/50"></div>
                    </div>
                    <div className='grid mx-4 grid-cols-2 md:grid-cols-5 gap-10 my-10 justify-center items-center justify-items-center text-center'>

                        <Link href="#ge" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/c2.jpg" className='h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="100" height="100" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>قهوه دمی</h3>

                        </Link>
                        <Link href="#k" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/mmkk.jpg" className='h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="140" height="140" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>کیک و دسر</h3>

                        </Link>
                        <Link href="#sh" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/sh1.jpg" className='h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="100" height="100" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>شیک </h3>

                        </Link>
                        <Link href="#eses" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/s1.jpg" className=' h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="100" height="100" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>بر پایه اسپرسو</h3>

                        </Link>
                        <Link href="#i" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/i1.jpg" className='h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="100" height="100" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>آیس کافی</h3>

                        </Link>
                        <Link href="#ck" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/c8.jpg" className='h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="100" height="100" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>بر پایه شکلات</h3>

                        </Link>
                        <Link href="#s" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/c12.jpg" className='h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="140" height="140" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>اسموتی</h3>

                        </Link>
                        <Link href="#ch" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/gfg.jpg" className='h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="100" height="100" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>چای و دمنوش </h3>

                        </Link>
                        <Link href="#m" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/mmhh.jpg" className=' h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="100" height="100" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>ماکتل</h3>

                        </Link>
                        <Link href="#sos" className='grid grid-cols-1 items-center gap-2 '>
                            <Image src="/images/ese.jpg" className='h-40 w-40 rounded-full border-2 border-[#FFF7ED]/80' alt='coffe' width="100" height="100" />
                            <h3 className='font-semibold text-xl text-[#FFF7ED]/75'>اسپرسو</h3>

                        </Link>



                    </div>
                </div>



                <div id='sos' className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-10'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-textPrimary/90 text-xl font-semibold mx-2">اسپرسو</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="text-textPrimary grid mx-3 grid-cols-1 md:grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>100 عربیکا</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>95,000 تومان</h3></div>
                            </div>
                            <Image src="/images/ara.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>20/80 ربوستا</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>65,000 تومان</h3></div>
                            </div>
                            <Image src="/images/ror.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>50/50 روبوستا-عربیکا</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>70,000 تومان</h3></div>
                            </div>
                            <Image src="/images/caca.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>30/70 عربیکا</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>85,000 تومان</h3></div>
                            </div>
                            <Image src="/images/ca.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>100 ربوستا</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>60,000 تومان</h3></div>
                            </div>
                            <Image src="/images/rr.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>آمریکانو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>75,000 تومان</h3></div>
                            </div>
                            <Image src="/images/ama.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>رومانو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>85,000 تومان</h3></div>
                            </div>
                            <Image src="/images/ro.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>عسل</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>80,000 تومان</h3></div>
                            </div>
                            <Image src="/images/as.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>دارچین</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>70,000 تومان</h3></div>
                            </div>
                            <Image src="/images/dss.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>زنجبیل</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>70,000 تومان</h3></div>
                            </div>
                            <Image src="/images/zn.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>زعفران</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>90,000 تومان</h3></div>
                            </div>
                            <Image src="/images/zz.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>هل</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>75,000 تومان</h3></div>
                            </div>
                            <Image src="/images/hh.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>فروت کافی</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>75,000 تومان</h3></div>
                            </div>
                            <Image src="/images/fk.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                    </div>

                </div>

                <div id='ge' className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-10'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-textPrimary/90 text-xl font-semibold mx-2">قهوه دمی</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="text-textPrimary grid mx-3 grid-cols-1 md:grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>کمکس</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>100,000 تومان</h3></div>
                            </div>
                            <Image src="/images/kmk.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>قهوه ترک</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>85,000 تومان</h3></div>
                            </div>
                            <Image src="/images/gt.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>فرنچ پرس</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>80,000 تومان</h3></div>
                            </div>
                            <Image src="/images/fp.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                    </div>

                </div>





                <div id='eses' className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-10'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-textPrimary/90 text-xl font-semibold mx-2">بر پایه اسپرسو</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="text-textPrimary grid mx-3 grid-cols-1 md:grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>کاپوچینو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>95,000 تومان</h3></div>
                            </div>
                            <Image src="/images/kch.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>لته</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>100,000 تومان</h3></div>
                            </div>
                            <Image src="/images/ll.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>ماکیاتو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>100,000 تومان</h3></div>
                            </div>
                            <Image src="/images/mk.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>موکا</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>100,000 تومان</h3></div>
                            </div>
                            <Image src="/images/mm.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>دالگونا</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>110,000 تومان</h3></div>
                            </div>
                            <Image src="/images/dd.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>فلت وایت</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>85,000 تومان</h3></div>
                            </div>
                            <Image src="/images/fv.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>کورتادو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>80,000 تومان</h3></div>
                            </div>
                            <Image src="/images/kk.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>شیر عسل</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>90,000 تومان</h3></div>
                            </div>
                            <Image src="/images/sha.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>قهوه فوری</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>70,000 تومان</h3></div>
                            </div>
                            <Image src="/images/gf.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>قهوه یونانی</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>85,000 تومان</h3></div>
                            </div>
                            <Image src="/images/gy.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>
                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>شیر نسکافه</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>85,000 تومان</h3></div>
                            </div>
                            <Image src="/images/shn.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                    </div>

                </div>






                <div id='ck' className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-10'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-textPrimary/90 text-xl font-semibold mx-2">بر پایه شکلات</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="text-textPrimary grid mx-3 grid-cols-1 md:grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>هات چاکلت کاریبو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>130,000 تومان</h3></div>
                            </div>
                            <Image src="/images/hchk.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>هات چاکلت دارچینی</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>105,000 تومان</h3></div>
                            </div>
                            <Image src="/images/hchd.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>هات چاکلت</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>100,000 تومان</h3></div>
                            </div>
                            <Image src="/images/hch.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>هات فندق</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>105,000 تومان</h3></div>
                            </div>
                            <Image src="/images/hf.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>هات زعفران</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/hz.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>وایت چاکلت</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>100,000 تومان</h3></div>
                            </div>
                            <Image src="/images/vch.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>شیر کاکائو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>80,000 تومان</h3></div>
                            </div>
                            <Image src="/images/shk.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>



                    </div>

                </div>




                <div id='ch' className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-10'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-textPrimary/90 text-xl font-semibold mx-2">چای و دمنوش</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="text-textPrimary grid mx-3 grid-cols-1 md:grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>چای سیاه</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>60,000 تومان</h3></div>
                            </div>
                            <Image src="/images/ds2.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>چای سبز</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>75,000 تومان</h3></div>
                            </div>
                            <Image src="/images/ds1.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>چای زعفران</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>70,000 تومان</h3></div>
                            </div>
                            <Image src="/images/dz.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>چای گل گاوزبان+عسل</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>80,000 تومان</h3></div>
                            </div>
                            <Image src="/images/dj.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>چای ماسالا + عسل</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>100,000 تومان</h3></div>
                            </div>
                            <Image src="/images/dm.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>دمنوش آرام</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>80,000 تومان</h3></div>
                            </div>
                            <Image src="/images/da.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>دمنوش گیاهی</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>90,000 تومان</h3></div>
                            </div>
                            <Image src="/images/dg.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>دمنوش چای ترش</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>80,000 تومان</h3></div>
                            </div>
                            <Image src="/images/dch.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>دمنوش سلامت</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>80,000 تومان</h3></div>
                            </div>
                            <Image src="/images/ds.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>



                    </div>

                </div>





                <div id='i' className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-10'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-textPrimary/90 text-xl font-semibold mx-2">آیس کافی</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="text-textPrimary grid mx-3 grid-cols-1 md:grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>آیس لته</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>105,000 تومان</h3></div>
                            </div>
                            <Image src="/images/oto.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>آیس لته کلاسیک</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/att.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>آیس آمریکانو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>80,000 تومان</h3></div>
                            </div>
                            <Image src="/images/ayo.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>آیس موکا</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>110,000 تومان</h3></div>
                            </div>
                            <Image src="/images/ayy.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>آیس ماکیاتو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>110,000 تومان</h3></div>
                            </div>
                            <Image src="/images/aym.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>آیس توت فرنگی</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>110,000 تومان</h3></div>
                            </div>
                            <Image src="/images/ayt.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>آیس رومانو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>90,000 تومان</h3></div>
                            </div>
                            <Image src="/images/ay.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>آفوگاتو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>100,000 تومان</h3></div>
                            </div>
                            <Image src="/images/aff.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>کوک اسپرسو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>100,000 تومان</h3></div>
                            </div>
                            <Image src="/images/kook.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>



                    </div>

                </div>



                <div id='s' className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-10'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-textPrimary/90 text-xl font-semibold mx-2">اسموتی</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="text-textPrimary grid mx-3 grid-cols-1 md:grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>موز توت</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/poo.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>توت آلبالو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>110,000 تومان</h3></div>
                            </div>
                            <Image src="/images/pa.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>سیب ترش</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/moon.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>موز انبه</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/esmo.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>هلو انبه</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/esh.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>موز آلبالو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/esm.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>چری بری</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>110,000 تومان</h3></div>
                            </div>
                            <Image src="/images/esch.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>شیر موز</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>100,000 تومان</h3></div>
                            </div>
                            <Image src="/images/shm.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>شیر خرما</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>90,000 تومان</h3></div>
                            </div>
                            <Image src="/images/shkh.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>



                    </div>

                </div>








                <div id='m' className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-10'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-textPrimary/90 text-xl font-semibold mx-2">ماکتل</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="text-textPrimary grid mx-3 grid-cols-1 md:grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>لیموناد</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>95,000 تومان</h3></div>
                            </div>
                            <Image src="/images/lim.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>لیموناد لوندر</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>105,000 تومان</h3></div>
                            </div>
                            <Image src="/images/liim.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>موهیتو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>110,000 تومان</h3></div>
                            </div>
                            <Image src="/images/mio.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>ارگاردن</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>130,000 تومان</h3></div>
                            </div>
                            <Image src="/images/aza.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>مینت بری</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>110,000 تومان</h3></div>
                            </div>
                            <Image src="/images/mint.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>آبریش</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/up.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>پاتریک</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>130,000 تومان</h3></div>
                            </div>
                            <Image src="/images/pat.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>نئون لاو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/nen.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>موهیتو توت فرنگی</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>110,000 تومان</h3></div>
                            </div>
                            <Image src="/images/moh.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>بلو دریم</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>150,000 تومان</h3></div>
                            </div>
                            <Image src="/images/blue.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>کاریبو نایت</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/cac.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>مید نایت</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/mid.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>انرژی آپ جویس</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>140,000 تومان</h3></div>
                            </div>
                            <Image src="/images/en.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>رد وایلت</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/red.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>مانگو لایم</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>130,000 تومان</h3></div>
                            </div>
                            <Image src="/images/mang.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>پینک دی</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>140,000 تومان</h3></div>
                            </div>
                            <Image src="/images/pink.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>



                    </div>

                </div>












                <div id='sh' className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-10'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-textPrimary/90 text-xl font-semibold mx-2">شیک</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="text-textPrimary grid mx-3 grid-cols-1 md:grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>نوتلا</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>150,000 تومان</h3></div>
                            </div>
                            <Image src="/images/notel.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>وانیل</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/vani.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>شکلات</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/sho.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>کارامل</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/kaka.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>پی نات دریم</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>140,000 تومان</h3></div>
                            </div>
                            <Image src="/images/pi.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>کپت کت</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>140,000 تومان</h3></div>
                            </div>
                            <Image src="/images/kitkit.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>اورنو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>150,000 تومان</h3></div>
                            </div>
                            <Image src="/images/orno.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>بادام زمینی</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>140,000 تومان</h3></div>
                            </div>
                            <Image src="/images/badan.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>




                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>توت فرنگی</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/tot.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>



                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>مانگو</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/mon.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>قهوه</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/gag.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>موز شکلات</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/moz.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>میوه</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>110,000 تومان</h3></div>
                            </div>
                            <Image src="/images/mi.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>M&M</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>140,000 تومان</h3></div>
                            </div>
                            <Image src="/images/mmm.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>اسنیکرز</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>170,000 تومان</h3></div>
                            </div>
                            <Image src="/images/es.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>


                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>نسکافه</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/nsn.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>





                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>شکلات تلخ</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>140,000 تومان</h3></div>
                            </div>
                            <Image src="/images/sht.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>





                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>کافه گلاسه</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>105,000 تومان</h3></div>
                            </div>
                            <Image src="/images/kj.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>





                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>شاتوت گلاسه</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>120,000 تومان</h3></div>
                            </div>
                            <Image src="/images/shjj.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>





                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>پروتئین</h3></div>
                                <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>170,000 تومان</h3></div>
                            </div>
                            <Image src="/images/pt.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>





                    </div>

                </div>






















                <div id='k' className='grid grid-cols-1 '>

                    <div className='flex justify-center items-center gap-2 mt-10'>
                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>
                        <h3 className="whitespace-nowrap text-textPrimary/90 text-xl font-semibold mx-2">کیک و دسر</h3>

                        <div className="h-0 border-[0.1px] w-full border-[#FFF7ED]/40"></div>


                    </div>



                    <div className="text-textPrimary grid mx-3 grid-cols-1 md:grid-cols-2 gap-6 my-8">

                        <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>کیک روز</h3></div>
                            </div>
                            <Image src="/images/krk.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>کیک فرانسوی</h3></div>
                            </div>
                            <Image src="/images/kfk.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>کیک هویج</h3></div>
                            </div>
                            <Image src="/images/khk.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
                        </div>

                         <div className="flex  justify-between border-2 border-textPrimary/80 rounded-3xl p-2">
                            <div className="grid grid-cols-1 font-semibold ">
                                <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>کیک فول چاکلت</h3></div>
                            </div>
                            <Image src="/images/kkf.jpg" alt="cofe" className="rounded-2xl" width={130} height={130} />
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