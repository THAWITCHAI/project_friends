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
                {
                    filCar.map((item, index) => (
                        <div key={index} className='w-[60%] shadow-md p-2 gap-4 h-fit flex flex-col justify-center items-center'>
                            <h1 className='text-black font-normal w-full text-center text-xl'>แก้ไขข้อมูลรถ</h1>
                            <div className='w-full flex justify-center items-center gap-2'>
                                <label className='w-[5rem] text-start text-black'>ID</label>
                                <input type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='ID' defaultValue={item['cid']} disabled />
                                <label className='w-[5rem] text-start text-black'>Brand</label>
                                <input type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='Brand' defaultValue={item['cbrand']} />
                            </div>
                            <div className='w-full flex justify-center items-center gap-2'>
                                <label className='w-[5rem] text-start text-black'>Model</label>
                                <input type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='ID' defaultValue={item['cid']} />
                                <label className='w-[5rem] text-start text-black'>Seat</label>
                                <input type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='Brand' defaultValue={item['cseat']} />
                            </div>
                            <div className='w-full flex justify-center items-center gap-2'>
                                <label className='w-[5rem] text-start text-black'>Color</label>
                                <input type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='ID' defaultValue={item['cid']} />
                                <label className='w-[5rem] text-start text-black'>Lincense</label>
                                <input type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='Brand' defaultValue={item['cseat']} />
                            </div>
                            <div className='w-full flex justify-center items-center gap-2'>
                                <label className='w-[5rem] text-start text-black'>File</label>
                                <input type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='ID' defaultValue={item['cid']} />
                                <label className='w-[5rem] text-start text-black'>Status</label>
                                <input type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='Brand' defaultValue={item['cseat']} />
                            </div>
                            <div className='w-full flex justify-center items-center gap-2'>
                                <label className='w-[5rem] text-start text-black'>Price</label>
                                <input type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='ID' defaultValue={item['cid']} />
                                <label className='w-[5rem] text-start text-black'>Type Car</label>
                                <select name="" id="" className='w-1/2 h-[2.5rem] rounded-md border text-black'>

                                    <option className='text-black' value="">Select Status</option>
                                    <option className='text-black' value="available">Available</option>
                                    <option className='text-black' value="unavailable">Unavailable</option>
                                </select>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}