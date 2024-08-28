import Sidebar from '@/app/_components/Admin/Sidebar/Sidebar'
import Alluser from '@/app/_components/Admin/Users/allUser/Alluser'
import React from 'react'

type Props = {}

export default function AlluserPage({}: Props) {
  return (
    <div className='main'>
        <Sidebar/>
        <Alluser/>
    </div>
  )
}