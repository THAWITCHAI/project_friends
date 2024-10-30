'use client'
import travelModule from '@/app/lib/globalApi'
import Image from 'next/image'
import React, { useEffect } from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


type Props = object

interface Cafe {
    r_id: number,
    r_name: string,
    r_alley: string,
    r_road: string,
    r_subdistrict: string,
    r_district: string,
    r_province: number,
    r_zip_code: string,
    r_url: string,
    r_open: string,
    r_closs: string,
    r_image_1: string,
    r_image_2: string,
    r_image_3: string,
    r_advice: string
}


export default function DetailCafe({ params }: Props) {
    const { id } = params
    const [cafe, setCafe] = React.useState<Cafe[]>([])

    useEffect(() => {
        travelModule.getCafe().then(res => setCafe(res))
    }, [])

    const dataCafeDetails = cafe.filter((item) => item.r_id == id)
    console.log(dataCafeDetails)

    return (
        <div className='w-full h-fit'>
            {dataCafeDetails.map((item, index) => {
                return (
                    <div className='w-full h-fit' key={index}>
                        <h1 className='w-full h-fit text-3xl px-10 my-10 text-center font-bold'>{item.r_name}</h1>
                        <div className='w-full h-[70%] p-10 my-5 flex justify-around items-center gap-10'>
                            <div className='w-[35%] h-[20rem] flex justify-center items-center'>
                                <Carousel>
                                    <CarouselContent>
                                        <CarouselItem className=' overflow-hidden flex justify-center items-center'>
                                            <Image
                                                src={item.r_image_1}
                                                alt=''
                                                width={400}
                                                height={400}
                                                className='rounded-lg'
                                            />
                                        </CarouselItem>
                                        {item.r_image_2 != null && (
                                            <CarouselItem className=' overflow-hidden flex justify-center items-center'>
                                                <Image
                                                    src={item.r_image_2}
                                                    alt=''
                                                    width={400}
                                                    height={400}
                                                    className='rounded-lg'
                                                />
                                            </CarouselItem>
                                        )}
                                        {item.r_image_3 != null && (
                                            <CarouselItem className=' overflow-hidden flex justify-center items-center'>
                                                <Image
                                                    src={item.r_image_3}
                                                    alt=''
                                                    width={400}
                                                    height={400}
                                                    className='rounded-lg'
                                                />
                                            </CarouselItem>
                                        )}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </div>
                            <div className='w-[50rem] h-[20rem] text-center p-4 flex flex-col justify-start items-center'>
                                <h1 className='w-full text-start font-bold text-2xl'>คำแนะนำ</h1>
                                <div className='w-full px-16'>
                                    <div className='w-full h-fit p-5 text-center border rounded-md'>{item.r_advice}</div>
                                </div>
                            </div>
                        </div>
                        <h1 className='px-10 text-3xl w-full text-center'>ที่อยู่</h1>
                        <div className='w-full px-10'>
                            <div className='w-full h-[20rem] my-10 px-5 flex justify-between items-center  border rounded-md'>
                                <div className=' flex gap-4 justify-center items-center w-[50%] h-full border-r-4 mr-2'> 
                                    <div className='border-r px-5'>
                                        <h1 className='my-2'>ซอย {item.r_alley}</h1>
                                        <h1 className='my-2'>ถนน {item.r_road}</h1>
                                        <h1 className='my-2'>ตำบล {item.r_subdistrict}</h1>
                                        <h1 className='my-2'>อำเภอ {item.r_district}</h1>
                                    </div>
                                    <div className='px-5'>
                                        <h1 className='my-2'>จังหวัด {item.r_subdistrict}</h1>
                                        <h1 className='my-2'>รหัสไปรษณีย์ {item.r_zip_code}</h1>
                                        <h1 className='my-2'>เวลาเปิด {item.r_open}</h1>
                                        <h1 className='my-2'>เวลาปิด {item.r_closs}</h1>
                                    </div>
                                </div>
                                <div className=' rounded-md w-full'>
                                    <iframe
                                        src={String(item.r_url)}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        width={250}
                                        height={250}
                                        className="rounded-lg outline-none w-full"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}