'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {}

export default function Home({ }: Props) {
    const router = useRouter();
    const { data: session, status } = useSession();

    return (
        <div className=''>
            <div className='w-full h-[3rem] shadow-lg flex justify-between px-10 items-center'>
                <h1 className='text-blue-500 text-xl font-medium'>Booking Cars</h1>
                <Link href={'/login'}>
                    <button className='text-white w-[5rem] rounded-sm h-full bg-blue-500'>Login</button>
                </Link>
            </div>
            <div className='w-full h-[32rem] my-5 text-black flex justify-center items-center'>
                <h1 className='text-black text-5xl'>Welcome To Website Booking Cars</h1>
            </div>
        </div>
    )
}