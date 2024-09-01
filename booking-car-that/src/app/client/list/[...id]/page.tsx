"use client";
import Sidebar from "@/app/_components/Client/Sidebar/Sidebar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = any;

export default function List_id_Client({ params }: Props) {
  const { id } = params;
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    getCar();
  }, []);
  const getCar = () => {
    fetch("/api/booking")
      .then((res) => res.json())
      .then((res) => setBooking(res));
  };

  return (
    <div className="h-full w-full">
      {booking.map((item, index) => {
        if (item["bid"] == id) {
          return (
            <div
              key={index}
              className="w-full h-full flex justify-center items-center"
            >
              <Sidebar />
              <div className="w-[83%] h-full overflow-y-scroll text-gray-500 p-10">
                <div className="w-full h-32 text-white text-5xl flex justify-center items-center bg-green-500 rounded-lg">{item['sname']}</div>
                <div className=" h-[20rem] w-full overflow-hidden flex justify-around items-center">
                  <div className="w-fit h-fit rounded-lg overflow-hidden">
                    <Image
                      src={String(item['uprofile'])}
                      width={300}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="w-1/2 h-full rounded-lg">
                    <h1 className="h-16 text-black flex justify-center items-center text-3xl">
                      ข้อมูลผู้จอง
                    </h1>
                    <div className="w-full h-[80%]">
                      <div className="relative overflow-x-auto h-full">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-gray-400"
                              >
                                รหัสผู้จอง
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-gray-400"
                              >
                                ชื่อ-นามสกุล
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-gray-400"
                              >
                                เบอร์ติดต่อ
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-gray-400"
                              >
                                สิทธิ์
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
                              <td className="px-6 py-4 text-black text-xs">
                              {item['uid']}
                              </td>
                              <td className="px-6 py-4 text-black text-xs">
                                {item['uname']}
                              </td>
                              <td className="px-6 py-4 text-black text-xs">
                              {item['uphone']}
                              </td>
                              <td className="px-6 py-4 text-black text-xs">
                              {item['rname']}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[20rem] w-full mt-10 flex">
                  <h1 className="w-full h-full text-black flex justify-center items-center text-3xl">
                    ใบขับขี่
                  </h1>
                  <div className="w-full h-full overflow-hidden flex justify-center items-center">
                    <Image
                      src={item['udive']}
                      height={300}
                      width={300}
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className=" h-[20rem] w-full overflow-hidden flex justify-around items-center mt-10 ">
                  <div className="w-fit h-fit rounded-lg overflow-hidden">
                    <Image
                      src={item['cpath']}
                      width={300}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="w-[50%] h-full rounded-lg">
                    <h1 className="h-16 text-black flex justify-center items-center text-3xl">
                      ข้อมูลรถ
                    </h1>
                    <div className="w-full h-[80%]">
                      <div className="relative overflow-x-scroll h-full">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-gray-400"
                              >
                                รหัสรถ
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-gray-400"
                              >
                                ยี่ห้อ
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-gray-400"
                              >
                                รุ่น
                              </th>

                              <th
                                scope="col"
                                className="px-6 py-3 text-gray-400"
                              >
                                สี
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-gray-400"
                              >
                                ป้ายทะเบียน
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-gray-400"
                              >
                                ที่นั่ง
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-gray-400"
                              >
                                ราคา
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-gray-400"
                              >
                                ประเภทรถ
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
                              <td className="px-6 py-4 text-black text-xs">
                              {item['cid']}
                              </td>
                              <td className="px-6 py-4 text-black text-xs">
                              {item['cbrand']}
                              </td>
                              <td className="px-6 py-4 text-black text-xs">
                              {item['cmodel']}
                              </td>
                              <td className="px-6 py-4 text-black text-xs">
                              {item['ccolor']}
                              </td>
                              <td className="px-6 py-4 text-black text-xs">
                              {item['clicense']}
                              </td>
                              <td className="px-6 py-4 text-black text-xs">
                              {item['cseat']}
                              </td>
                              <td className="px-6 py-4 text-green-500 text-xs">
                              {item['cprice']}
                              </td>
                              <td className="px-6 py-4 text-black text-xs">
                              {item['tname']}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[10rem] w-full mt-10 flex justify-center items-center">
                  <div className="w-1/2 h-1/2 p-4 flex justify-around items-center">
                    <button
                      className="w-1/4 h-[2rem] text-white bg-yellow-500 rounded-lg active:scale-90 transition-all ease-in-out"
                      onClick={() => {
                        return history.back();
                      }}
                    >
                      กลับ
                    </button>
                    <button className="w-1/4 h-[2rem] text-white bg-red-500 rounded-lg active:scale-90 transition-all ease-in-out">
                      ลบ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
