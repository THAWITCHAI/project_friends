'use client'
import Sidebar from '@/app/_components/Admin/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'

type Props = object

export default function EditCar({ params }: Props) {
    const { id } = params
    const [data, setData] = useState([])

    useEffect(() => {
        getCar()
    }, [])
    const getCar = () => {
        fetch('/api/car')
            .then((res) => res.json())
            .then((res) => setData(res))
    }

    const filCar = data.filter((item) => String(item['cid']) == String(id[0]))
    return (
        <div className='main'>
            <Sidebar />
            <div className='w-full text-black px-5 py-5 flex justify-center items-start'>
                <div className='w-[50%] shadow-md p-2 gap-4 h-fit flex flex-col justify-center items-center'>
                    <h1 className='text-black font-normal w-full text-center text-xl'>แก้ไขข้อมูล Car</h1>
                    <div className='w-full flex justify-center items-center gap-2'>
                        <input type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2' placeholder='ID' />
                        <input type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2' placeholder='Brand' />
                    </div>
                </div>
            </div>
        </div>
    )
}