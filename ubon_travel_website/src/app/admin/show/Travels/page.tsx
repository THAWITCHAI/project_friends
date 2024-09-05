"use client";
import travelModule from "@/app/lib/globalApi";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function AllUser({}: Props) {
  const [search, setSearch] = useState("");

  const data_demo = travelModule.getTravels();
  const result = data_demo.filter((item) => {
    return (
      item.travel_name.toUpperCase().includes(search.toUpperCase()) ||
      item.travel_district.toUpperCase().includes(search.toUpperCase()) ||
      item.travel_province.toUpperCase().includes(search.toUpperCase()) ||
      item.travel_time.toUpperCase().includes(search.toUpperCase()) ||
      item.travel_type.toUpperCase().includes(search.toUpperCase())
    );
  });

  return (
    <div>
      <div className="w-full h-[5rem] mb-5 flex justify-center items-start sticky top-0">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="outline-none border w-1/2 h-1/2 mr-4 rounded-lg p-2"
          placeholder="Search"
        />
        {/* <button className="bg-black text-white active:scale-90 h-1/2 w-[5rem] rounded-lg transition-all ease-in-out">
          Search
        </button> */}
      </div>
      <div className="w-full h-[29rem] overflow-x-scroll">
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
                  เวลา เปิด - ปิด
                </th>
                <th scope="col" className="px-6 py-3">
                  ประเภท
                </th>
                <th scope="col" className="px-6 py-3">
                  ตอบสนอง
                </th>
              </tr>
            </thead>
            <tbody>
              {search === "" &&
                data_demo.map((item, index) => {
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
                      <td className="px-6 py-4">{item.travel_name}</td>
                      <td className="px-6 py-4">{item.travel_province}</td>
                      <td className="px-6 py-4">{item.travel_district}</td>
                      <td className="px-6 py-4">{item.travel_time}</td>
                      <td className="px-6 py-4">{item.travel_type}</td>
                      <td className="px-6 py-4">
                        <button className="hover:bg-blue-500 w-[5rem] h-[2.5rem] bg-blue-400 text-white rounded-lg text-sm border-none active:scale-90 transition-all ease-in-out">
                          <Link href={`/admin/show/Travels/${item.travel_id}`} className="w-full h-full">
                            ดูเพิ่มเติม
                          </Link>
                        </button>
                        <button className="hover:bg-green-500 border-none active:scale-90 transition-all ease-in-out outline-none w-[5rem] h-[2.5rem] ml-2 bg-green-400 text-white rounded-lg text-sm">
                          <Link href={""} className="w-full h-full">
                            แก้ไข
                          </Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              {search !== "" &&
                result.map((item, index) => {
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
                      <td className="px-6 py-4">{item.travel_name}</td>
                      <td className="px-6 py-4">{item.travel_province}</td>
                      <td className="px-6 py-4">{item.travel_district}</td>
                      <td className="px-6 py-4">{item.travel_time}</td>
                      <td className="px-6 py-4">{item.travel_type}</td>
                      <td className="px-6 py-4">
                        <button className="hover:bg-blue-500 w-[5rem] h-[2.5rem] bg-blue-400 text-white rounded-lg text-sm border-none active:scale-90 transition-all ease-in-out">
                          <Link
                            href={`/admin/allTravels/${item.travel_id}`}
                            className="w-full h-full"
                          >
                            ดูเพิ่มเติม
                          </Link>
                        </button>
                        <button className="hover:bg-green-500 border-none active:scale-90 transition-all ease-in-out outline-none w-[5rem] h-[2.5rem] ml-2 bg-green-400 text-white rounded-lg text-sm">
                          <Link href={""} className="w-full h-full">
                            แก้ไข
                          </Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
