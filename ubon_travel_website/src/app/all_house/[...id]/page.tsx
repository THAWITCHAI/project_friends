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
                        <h1 className='w-full h-fit text-3xl px-10 my-10 text-center font-bold'>{item.name}</h1>
                        <div className='w-full h-[70%] p-10 my-5 flex justify-around items-center gap-4'>
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
                            <div className='w-[40%] flex-col flex justify-start gap-2 items-center h-[20rem] text-center'>
                                <h1 className='w-full text-start text-2xl font-bold'>คำแนะนำ</h1>
                                <div className='w-full text-center h-fit border font-medium p-5 rounded-md text-xl'>
                                    {item.background}

                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <h1 className='w-[40rem] text-3xl text-start px-10 font-bold'>ที่อยู่</h1>
                            <h1 className='w-full text-3xl text-start font-bold px-10'>แผนที่</h1>
                        </div>
                        <div className='w-full px-10'>
                            <div className='w-full h-[20rem] my-10 px-5 flex justify-between items-center  border rounded-md'>
                                <div className=' flex gap-4 justify-center items-center w-[50%] h-full border-r-4 mr-2'>
                                    <div className='border-r px-5'>
                                        <h1 className='my-2'>ซอย {item.alley}</h1>
                                        <h1 className='my-2'>ถนน {item.road}</h1>
                                        <h1 className='my-2'>ตำบล {item.subdistrict}</h1>
                                        <h1 className='my-2'>อำเภอ {item.district}</h1>
                                    </div>
                                    <div className='px-5'>
                                        <h1 className='my-2'>จังหวัด {item.subdistrict}</h1>
                                        <h1 className='my-2'>รหัสไปรษณีย์ {item.zip_code}</h1>
                                        {item.open && (
                                            <h1 className='my-2'>เวลาเปิด {item.open}</h1>
                                        )}
                                        {item.closs && (
                                            <h1 className='my-2'>เวลาเปิด {item.closs}</h1>
                                        )}
                                        {item.open && (
                                            <h1 className='my-2'>เวลาเปิด {item.open}</h1>
                                        )}
                                    </div>
                                </div>
                                <div className=' rounded-md w-full'>
                                    <iframe
                                        src={String(item.url)}
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