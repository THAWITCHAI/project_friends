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


type Props = object | any

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
                        <h1 className='w-full h-fit text-3xl px-10 my-10 text-center'>{item.r_name}</h1>
                        <div className='w-full h-[70%] p-10 my-5 flex justify-center items-center'>
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
                        </div>
                        <h1 className='px-10 text-3xl w-full text-center'>ที่อยู่</h1>
                        <div className='w-full h-[20rem] my-10 p-10 grid grid-cols-3 gap-4'>
                            <div className=' flex flex-col justify-center items-center'>
                                <h1 className='my-2'>ซอย {item.r_alley}</h1>
                                <h1 className='my-2'>ถนน {item.r_road}</h1>
                                <h1 className='my-2'>ตำบล {item.r_subdistrict}</h1>
                                <h1 className='my-2'>อำเภอ {item.r_district}</h1>
                            </div>
                            <div className=' flex flex-col justify-center items-center'>
                                <h1 className='my-2'>จังหวัด {item.r_subdistrict}</h1>
                                <h1 className='my-2'>รหัสไปษณีย์ {item.r_zip_code}</h1>
                                <h1 className='my-2'>เวลาเปิด {item.r_open}</h1>
                                <h1 className='my-2'>เวลาปิด {item.r_closs}</h1>
                            </div>
                            <div className=' rounded-md'>
                                <iframe
                                    src={String(item.r_url)}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    width={250}
                                    height={250}
                                    className="rounded-lg outline-none"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}