"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

type Props = {};

export default function AddRestaurant({ }: Props) {
    const [form, setForm] = useState({})
    const [r_image_1, setR_image_1] = useState<String | null>('-');
    const [r_image_2, setR_image_2] = useState<String | null>('-');
    const [r_image_3, setR_image_3] = useState<String | null>('-');

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
        if (Object.keys(form).length === 0) {
            return alert('กรุณากรอกให้ครบข้อมูลใส่ถูกต้อง');
        } else {
            if (r_image_1 == '-') {
                return alert('ต้องการใส่รูปภาพ')
            } else {
                e.preventDefault()
                const dataForm = Object.assign({}, form, { r_image_1: r_image_1 }, { r_image_2: r_image_2 }, { r_image_3: r_image_3 })
                const res = await fetch(`/api/restaurant`, {
                    method: 'POST',
                    body: JSON.stringify(dataForm)
                })
                const response = await res.json()
                alert(String(response['massage']))
            }
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
        <div className="w-full h-full">
            <h1 className="border-b h-[8.5%] w-1/2 flex justify-start items-center p-2 text-xl font-light">
                ค่าเฟ่
            </h1>
            <div className="w-full h-fit my-[1rem] flex  justify-center items-center">
                <form className="h-fit w-[60%] shadow-2xl my-2 rounded-lg p-10" >
                    <li className="w-full h-fit my-2">ชื่อ</li>
                    <input onChange={handChanged} name="r_name" type="text" className="w-full h-[3rem] my-2 border rounded-lg outline-none px-2" placeholder="ชื่อคาเฟ่" />
                    <li className="w-full h-fit my-2">ที่อยู่</li>
                    <div className="py-2 w-full h-fit flex justify-between items-center">
                        <input onChange={handChanged} name="r_alley" type="text" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="ซอย" />
                        <input onChange={handChanged} name="r_road" type="text" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="ถนน" />
                    </div>
                    <div className="py-2 w-full h-fit flex justify-between items-center">
                        <input onChange={handChanged} name="r_subdistrict" type="text" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="ตำบล" />
                        <input onChange={handChanged} name="r_district" type="text" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="อำเภอ" />
                    </div>
                    <div className="py-2 w-full h-fit flex justify-between items-center">
                        <input onChange={handChanged} name="r_province" type="text" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="จังหวัด" />
                        <input onChange={handChanged} name="r_zip_code" type="text" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="รหัสไปรษณีย์" />
                    </div>
                    <div className="py-2 w-full h-fit flex justify-between items-center">
                        <input onChange={handChanged} name="r_url" type="text" className="w-full h-[3rem] border outline-none rounded-lg px-2" placeholder="URL แผนที่" />
                    </div>
                    <li className="w-full h-fit my-2">เวลาทำการ</li>
                    <div className="py-2 w-full h-fit flex justify-between items-center">
                        <input onChange={handChanged} name="r_open" type="time" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="เปิด" />
                        <input onChange={handChanged} name="r_closs" type="time" className="w-[49%] h-[3rem] border outline-none rounded-lg px-2" placeholder="ปิด" />
                    </div>
                    <li className="w-full h-fit my-2">คำแนะนำเชิญชวน</li>
                    <textarea onChange={handChanged} name="r_advice" className="w-full h-[10rem] border outline-none rounded-lg p-2" placeholder="คำแนะนำเชิญชวน"></textarea>
                    <li className="w-full h-fit my-2">รูปภาพ</li>
                    <div className="py-2 w-full h-fit flex justify-between items-center">
                        <Input onChange={handleFileChange_1} name="r_image_1" type="file" className="w-[33%] border outline-none flex justify-center items-center" />
                        <Input onChange={handleFileChange_2} name="r_image_2" type="file" className="w-[33%] border outline-none flex justify-center items-center" />
                        <Input onChange={handleFileChange_3} name="r_image_3" type="file" className="w-[33%] border outline-none flex justify-center items-center" />
                    </div>
                    <div className="w-full h-[5rem] flex items-center justify-around">
                        <button className="w-[33%] h-1/2 bg-blue-500 rounded-md text-white" onClick={() => history.back()}>กลับ</button>
                        <button className="w-[33%] h-1/2 bg-red-500 rounded-md text-white" type="reset" onClick={() => setForm({})}>รีเซ็ต</button>
                        <button className="w-[33%] h-1/2 bg-green-500 rounded-md text-white" type="submit" onClick={handleSubmit}>ยืนยัน</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
