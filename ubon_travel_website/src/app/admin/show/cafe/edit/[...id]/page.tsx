'use client'
import travelModule from '@/app/lib/globalApi'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'

type Props = any

interface Cafe {
    r_id: string,
    r_name: string,
    r_alley: string,
    r_road: string,
    r_subdistrict: string,
    r_district: string,
    r_province: string,
    r_zip_code: string,
    r_open: string,
    r_closs: string,
    r_image_1: string
    r_image_2: string
    r_image_3: string
    r_advice: string
    created_at: string
}

export default function EditCafe({ params }: Props) {
    const { id } = params
    const [dataCafe, setDataCafe] = useState<Cafe[]>([])
    const [form, setForm] = useState({ r_id: id[0] })
    const [r_image_1, setR_image_1] = useState<String | null>('');
    const [r_image_2, setR_image_2] = useState<String | null>('');
    const [r_image_3, setR_image_3] = useState<String | null>('');

    useEffect(() => {
        travelModule.getCafe().then(res => setDataCafe(res))
    }, [])

    const cafe = dataCafe.filter((item) => String(item.r_id) == String(id))



    const handChanged = (e: any) => {
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value,
            }
        )
        return
    }

    const handleSubmit = async (e: any) => {
        if (r_image_1 == '-') {
            return alert('ต้องการใส่รูปภาพ')
        } else {
            e.preventDefault()
            const dataForm = Object.assign(
                {},
                form,
                { r_image_1: r_image_1 == null || r_image_1 == '' ? cafe[0].r_image_1 : r_image_1 },
                { r_image_2: r_image_2 == null || r_image_2 == '' ? cafe[0].r_image_2 : r_image_2 },
                { r_image_3: r_image_3 == null || r_image_3 == '' ? cafe[0].r_image_3 : r_image_3 },)

            console.log(dataForm)
            const res = await fetch(`/api/restaurant`, {
                method: 'PUT',
                body: JSON.stringify(dataForm)
            })
            const response = await res.json()
            alert(String(response['massage']))
        }
        return
    }

    const handleFileChange_1 = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setR_image_1(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileChange_2 = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setR_image_2(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileChange_3 = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setR_image_3(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='w-full h-fit p-5 flex justify-center items-center'>
            {
                cafe.map((item, index) => {
                    return (
                        <form className="h-fit w-[60%] shadow-2xl my-2 rounded-lg p-10" key={index} method='POST'>
                            <li className="w-full h-fit my-2">ชื่อ</li>
                            <input onChange={handChanged} name="r_name" type="text" className="w-full h-[3rem] my-2 border rounded-lg outline-none px-2" placeholder="ชื่อคาเฟ่" defaultValue={item.r_name} />
                            <li className="w-full h-fit my-2">ที่อยู่</li>
                            <div className="py-2 w-full h-fit flex justify-between items-center">
                                <input onChange={handChanged} name="r_alley" type="text" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="ซอย" defaultValue={item.r_alley} />
                                <input onChange={handChanged} name="r_road" type="text" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="ถนน" defaultValue={item.r_road} />
                            </div>
                            <div className="py-2 w-full h-fit flex justify-between items-center">
                                <input onChange={handChanged} name="r_subdistrict" type="text" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="ตำบล" defaultValue={item.r_subdistrict} />
                                <input onChange={handChanged} name="r_district" type="text" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="อำเภอ" defaultValue={item.r_district} />
                            </div>
                            <div className="py-2 w-full h-fit flex justify-between items-center">
                                <input onChange={handChanged} name="r_province" type="text" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="จังหวัด" defaultValue={item.r_province} />
                                <input onChange={handChanged} name="r_zip_code" type="text" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="รหัสไปรษณีย์" defaultValue={item.r_zip_code} />
                            </div>
                            <div className="py-2 w-full h-fit flex justify-between items-center">
                                <input onChange={handChanged} name="r_url" type="text" className="w-full h-[3rem] border outline-none rounded-lg px-2" placeholder="URL แผนที่" defaultValue={item.r_zip_code} />
                            </div>
                            <li className="w-full h-fit my-2">เวลาทำการ</li>
                            <div className="py-2 w-full h-fit flex justify-between items-center">
                                <input onChange={handChanged} name="r_open" type="time" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="เปิด" defaultValue={item.r_open} />
                                <input onChange={handChanged} name="r_closs" type="time" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="ปิด" defaultValue={item.r_closs} />
                            </div>
                            <li className="w-full h-fit my-2">คำแนะนำเชิญชวน</li>
                            <textarea onChange={handChanged} name="r_advice" className="w-full h-[10rem] border outline-none rounded-lg p-2" placeholder="คำแนะนำเชิญชวน" defaultValue={item.r_advice}></textarea>
                            <li className="w-full h-fit my-2">รูปภาพ</li>
                            <div className="py-2 w-full h-fit flex justify-between items-center">
                                <Input onChange={handleFileChange_1} name="r_image_1" type="file" className="w-[33%] border outline-none flex justify-center items-center" />
                                <Input onChange={handleFileChange_2} name="r_image_2" type="file" className="w-[33%] border outline-none flex justify-center items-center" />
                                <Input onChange={handleFileChange_3} name="r_image_3" type="file" className="w-[33%] border outline-none flex justify-center items-center" />
                            </div>
                            <li className="w-full h-fit my-2">เวลาสร้างข้อมูล</li>
                            <div className="py-2 w-full h-fit flex justify-between items-center">
                                <input onChange={handChanged} type="text" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2 text-center" placeholder="เปิด" defaultValue={item.created_at} disabled />
                            </div>
                            <div className="w-full h-[5rem] flex items-center justify-around">
                                <button className="w-[33%] h-1/2 bg-green-500 rounded-md text-white" type="submit" onClick={handleSubmit}>ยืนยัน</button>
                                <button className="w-[33%] h-1/2 bg-red-500 rounded-md text-white"  onClick={async()=>{
                                    const res = await fetch('/api/restaurant',{
                                        method:'DELETE',
                                        body: JSON.stringify({r_id:item.r_id})
                                    })
                                    const resp = await res.json()
                                    alert(resp.massage)
                                    return history.back()
                                }}>ลบ</button>
                            </div>
                        </form>
                    )
                })
            }
        </div>
    )
}