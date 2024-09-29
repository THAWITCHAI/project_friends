'use client'
import travelModule from '@/app/lib/globalApi'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}
interface Cafe {
  id: number,
  name: string,
  alley: string,
  road: string,
  subdistrict: string,
  district: string,
  province: string,
  zip_code: string,
  image_1: string
  image_2: string
  image_3: string
  create: string
}

export default function House({ }: Props) {
  const [data, setData] = useState<Cafe[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    travelModule.getHouse().then(res => setData(res));
  }, []);

  const searchData = data.filter((item) => {
    return (
      (item.name && item.name.includes(search.toUpperCase())) ||
      (item.province && item.province.includes(search.toUpperCase())) ||
      (item.district && item.district.includes(search.toUpperCase())) ||
      (item.subdistrict && item.subdistrict.includes(search.toUpperCase()))
    )
  })
  if (data.length == 0) {
    return (
      <div className="w-full h-full text-5xl flex justify-center items-center">ไม่มีข้อมูล</div>
    )
  }

  return (
    <div>
      <div className="w-full h-[5rem] mb-5 flex justify-center items-start sticky top-0">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="outline-none border w-1/2 h-1/2 mr-4 rounded-lg p-2"
          placeholder="Search"
        />
      </div>
      <div className="w-full h-[29rem] overflow-y-scroll scrollbar-hide">
        <div className="relative">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ลำดับ
                </th>
                <th scope="col" className="px-6 py-3">
                  ชื่อสถานที่
                </th>
                <th scope="col" className="px-6 py-3">
                  จังหวัด
                </th>
                <th scope="col" className="px-6 py-3">
                  อำเภอ
                </th>
                <th scope="col" className="px-6 py-3">
                  ตำบล
                </th>
                <th scope="col" className="px-6 py-3">
                  เวลาสร้าง
                </th>
                <th scope="col" className="px-6 py-3">
                  ตอบสนอง
                </th>
              </tr>
            </thead>
            <tbody>
              {search == '' && (
                data.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.province}</td>
                      <td className="px-6 py-4">{item.district}</td>
                      <td className="px-6 py-4">{item.subdistrict}</td>
                      <td className="px-6 py-4">{item.create}</td>
                      <td className="px-6 py-4">
                        <button className="hover:bg-blue-500 w-[5rem] h-[2.5rem] bg-blue-400 text-white rounded-lg text-sm border-none active:scale-90 transition-all ease-in-out">
                          <Link
                            href={`/admin/show/House/${item.id}`}
                            className="w-full h-full"
                          >
                            ดูเพิ่มเติม
                          </Link>
                        </button>
                        <button className="hover:bg-green-500 border-none active:scale-90 transition-all ease-in-out outline-none w-[5rem] h-[2.5rem] ml-2 bg-green-400 text-white rounded-lg text-sm">
                          <Link href={`/admin/show/House/edit/${item.id}`} className="w-full h-full">
                            แก้ไข
                          </Link>
                        </button>
                      </td>
                    </tr>
                  )
                })
              )}
              {search != '' && (
                searchData.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.province}</td>
                      <td className="px-6 py-4">{item.district}</td>
                      <td className="px-6 py-4">{item.subdistrict}</td>
                      <td className="px-6 py-4">{item.create}</td>
                      <td className="px-6 py-4">
                        <button className="hover:bg-blue-500 w-[5rem] h-[2.5rem] bg-blue-400 text-white rounded-lg text-sm border-none active:scale-90 transition-all ease-in-out">
                          <Link
                            href={`/admin/show/House/${item.id}`}
                            className="w-full h-full"
                          >
                            ดูเพิ่มเติม
                          </Link>
                        </button>
                        <button className="hover:bg-green-500 border-none active:scale-90 transition-all ease-in-out outline-none w-[5rem] h-[2.5rem] ml-2 bg-green-400 text-white rounded-lg text-sm">
                          <Link href={``} className="w-full h-full">
                            แก้ไข
                          </Link>
                        </button>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}