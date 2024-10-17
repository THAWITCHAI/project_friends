'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { ChangeEvent, useState } from 'react'

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


    const handleFileChange_1 = (event: any) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setHouse_image_1(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileChange_2 = (event: any) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setHouse_image_2(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileChange_3 = (event: any) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setHouse_image_3(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        if (Object.keys(form).length == 0 || house_image_1 == null) {
            return alert('กรุณากรอกให้ครบข้อมูลใส่ถูกต้อง')
        }
        const data = Object.assign({}, form, { image_1: house_image_1, image_2: house_image_2, image_3: house_image_3 })
        const res = await fetch('/api/house', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res.status === 200) {
            const resp = await res.json()
            return alert(resp.massage)
        }
        return
    }
    return (
        <div className='w-full h-fit flex flex-col items-center justify-center'>
            <h1 className="border-b h-[8.5%] w-full flex justify-start items-center p-2 text-xl font-light">
                สถานที่พัก
            </h1>
            <form method='post' className='shadow-lg my-5 p-5 w-[70%] h-fit'>
                <li className='my-5'>ชื่อสถานที่พัก</li>
                <input required onChange={handleChange} name='name' type="text" className='border w-full h-[2.5rem] rounded-lg outline-none px-4' placeholder='ชื่อ' />
                <li className='my-5'>ที่อยู่</li>
                <div className='grid grid-cols-2 gap-2'>
                    <input required onChange={handleChange} name='province' type="text" placeholder='จังหวัด' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' />
                    <input required onChange={handleChange} name='district' type="text" placeholder='อำเภอ' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' />
                    <input required onChange={handleChange} name='subdistrict' type="text" placeholder='ตำบล' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' />
                    <input required onChange={handleChange} name='road' type="text" placeholder='ถนน' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' />
                    <input required onChange={handleChange} name='alley' type="text" placeholder='ซอย/ตรอก' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' />
                    <input required onChange={handleChange} name='zip_code' type="text" placeholder='รหัสไปรษณีย์' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' />
                </div>
                <li className='my-5'>ติดต่อ</li>
                <div className='grid grid-cols-2 gap-2'>
                    <input required onChange={handleChange} name='email' type="email" placeholder='อีเมล์' className='border w-full h-[2.5rem]  rounded-lg outline-none p-2' />
                    <input required onChange={handleChange} name='phone_number' type="text" placeholder='เบอร์โทรศัพท์' className='border w-full h-[2.5rem]  rounded-lg outline-none p-2' />
                </div>
                <li className='my-5'>ที่ตั้งบนแผนที่</li>
                <input required onChange={handleChange} name='url' type="url" placeholder='URL' className='border w-full h-[2.5rem]  rounded-lg outline-none p-2' />
                <li className='my-5'>คำแนะนำที่พัก</li>
                <textarea onChange={handleChange} name="background" className='w-full border h-[5rem] p-2 outline-none rounded-lg' placeholder='คำแนะนำพอสังเขป'></textarea>
                <li className='my-5'>รูปภาพแนะนำ</li>
                <div className='w-full h-[5rem] p-2 grid grid-cols-3 gap-2 justify-center items-center'>
                    <Input required onChange={handleFileChange_1} name="image_1" type="file" className="w-full border outline-none flex justify-center items-center" />
                    <Input onChange={handleFileChange_2} name="image_2" type="file" className="w-full border outline-none flex justify-center items-center" />
                    <Input onChange={handleFileChange_3} name="image_3" type="file" className="w-full border outline-none flex justify-center items-center" />
                </div>
                <div className='w-full my-5 h-[5rem] flex justify-center items-center grid-cols-2 gap-2'>
                    <Button type='submit' className='bg-green-500 hover:bg-green-600 text-xs w-1/4' onClick={(e) => {
                        // e.preventDefault()
                        handleSubmit()
                    }}>เพิ่มสถานที่พัก</Button>
                    <Button type='reset' className='bg-red-500 hover:bg-red-600 text-xs w-1/4' onClick={() => {
                        setForm({})
                        setHouse_image_1(null)
                        setHouse_image_2(null)
                        setHouse_image_3(null)
                    }}>รีเซ็ต</Button>
                </div>
            </form>
        </div>
    )
}