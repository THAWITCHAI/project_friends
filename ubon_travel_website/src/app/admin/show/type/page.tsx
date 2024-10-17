'use client'
import travelModule from '@/app/lib/globalApi'
import React, { useEffect, useState } from 'react'

type Props = {}
interface TypeData {
    type_travel_id: string
    type_travel_name: string
    type_create: string
}
export default function Type_Show({ }: Props) {
    const [typeTravel, setType] = useState<TypeData[]>([])

    const getType = () => {
        travelModule.getTypeTravels().then(res => setType(res))
        return
    }

    useEffect(() => {
        getType()
    }, [])
    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                รหัสประเภท
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ชื่อ
                            </th>
                            <th scope="col" className="px-6 py-3">
                                วันสร้าง
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            typeTravel.map((item, index) => {
                                return (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index + 1}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.type_travel_id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.type_travel_name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.type_create}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className='w-1/2 bg-red-500 h-[2rem] rounded-md text-white' onClick={async () => {
                                                const res = await fetch(`/api/type_travels`, {
                                                    method: 'DELETE',
                                                    body: JSON.stringify({ type_travel_id: item.type_travel_id })
                                                })
                                                if(res.ok){
                                                    const resp = await res.json()
                                                    alert(resp['massage'])
                                                }
                                                getType()
                                                return
                                            }}>ลบ</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}