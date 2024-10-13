'use client'
import Sidebar from '@/app/_components/Admin/Sidebar/Sidebar'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useEffect, useState } from 'react'

type Props = object

export default function EditCar({ params }: Props) {
    const { id } = params
    const [data, setData] = useState([])
    const [TypeCar, setTypeCar] = useState([])
    const [status, setStatus] = useState([])
    const [form, setForm] = useState({})

    useEffect(() => {
        getCar()
        getTypeCar()
        getStatus()
    }, [])

    const getCar = () => {
        fetch('/api/car')
            .then((res) => res.json())
            .then((res) => setData(res))
    }
    const getTypeCar = () => {
        fetch('/api/type_car')
            .then((res) => res.json())
            .then((res) => setTypeCar(res))
    }
    const getStatus = () => {
        fetch('/api/status')
            .then((res) => res.json())
            .then((res) => setStatus(res))
    }


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const updateCar = async (id: string) => {
        console.log(form)
        const res = await fetch('/api/car', {
            method: 'PUT',
            body: JSON.stringify(Object.assign({}, form, { cid: id }))
        })
        if (res.ok) {
            const resp = await res.json()
            alert(resp['massage'])
            getCar()
            return
        }
        return
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
                                <input name='cid' type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='ID' defaultValue={item['cid']} disabled />
                                <label className='w-[5rem] text-start text-black'>Brand</label>
                                <input name='cbrand' onChange={handleChange} type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='Brand' defaultValue={item['cbrand']} />
                            </div>
                            <div className='w-full flex justify-center items-center gap-2'>
                                <label className='w-[5rem] text-start text-black'>Model</label>
                                <input name='cmodel' onChange={handleChange} type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='Model' defaultValue={item['cmodel']} />
                                <label className='w-[5rem] text-start text-black'>Seat</label>
                                <input name='cseat' onChange={handleChange} type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='Seat' defaultValue={item['cseat']} />
                            </div>
                            <div className='w-full flex justify-center items-center gap-2'>
                                <label className='w-[5rem] text-start text-black'>Color</label>
                                <input name='ccolor' onChange={handleChange} type="color" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='Color' defaultValue={item['ccolor']} />
                                <label className='w-[5rem] text-start text-black'>Lincense</label>
                                <input name='clincense' onChange={handleChange} type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='Brand' defaultValue={item['clicense']} />
                            </div>
                            <div className='w-full flex justify-center items-center gap-2'>
                                <label className='w-[5rem] text-start text-black'>File</label>
                                <input name='cpath' type="file" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='ID' />
                                <label className='w-[5rem] text-start text-black'>Status</label>
                                <select defaultValue={item['sid']} name="sid" onChange={handleChange} id="" className='w-1/2 h-[2.5rem] rounded-md border text-black'>
                                    <option className='text-black' value="0">Select Status</option>
                                    {
                                        status.map((sc, index) => (
                                            <option key={index} className='text-black' value={sc['sid']}>{sc['sname']}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='w-full flex justify-center items-center gap-2'>
                                <label className='w-[5rem] text-start text-black'>Price</label>
                                <input name='cprice' onChange={handleChange} type="text" className='w-1/2 border h-[2.5rem] rounded-md outline-none px-2 text-black' placeholder='Price' defaultValue={item['cprice']} />
                                <label className='w-[5rem] text-start text-black'>Type Car</label>
                                <select onChange={handleChange} defaultValue={String(item['tid'])} name="tid" className='w-1/2 h-[2.5rem] rounded-md border text-black'>
                                    <option className='text-black' value="">Select Type</option>
                                    {
                                        TypeCar.map((type, index) => (
                                            <option key={index} className='text-black' value={String(type['tid'])}>{type['tname']}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='w-full flex justify-center items-center gap-2'>
                                <button className='text-white w-1/4 bg-red-500 rounded-md h-[2rem]' onClick={() => history.back()}>ยกเลิก</button>
                                <button className='text-white w-1/4 bg-blue-500 rounded-md h-[2rem]' onClick={() => updateCar(item['cid'])}>อัพเดท</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}