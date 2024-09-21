import React from 'react'
import Navbar from '../_components/Navbar_2'

type Props = {}

export default function All_Cafe({ }: Props) {
  return (
    <div className='w-full h-fit'>
      <Navbar />
      <div className=" w-full h-fit px-10 py-10 flex justify-center items-center outline-none">
        <input
          type="text"
          className="w-1/2 shadow-md h-[3rem] px-5 rounded-full flex justify-center items-center outline-none"
          placeholder="ค้นหา ชื่อ อำเภอ ตำบล หรือ ประเภท สถานที่ ที่คุณอยากจะไป"
        />
      </div>
      <div className='w-full h-[3rem] mb-5 flex justify-start items-center px-10 text-xl'><h1>จำนวนทั้งหมด : 15</h1></div>
      <div className='w-full h-[20rem] border'></div>
    </div>
  )
}