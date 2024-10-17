'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../_components/Navbar_2'
import Image from 'next/image'
import travelModule from '../lib/globalApi'
import Link from 'next/link'

type Props = {}
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
 image_1: string,
 image_2: string,
 image_3: string,
}

export default function All_Cafe({ }: Props) {
  const [data, setData] = useState<Cafe[]>([])

  useEffect(() => {
    travelModule.getHouse().then(res => setData(res))
  }, [])

  const search = ""
  return (
    <div className='w-full h-fit'>
      <div className=" w-full h-fit px-10 py-10 flex justify-center items-center outline-none">
        <input
          type="text"
          className="w-1/2 shadow-md h-[3rem] px-5 rounded-full flex justify-center items-center outline-none"
          placeholder="ค้นหา ชื่อ อำเภอ ตำบล หรือ ประเภท สถานที่ ที่คุณอยากจะไป"
        />
      </div>
      <div className='w-full h-[3rem] mb-5 flex justify-start items-center px-10 text-xl'><h1>จำนวนทั้งหมด : {data.length}</h1></div>
      <div className='w-full h-fit p-5 grid grid-cols-5 gap-10'>
        {search == "" && (
          data.map((item, index) => {
            return (
              <Link href={`/all_house/${item.id}`} key={index}>
                <div className='shadow-md hover:scale-110 transition-all ease-in-out h-[15rem] rounded-md overflow-hidden'>
                  <div className='overflow-hidden w-full h-[70%] flex justify-center items-center'>
                    <Image src={item.image_1} width={500} height={500} alt='' />
                  </div>
                  <h1 className='py-2 mx-2'>{item.name}</h1>
                  <h1 className='mx-2 flex justify-start items-center'><Image src={'/location.png'} width={18} height={18} alt='' /> <p className='text-[13px] mx-2'>{item.district}</p> </h1>
                </div></Link>
            )
          })
        )}
      </div>
    </div>
  )
}