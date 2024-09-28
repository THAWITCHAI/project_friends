'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

type Props = {}

export default function House({ }: Props) {
    const [form, setForm] = useState({})
    const [house_image_1, setHouse_image_1] = useState<String | null>(null)
    const [house_image_2, setHouse_image_2] = useState<String | null>(null)
    const [house_image_3, setHouse_image_3] = useState<String | null>(null)

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        return
    }

    const handleSubmit = async () => {
        console.log(form)
        return
    }
    return (
        <div className='w-full h-fit flex flex-col items-center justify-center'>
            <h1 className="border-b h-[8.5%] w-full flex justify-start items-center p-2 text-xl font-light">
                สถานที่พัก
            </h1>
            <div className='shadow-lg my-5 p-5 w-[70%] h-fit'>
                <li className='my-5'>ชื่อสถานที่พัก</li>
                <input onChange={handleChange} name='name' type="text" className='border w-full h-[2.5rem] rounded-lg outline-none px-4' placeholder='ชื่อ' />
                <li className='my-5'>ที่อยู่</li>
                <div className='grid grid-cols-2 gap-2'>
                    <input onChange={handleChange} name='province' type="text" placeholder='จังหวัด' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' />
                    <input onChange={handleChange} name='district' type="text" placeholder='อำเภอ' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' />
                    <input onChange={handleChange} name='subdistrict' type="text" placeholder='ตำบล' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' />
                    <input onChange={handleChange} name='road' type="text" placeholder='ถนน' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' />
                    <input onChange={handleChange} name='alley' type="text" placeholder='ซอย/ตรอก' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' />
                    <input onChange={handleChange} name='zip_code' type="text" placeholder='รหัสไปรษณีย์' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' />
                </div>
                <li className='my-5'>ติดต่อ</li>
                <div className='grid grid-cols-2 gap-2'>
                    <input onChange={handleChange} name='email' type="email" placeholder='อีเมล์' className='border w-full h-[2.5rem]  rounded-lg outline-none p-2' />
                    <input onChange={handleChange} name='phone_number' type="text" placeholder='เบอร์โทรศัพท์' className='border w-full h-[2.5rem]  rounded-lg outline-none p-2' />
                </div>
                <li className='my-5'>ที่ตั้งบนแผนที่</li>
                <input onChange={handleChange} name='url' type="url" placeholder='URL' className='border w-full h-[2.5rem]  rounded-lg outline-none p-2' />
                <li className='my-5'>คำแนะนำที่พัก</li>
                <textarea onChange={handleChange} name="background" className='w-full border h-[5rem] p-2 outline-none rounded-lg' placeholder='คำแนะนำพอสังเขป'></textarea>
                <li className='my-5'>รูปภาพแนะนำ</li>
                <div className='w-full h-[5rem] p-2 grid grid-cols-3 gap-2 justify-center items-center'>
                    <Input onChange={handleChange} name="image_1" type="file" className="w-full border outline-none flex justify-center items-center" />
                    <Input onChange={handleChange} name="image_2" type="file" className="w-full border outline-none flex justify-center items-center" />
                    <Input onChange={handleChange} name="image_3" type="file" className="w-full border outline-none flex justify-center items-center" />
                </div>
                <div className='w-full my-5 h-[5rem] flex justify-center items-center grid-cols-2 gap-2'>
                    <Button type='submit' className='bg-green-500 hover:bg-green-600 text-xs w-1/4' onClick={handleSubmit}>เพิ่มสถานที่พัก</Button>
                    <Button type='reset' className='bg-green-500 hover:bg-green-600 text-xs w-1/4' onClick={() => {
                        setForm({})
                        setHouse_image_1(null)
                        setHouse_image_2(null)
                        setHouse_image_3(null)
                    }}>รีเซ็ต</Button>
                </div>
            </div>
        </div>
    )
}