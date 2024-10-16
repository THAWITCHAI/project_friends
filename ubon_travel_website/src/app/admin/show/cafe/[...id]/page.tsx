'use client'
import travelModule from '@/app/lib/globalApi'
import { Item } from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = any

interface Cafe {
  r_id: number
  r_name: string
  r_alley: string
  r_road: string
  r_subdistrict: string
  r_district: string
  r_province: string
  r_zip_code: string
  r_url: string
  r_open: string
  r_closs: string
  r_image_1: string
  r_image_2: string
  r_image_3: string
  r_advice: string
}

export default function DetailCafe({ params }: Props) {
  const { id } = params
  const [cafe, setCafe] = useState<Cafe[]>([])

  useEffect(() => {
    travelModule.getCafe().then(res => setCafe(res))
  }, [])
  const fillData = cafe.filter((res) => res.r_id == id)

  console.log(fillData)
  return (
    <div>
      {
        fillData.map((item, index) => {
          return (
            <div key={index} className='w-full h-fit p-5 '>
              <h1 className=' w-full h-fit text-3xl text-center'>
                {item.r_name}
              </h1>
              <div className='  w-full my-10 h-fit flex justify-center items-center'>
                <Image src={item.r_image_1} width={500} height={500} alt='' className='rounded-xl' />
              </div>
              {
                item.r_image_2 != null && (
                  <div className='  w-full my-10 h-fit flex justify-center items-center'>
                    <Image src={item.r_image_2} width={500} height={500} alt='' className='rounded-xl' />
                  </div>
                )
              }
              {
                item.r_image_3 != null && (
                  <div className='  w-full my-10 h-fit flex justify-center items-center'>
                    <Image src={item.r_image_3} width={500} height={500} alt='' className='rounded-xl' />
                  </div>
                )
              }
              <div className='p-5 flex flex-col justify-center items-center'>
                <h1 className='w-fit h-fit my-2 text-2xl text-blue-500'>เวลา เปิด - ปิด ร้าน</h1>
                <h1 className='w-fit h-fit my-2'>เวลาเปิด {item.r_open}</h1>
                <h1 className='w-fit h-fit'>เวลาปิด {item.r_closs}</h1>
              </div>
              <div className='w-full p-5'>
                <h1 className='w-full h-fit my-2 text-2xl text-blue-500 text-center'>คำแนะนำ</h1>
                <h1 className='text-center'>
                  {item.r_advice}

                </h1>
              </div>
              <div className='my-2 p-5'>
                <h1 className='text-2xl text-center text-blue-500  mb-5'>ที่อยู่ของร้าน{" "} {item.r_name}</h1>
                <p className='p-2 w-full text-center'>ซอย {item.r_alley}</p>
                <p className='p-2 w-full text-center'>ถนน {item.r_road}</p>
                <p className='p-2 w-full text-center'>ตำบล {item.r_subdistrict}</p>
                <p className='p-2 w-full text-center'>อำเภอ {item.r_district}</p>
                <p className='p-2 w-full text-center'>จังหวัด {item.r_province}</p>
                <p className='p-2 w-full text-center'>รหัสไปรษณีย์ {item.r_zip_code}</p>
              </div>
              <div className="w-full h-fit p-5 flex justify-center items-center">
                <iframe
                  src={String(item.r_url)}
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