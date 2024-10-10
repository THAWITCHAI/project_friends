'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../_components/Navbar_2'
import Image from 'next/image'
import travelModule from '../lib/globalApi'
import Link from 'next/link'

type Props = {}
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

export default function All_Cafe({ }: Props) {
  const [data, setData] = useState<Cafe[]>([])

  useEffect(() => {
    travelModule.getCafe().then(res => setData(res))
  }, [])

  const [search, setSearch] = useState('')
  const dataSearch = data.filter((item) => {
    return (
      (item.r_name && item.r_name.toUpperCase().includes(search.toUpperCase())) ||
      (item.r_province && item.r_province.toUpperCase().includes(search.toUpperCase())) ||
      (item.r_district && item.r_district.toUpperCase().includes(search.toUpperCase())) ||
      (item.r_subdistrict && item.r_subdistrict.toUpperCase().includes(search.toUpperCase()))
    )
  })


  return (
    <div className='w-full h-fit'>
      <div className=" w-full h-fit px-10 py-10 flex justify-center items-center outline-none">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="w-1/2 shadow-md h-[3rem] px-5 rounded-full flex justify-center items-center outline-none"
          placeholder="ค้นหา ชื่อ อำเภอ ตำบล หรือ ประเภท สถานที่ ที่คุณอยากจะไป"
        />
      </div>
      <div className='w-full h-[3rem] mb-5 flex justify-start items-center px-10 text-xl'><h1>จำนวนทั้งหมด : {search != '' ? dataSearch.length : data.length}</h1></div>
      <div className='w-full h-fit p-5 grid grid-cols-5 gap-10'>
        {search == "" && (
          data.map((item, index) => {
            return (
              <Link href={`/all_cafe/${item.r_id}`} key={index}>
                <div className='shadow-md hover:scale-110 transition-all ease-in-out h-[15rem] rounded-md overflow-hidden'>
                  <div className='overflow-hidden w-full h-[70%] flex justify-center items-center'>
                    <Image src={item.r_image_1} width={500} height={500} alt='' />
                  </div>
                  <h1 className='py-2 mx-2'>{item.r_name}</h1>
                  <h1 className='mx-2 flex justify-start items-center'><Image src={'/location.png'} width={18} height={18} alt='' /> <p className='text-[13px] mx-2'>{item.r_district}</p> </h1>
                </div></Link>
            )
          })
        )}
        {search != "" && (
          dataSearch.map((item, index) => {
            return (
              <Link href={`/all_cafe/${item.r_id}`} key={index}>
                <div className='shadow-md hover:scale-110 transition-all ease-in-out h-[15rem] rounded-md overflow-hidden'>
                  <div className='overflow-hidden w-full h-[70%] flex justify-center items-center'>
                    <Image src={item.r_image_1} width={500} height={500} alt='' />
                  </div>
                  <h1 className='py-2 mx-2'>{item.r_name}</h1>
                  <h1 className='mx-2 flex justify-start items-center'><Image src={'/location.png'} width={18} height={18} alt='' /> <p className='text-[13px] mx-2'>{item.r_district}</p> </h1>
                </div></Link>
            )
          })
        )}
      </div>
    </div>
  )
}