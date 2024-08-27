"use client";
import React from "react";

type Props = {};

export default function Contact_cars({}: Props) {
  return (
    <div className="text-8xl flex justify-center items-center h-full w-full p-2">
      <div className="w-full h-full">
        <div className="border w-full h-1/4"></div>
        <div className="relative overflow-x-scroll w-full h-2/3 mt-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  รหัสรถ
                </th>
                <th scope="col" className="px-6 py-3">
                  ชื่อแบรนด์
                </th>
                <th scope="col" className="px-6 py-3">
                  ชื่อรุ่น
                </th>
                <th scope="col" className="px-6 py-3">
                  จำนวนที่งนั่ง
                </th>
                <th scope="col" className="px-6 py-3">
                  สีรถ
                </th>
                <th scope="col" className="px-6 py-3">
                  เลขป้ายทะเบียน
                </th>
                <th scope="col" className="px-6 py-3">
                  ราคา
                </th>
                <th scope="col" className="px-6 py-3">
                  ประเภทรถ
                </th>
                <th scope="col" className="px-6 py-3">
                  สถานะรถ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 cursor-pointer">
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">Nissan</td>
                <td className="px-6 py-4">GTR-35</td>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4 bg-black rounded-full"></td>
                <td className="px-6 py-4">1 กค อุบลราชธานี</td>
                <td className="px-6 py-4 text-green-500">2000฿</td>
                <td className="px-6 py-4">รถสปอร์ต</td>
                <td className="px-6 py-4 text-green-500">ว่าง</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
