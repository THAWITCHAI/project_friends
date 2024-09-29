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
    id: number,
    name: string,
    alley: string,
    road: string,
    subdistrict: string,
    district: string,
    province: number,
    zip_code: string,
    url: string,
    open: string,
    closs: string,
    image_1: string,
    image_2: string,
    image_3: string,
}


export default function DetailCafe({ params }: Props) {
    const { id } = params
    const [cafe, setCafe] = React.useState<Cafe[]>([])

    useEffect(() => {
        travelModule.getHouse().then(res => setCafe(res))
    }, [])

    const dataCafeDetails = cafe.filter((item) => item.id == id)
    console.log(dataCafeDetails)

    return (
        <div className='w-full h-fit'>
            {dataCafeDetails.map((item, index) => {
                return (
                    <div className='w-full h-fit' key={index}>
                        <h1 className='w-full h-fit text-3xl px-10 my-10 text-center'>{item.name}</h1>
                        <div className='w-full h-[70%] p-10 my-5 flex justify-center items-center'>
                            <div className='w-[35%] h-[20rem] flex justify-center items-center'>
                                <Carousel>
                                    <CarouselContent>
                                        <CarouselItem className=' overflow-hidden flex justify-center items-center'>
                                            <Image
                                                src={item.image_1}
                                                alt=''
                                                width={400}
                                                height={400}
                                                className='rounded-lg'
                                            />
                                        </CarouselItem>
                                        {item.image_2 != null && (
                                            <CarouselItem className=' overflow-hidden flex justify-center items-center'>
                                                <Image
                                                    src={item.image_2}
                                                    alt=''
                                                    width={400}
                                                    height={400}
                                                    className='rounded-lg'
                                                />
                                            </CarouselItem>
                                        )}
                                        {item.image_3 != null && (
                                            <CarouselItem className=' overflow-hidden flex justify-center items-center'>
                                                <Image
                                                    src={item.image_3}
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
                        <h1 className='w-full px-10 text-3xl text-center'>ที่อยู่</h1>
                        <div className='w-full h-[20rem] my-10 py-10 grid grid-cols-3 gap-4 px-10 border'>
                            <div className=' flex flex-col justify-center items-center'>
                                <h1 className='my-2'>ซอย {item.alley}</h1>
                                <h1 className='my-2'>ถนน {item.road}</h1>
                                <h1 className='my-2'>ตำบล {item.subdistrict}</h1>
                            </div>
                            <div className=' flex flex-col justify-center items-center'>
                                <h1 className='my-2'>อำเภอ {item.district}</h1>
                                <h1 className='my-2'>จังหวัด {item.subdistrict}</h1>
                                <h1 className='my-2'>รหัสไปษณีย์ {item.zip_code}</h1>
                            </div>
                            <div className=' rounded-md'>
                                <iframe
                                    src={String(item.url)}
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