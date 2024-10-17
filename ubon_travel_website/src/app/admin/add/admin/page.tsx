'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import { toast } from 'sonner'

type Props = object

export default function CreateAdmin({ }: Props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<InputEvent>) => {
        e.preventDefault()
        if (password.length < 8 || confirmPassword.length < 8) {
            toast("Password ต้องมีอย่างน้อย 8 ตัวอักษร", {
                action: {
                    label: 'Undo'
                }
            })
            return
        }
        if (password != confirmPassword) {
            toast("รหัสผ่านไม่ตรงกัน!!", {
                action: {
                    label: 'Undo'
                }
            })
            return
        }

        const res = await fetch(`/api/users`, {
            method: 'POST',
            body: JSON.stringify({ name: name, email: email, password: password, role: 1 }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.ok) {
            toast("เสร็จสิ้น", {
                action: {
                    label: 'Undo'
                }
            })
            setName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            return router.push('/admin/show/users')
        }

        return
    }
    return (
        <div className='w-full h-fit py-5 flex justify-center items-center'>
            <form method='post' className='w-[40%] shadow-md p-5 flex flex-col justify-center items-center gap-4'>
                <h1 className='w-full text-center text-2xl'>เพิ่มผู้ดูแลระบบ</h1>
                <p className='text-slate-500'>กรุณากรอกข้อมูลให้ครบก่อนกดเพิ่มข้อมูล</p>
                <input value={name} onChange={(e) => setName(e.target.value)} required type="text" className='w-full outline-none border rounded-md h-[3rem] px-3 text-slate-500' placeholder='ชื่อ' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" className='w-full outline-none border rounded-md h-[3rem] px-3 text-slate-500' placeholder='อีเมล์' />
                <div className='w-full flex justify-center items-center gap-4'>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" className='w-full outline-none border rounded-md h-[3rem] px-3 text-slate-500' placeholder='รหัสผ่าน' />
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required type="password" className='w-full outline-none border rounded-md h-[3rem] px-3 text-slate-500' placeholder='ยืนยันรหัสผ่าน' />
                </div>
                <Button onClick={handleSubmit} disabled={!(name && email && password && confirmPassword)} className='w-1/2 h-[3rem] bg-blue-500 rounded-md text-white text-lg hover:bg-blue-600'>เพิ่มข้อมูล</Button>
            </form>
        </div>
    )
}