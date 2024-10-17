'use client'
import React, { useEffect, useState } from 'react'

type Props = object
interface UserAll {
    name: string;
    email: string;
    password: string;
}
export default function UpdateUser({ params }: Props) {
    const { id } = params
    const [form, setForm] = useState({})
    const [data, setData] = useState<UserAll[]>([])

    useEffect(() => {
        fetch(`/api/users/${id}`)
            .then(res => res.json())
            .then(data => setData([data]))
    }, [id])



    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        await fetch(`/api/users/${id[0]}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
        alert('แก้ไขข้อมูลสำเร็จ')
        return
    }
    console.log(data)
    return (
        <div className='w-full p-2 flex justify-center items-center'>
            {
                data.map((item, index) => (
                    <div key={index} className='shadow-md w-[40%] p-5 flex justify-center items-center flex-col gap-3'>
                        <h1 className='text-center text-xl'>แก้ไขข้อมูลส่วนตัว</h1>
                        <li className='w-full'>ชื่อ</li>
                        <input name='name' onChange={handleChange} type='text' className='border outline-none rounded-md px-2 h-[3rem] w-full' placeholder='ชื่อ' defaultValue={item[0].name} />
                        <li className='w-full'>อีเมล์</li>
                        <input name='email' onChange={handleChange} type='email' className='border outline-none rounded-md px-2 h-[3rem] w-full' placeholder='อีเมล์' defaultValue={item[0].email} />
                        <li className='w-full'>รหัสผ่าน</li>
                        <input name='password' onChange={handleChange} type='password' className='border outline-none rounded-md px-2 h-[3rem] w-full' placeholder='รหัสผ่าน' defaultValue={item[0].password} />
                        <button onClick={handleSubmit} className='w-full h-[3rem] bg-blue-500 rounded-md text-white'>
                            Update
                        </button>
                    </div>
                ))
            }
        </div>
    )
}