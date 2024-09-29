'use client'
import travelModule from '@/app/lib/globalApi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = any

interface Edit {
    id: string
    name: string
    alley: string
    road: string
    subdistrict: string
    district: string
    province: string
    zip_code: string
    url: string
    image_1: string
    image_2: string
    image_3: string
    create: string
    email: string
    phone_number: string
    background: string
}

export default function Edit_House({ params }: Props) {
    const router = useRouter()
    const { id } = params
    const [data, setData] = useState<Edit[]>([])

    useEffect(() => {
        travelModule.getHouse().then(res => setData(res))
    }, [])

    const filterData = data.filter((item) => item.id == String(id))


    const [form, setForm] = useState({ id: id[0] })
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
        const data = Object.assign(
            {},
            form,
            {
                image_1: house_image_1 == null || house_image_1 == '' ? filterData[0].image_1 : house_image_1,
                image_2: house_image_2 == null || house_image_2 == '' ? filterData[0].image_2 : house_image_2,
                image_3: house_image_3 == null || house_image_3 == '' ? filterData[0].image_3 : house_image_3
            }
        )
        console.log(data)
        const res = await fetch('/api/house', {
            method: 'PUT',
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
        <div className='w-full h-fit p-10 flex justify-center items-center'>
            {filterData.map((item, index) => {
                return (
                    <div key={index} className='w-[40%] shadow-md h-fit p-5 m-5'>
                        <h1 className='w-full text-center text-3xl py-4'>แก้ไขข้อมูล</h1>
                        <li className='my-5'>ชื่อสถานที่พัก</li>
                        <input required onChange={handleChange} name='name' type="text" className='border w-full h-[2.5rem] rounded-lg outline-none px-4' placeholder='ชื่อ' defaultValue={item.name} />
                        <li className='my-5'>ที่อยู่</li>
                        <div className='grid grid-cols-2 gap-2'>
                            <input required onChange={handleChange} name='province' type="text" placeholder='จังหวัด' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' defaultValue={item.province} />
                            <input required onChange={handleChange} name='district' type="text" placeholder='อำเภอ' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' defaultValue={item.district} />
                            <input required onChange={handleChange} name='subdistrict' type="text" placeholder='ตำบล' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' defaultValue={item.subdistrict} />
                            <input required onChange={handleChange} name='road' type="text" placeholder='ถนน' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' defaultValue={item.road} />
                            <input required onChange={handleChange} name='alley' type="text" placeholder='ซอย/ตรอก' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' defaultValue={item.alley} />
                            <input required onChange={handleChange} name='zip_code' type="text" placeholder='รหัสไปรษณีย์' className='border px-2 w-full h-[2.5rem] rounded-lg outline-none' defaultValue={item.zip_code} />
                        </div>
                        <li className='my-5'>ติดต่อ</li>
                        <div className='grid grid-cols-2 gap-2'>
                            <input required onChange={handleChange} name='email' type="email" placeholder='อีเมล์' className='border w-full h-[2.5rem]  rounded-lg outline-none p-2' defaultValue={item.email} />
                            <input required onChange={handleChange} name='phone_number' type="text" placeholder='เบอร์โทรศัพท์' className='border w-full h-[2.5rem]  rounded-lg outline-none p-2' defaultValue={item.phone_number} />
                        </div>
                        <li className='my-5'>ที่ตั้งบนแผนที่</li>
                        <input required onChange={handleChange} name='url' type="url" placeholder='URL' className='border w-full h-[2.5rem]  rounded-lg outline-none p-2' defaultValue={item.url} />
                        <li className='my-5'>คำแนะนำที่พัก</li>
                        <textarea onChange={handleChange} name="background" className='w-full border h-[5rem] p-2 outline-none rounded-lg' placeholder='คำแนะนำพอสังเขป' defaultValue={item.background}></textarea>
                        <li className='my-5'>รูปภาพแนะนำ</li>
                        <div className='w-full h-[5rem] p-2 grid grid-cols-3 gap-2 justify-center items-center'>
                            <Input required onChange={handleFileChange_1} name="image_1" type="file" className="w-full border outline-none flex justify-center items-center" />
                            <Input onChange={handleFileChange_2} name="image_2" type="file" className="w-full border outline-none flex justify-center items-center" />
                            <Input onChange={handleFileChange_3} name="image_3" type="file" className="w-full border outline-none flex justify-center items-center" />
                        </div>
                        <li className='my-5'>วันที่สร้าง</li>
                        <div className='grid grid-cols-2 gap-2'>
                            <input name='province' type="text" className='border px-2 w-full h-[2.5rem] rounded-lg outline-none text-center' disabled defaultValue={item.create} />
                        </div>
                        <div className='w-full my-5 h-[5rem] flex justify-center items-center grid-cols-2 gap-2'>
                            <Button type='submit' className='bg-green-500 hover:bg-green-600 text-xs w-1/4' onClick={(e) => {
                                // e.preventDefault()
                                handleSubmit()
                            }}>อัพเดท</Button>
                            <Button type='reset' className='bg-red-500 hover:bg-red-600 text-xs w-1/4' onClick={async () => {
                                const res = await fetch(`/api/house/`, {
                                    method: 'DELETE',
                                    body: JSON.stringify({ id: item.id })
                                })
                                if (res.ok) {
                                    const resp = await res.json()
                                    return router.replace('/admin/show/House')
                                }
                            }}>ลบ</Button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}