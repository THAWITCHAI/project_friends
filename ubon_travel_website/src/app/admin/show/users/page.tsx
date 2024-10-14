'use client'
import Link from 'next/link';
import React, { useEffect } from 'react'

type Props = {}

interface UserAll {
    id: nmber,
    name: string,
    email: string,
    role: string
}

export default function User({ }: Props) {

    const [users, setUsers] = React.useState<UserAll[]>([]);

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const res = await fetch('/api/users')
            .then((res) => res.json())
            .then((res) => setUsers(res))
    }

    return (
        <div className='w-full'>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                No.
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Role Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index) => (
                                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index + 1}
                                    </th>
                                    <td class="px-6 py-4">
                                        {item.id}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.email}
                                    </td>
                                    <td class="px-6 py-4">
                                        {String(item.role) == '1' ? "Admin" : 'User'}
                                    </td>
                                    {
                                        item.id == 1 ? (
                                            <td class="px-6 py-4">
                                                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                                                    <Link href={`/admin/show/users/${item.id}`}>Edit</Link>
                                                </button>
                                                <button className="px-4 py-2 ml-2 bg-red-500 hover:bg-red-600 text-white rounded-md" onClick={async () => {
                                                    const res = await fetch(`/api/users/${item.id}`, {
                                                        method: 'DELETE',
                                                    })
                                                    if (res.ok) {
                                                        const resp = await res.json()
                                                        alert(resp['massage'])
                                                        getUser()
                                                        return
                                                    }
                                                }}>Delete</button>
                                            </td>
                                        ) :
                                            <td class="px-6 py-4" onClick={async () => {
                                                const res = await fetch(`/api/users/${item.id}`, {
                                                    method: 'DELETE',
                                                })
                                                if (res.ok) {
                                                    const resp = await res.json()
                                                    alert(resp['massage'])
                                                    getUser()
                                                    return
                                                }
                                            }}>

                                                <button className="px-4 py-2 ml-2 bg-red-500 hover:bg-red-600 text-white rounded-md">Delete</button>
                                            </td>
                                    }:
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}