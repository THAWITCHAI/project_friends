'use client'
import travelModule from '@/app/lib/globalApi'
import { Item } from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = any

interface Cafe {
  id: number
  name: string
  alley: string
  road: string
  subdistrict: string
  district: string
  province: string
  zip_code: string
  url: string
  open: string
  closs: string
  image_1: string
  image_2: string
  image_3: string
  advice: string
}

export default function DetailCafe({ params }: Props) {
  const { id } = params
  const [cafe, setCafe] = useState<Cafe[]>([])

  useEffect(() => {
    travelModule.getHouse().then(res => setCafe(res))
  }, [])
  const fillData = cafe.filter((res) => res.id == id)

  console.log(fillData)
  return (
    <div>
      {
        fillData.map((item, index) => {
          return (
            <div key={index} className='w-full h-fit p-5 '>
              <h1 className=' w-full h-fit text-3xl text-center'>
                {item.name}
              </h1>
              <div className='  w-full my-10 h-fit flex justify-center items-center'>
                <Image src={item.image_1} width={500} height={500} alt='' className='rounded-xl' />
              </div>
              {
                item.image_2 != null && (
                  <div className='  w-full my-10 h-fit flex justify-center items-center'>
                    <Image src={item.image_2} width={500} height={500} alt='' className='rounded-xl' />
                  </div>
                )
              }
              {
                item.image_3 != null && (
                  <div className='  w-full my-10 h-fit flex justify-center items-center'>
                    <Image src={item.image_3} width={500} height={500} alt='' className='rounded-xl' />
                  </div>
                )
              }
              <div className='w-full p-5'>
                <h1 className='w-full h-fit my-2 text-2xl text-blue-500 text-center'>คำแนะนำ</h1>
                <h1 className='text-center'>
                  {item.advice}

                </h1>
              </div>
              <div className='my-2 p-5'>
                <h1 className='text-2xl text-center text-blue-500  mb-5'>ที่อยู่ของร้าน{" "} {item.name}</h1>
                <p className='p-2 w-full text-center'>ซอย {item.alley}</p>
                <p className='p-2 w-full text-center'>ถนน {item.road}</p>
                <p className='p-2 w-full text-center'>ตำบล {item.subdistrict}</p>
                <p className='p-2 w-full text-center'>อำเภอ {item.district}</p>
                <p className='p-2 w-full text-center'>จังหวัด {item.province}</p>
                <p className='p-2 w-full text-center'>รหัสไปรษณีย์ {item.zip_code}</p>
              </div>
              <div className="w-full h-fit p-5 flex justify-center items-center">
                <iframe
                  src={String(item.url)}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  width={300}
                  height={300}
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}