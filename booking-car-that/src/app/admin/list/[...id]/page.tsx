'use client'
import Sidebar from "@/app/_components/Admin/Sidebar/Sidebar";
import Image from "next/image";
import React from "react";

type Props = any;

export default function List_id({
  params,
}: Props): React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  const { id } = params;
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Sidebar />
      <div className="w-[82%] h-full overflow-y-scroll text-gray-500 p-10">
        <div className=" h-[20rem] w-full overflow-hidden flex justify-around items-center">
          <div className="w-fit h-fit rounded-lg overflow-hidden">
            <Image src={"/profile.jpg"} width={300} height={500} alt="" />
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
                      <th scope="col" className="px-6 py-3 text-gray-400">
                        รหัสผู้จอง
                      </th>
                      <th scope="col" className="px-6 py-3 text-gray-400">
                        ชื่อ-นามสกุล
                      </th>
                      <th scope="col" className="px-6 py-3 text-gray-400">
                        เบอร์ติดต่อ
                      </th>
                      <th scope="col" className="px-6 py-3 text-gray-400">
                        สิทธิ์
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-6 py-4 text-black text-xs">1</td>
                      <td className="px-6 py-4 text-black text-xs">
                        ธวิชชัย บุญส่ง
                      </td>
                      <td className="px-6 py-4 text-black text-xs">
                        0652974104
                      </td>
                      <td className="px-6 py-4 text-black text-xs">User</td>
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
              src={"/profile.jpg"}
              height={300}
              width={300}
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
        <div className=" h-[20rem] w-full overflow-hidden flex justify-around items-center mt-10 ">
          <div className="w-fit h-fit rounded-lg overflow-hidden">
            <Image src={"/profile.jpg"} width={300} height={500} alt="" />
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
                      <th scope="col" className="px-6 py-3 text-gray-400">
                        รหัสรถ
                      </th>
                      <th scope="col" className="px-6 py-3 text-gray-400">
                        ยี่ห้อ
                      </th>
                      <th scope="col" className="px-6 py-3 text-gray-400">
                        รุ่น
                      </th>

                      <th scope="col" className="px-6 py-3 text-gray-400">
                        สี
                      </th>
                      <th scope="col" className="px-6 py-3 text-gray-400">
                        ป้ายทะเบียน
                      </th>
                      <th scope="col" className="px-6 py-3 text-gray-400">
                        ที่นั่ง
                      </th>
                      <th scope="col" className="px-6 py-3 text-gray-400">
                        ราคา
                      </th>
                      <th scope="col" className="px-6 py-3 text-gray-400">
                        ประเภทรถ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-6 py-4 text-black text-xs">1</td>
                      <td className="px-6 py-4 text-black text-xs">Nissan</td>
                      <td className="px-6 py-4 text-black text-xs">GTR-35</td>
                      <td className="px-6 py-4 text-black text-xs">#fff</td>
                      <td className="px-6 py-4 text-black text-xs">
                        15 KA Liver
                      </td>
                      <td className="px-6 py-4 text-black text-xs">6</td>
                      <td className="px-6 py-4 text-black text-xs">1500</td>
                      <td className="px-6 py-4 text-black text-xs">Sport</td>
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
              className="w-1/4 h-[2rem] text-white bg-green-500 rounded-lg active:scale-90 transition-all ease-in-out"
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
