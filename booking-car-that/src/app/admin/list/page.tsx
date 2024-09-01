"use client";
import Sidebar from "@/app/_components/Admin/Sidebar/Sidebar";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

export default function List({}: Props) {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState(1);
  const [cre,setCre] = useState([])

  useEffect(() => {
    getCars();
    getReaturn_Car()
  }, []);
  
  const getReaturn_Car = async()=>{
    await fetch('/api/return_car')
    .then((res)=>res.json())
    .then((res)=>setCre(res))
  }

  const getCars = async () => {
    await fetch("/api/booking")
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Sidebar />
      <div className="h-full w-[82%] p-2">
        <div className="h-[10%] w-full p-2 flex justify-between">
          <div className="w-[20%] h-full flex justify-center items-center text-blue-500 ring-1 ring-blue-500 rounded-lg overflow-hidden">
            <select
              name="choice"
              className="w-full h-full"
              onChange={(e) => setSelect(Number(e.target.value))}
            >
              <option
                value={1}
                className="w-full h-full text-center  text-black"
              >
                ทั้งหมด
              </option>
              <option
                value={2}
                className="w-full h-full text-center  text-black"
              >
                คืนรถ
              </option>
            </select>
          </div>
          <div className="w-[20%] h-full flex justify-center items-center text-blue-500">
            จำนวนรายการจอง : {select===1?Object.keys(data).length:Object.keys(cre).length}
          </div>
        </div>
        {select === 1 && (
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-black">
                  <th scope="col" className="px-6 py-3 text-black font-normal">
                    รหัสการจอง
                  </th>
                  <th scope="col" className="px-6 py-3 text-black font-normal">
                    ยี่ห้อรถ
                  </th>
                  <th scope="col" className="px-6 py-3 text-black font-normal">
                    รุ่นรถ
                  </th>
                  <th scope="col" className="px-6 py-3 text-black font-normal">
                    ชื่อผู้จอง
                  </th>
                  <th scope="col" className="px-6 py-3 text-black font-normal">
                    วันที่รับรถ
                  </th>
                  <th scope="col" className="px-6 py-3 text-black font-normal">
                    วันที่คืนรถ
                  </th>
                  <th scope="col" className="px-6 py-3 text-black font-normal">
                    ราคา (฿)
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4 text-black text-xs">
                        {item["bid"]}
                      </td>
                      <td className="px-6 py-4 text-black text-xs">
                        {item["cbrand"]}
                      </td>
                      <td className="px-6 py-4 text-black text-xs">
                        {item["cmodel"]}
                      </td>
                      <td className="px-6 py-4 text-black text-xs">
                        {item["uname"]}
                      </td>
                      <td className="px-6 py-4 text-black text-xs">
                        {item["bdate_s"]}
                      </td>
                      <td className="px-6 py-4 text-black text-xs">
                        {item["bdate_e"]}
                      </td>
                      <td className="px-6 py-4 text-green-500 text-xs">
                        {item["cprice"]} ฿
                      </td>
                      <td className="px-6 py-4 text-black text-xs action">
                        <button className="mr-10 text-yellow-500">
                          <Link
                            href={`/admin/list/${item["bid"]}`}
                            className="h-full w-full"
                          >
                            ดูรายละเอียด
                          </Link>
                        </button>
                        <button className="text-red-500">ลบ</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {select === 2 && (
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-black">
                  <th scope="col" className="px-6 py-3 text-black font-normal">
                    รหัสการจอง
                  </th>
                  <th scope="col" className="px-6 py-3 text-black font-normal">
                    ยี่ห้อรถ
                  </th>
                  <th scope="col" className="px-6 py-3 text-black font-normal">
                    รุ่นรถ
                  </th>
                  <th scope="col" className="px-6 py-3 text-black font-normal">
                    ชื่อผู้จอง
                  </th>
                  <th scope="col" className="px-6 py-3 text-black font-normal">
                    วันที่รับรถ
                  </th>
                  <th scope="col" className="px-6 py-3 text-black font-normal">
                    วันที่คืนรถ
                  </th>
                  <th scope="col" className="px-6 py-3 text-black font-normal">
                    ราคา (฿)
                  </th>
                </tr>
              </thead>
              <tbody>
                {cre.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4 text-black text-xs">
                        {item["bid"]}
                      </td>
                      <td className="px-6 py-4 text-black text-xs">
                        {item["cbrand"]}
                      </td>
                      <td className="px-6 py-4 text-black text-xs">
                        {item["cmodel"]}
                      </td>
                      <td className="px-6 py-4 text-black text-xs">
                        {item["uname"]}
                      </td>
                      <td className="px-6 py-4 text-black text-xs">
                        {item["bdate_s"]}
                      </td>
                      <td className="px-6 py-4 text-black text-xs">
                        {item["bdate_e"]}
                      </td>
                      <td className="px-6 py-4 text-green-500 text-xs">
                        {item["cprice"]} ฿
                      </td>
                      <td className="px-6 py-4 text-black text-xs action">
                        <button className="mr-10 text-yellow-500">
                          <Link
                            href={`/admin/list/${item["bid"]}`}
                            className="h-full w-full"
                          >
                            ดูรายละเอียด
                          </Link>
                        </button>
                        <button className="text-red-500">ลบ</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
