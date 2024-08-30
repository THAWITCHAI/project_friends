"use client";
import React, { useEffect, useState } from "react";
import "./stlye.css";
import "./reponsive.css";
import { useSession } from "next-auth/react";
type Props = {};

export default function List({}: Props) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    fetch("/api/booking")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        const userBookings = res.filter(
          (item: any) => item["uid"] === session?.user.uid
        );
        setCount(userBookings.length);
      });
  }, [session]);

  const reCar = async (data: any) => {
    const res = await fetch("/api/list", {
      method: "UPDATE",
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const response = await res.json();
      alert(response['massage'])
    }
  };

  return (
    <div className="List">
      <div className="list-contact">
        <div className="list-header">
          <div className="list-count">
            <button className="btn">จำนวนทั้งหมด: {count}</button>
          </div>
        </div>
        <div className="list-table">
          <div className="table">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="text-black">
                    <th
                      scope="col"
                      className="px-6 py-3 text-black font-normal"
                    >
                      รหัสการจอง
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-black font-normal"
                    >
                      ยี่ห้อรถ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-black font-normal"
                    >
                      รุ่นรถ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-black font-normal"
                    >
                      ชื่อผู้จอง
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-black font-normal"
                    >
                      วันที่รับรถ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-black font-normal"
                    >
                      วันที่คืนรถ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-black font-normal"
                    >
                      ราคา (฿)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    if (item["uid"] === session?.user.uid) {
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
                            <button
                              className="detail mx-2 bg-blue-500"
                              onClick={() => {
                                const req = prompt("หมายเหตุ");
                                if (req) {
                                  const return_data = {
                                    bid: item["sid"],
                                    cid: item["cid"],
                                    bnot: req,
                                  };
                                  reCar(return_data);
                                } else {
                                  console.log("Hum");
                                }
                              }}
                            >
                              คืนรถ
                            </button>
                            <button className="detail bg-red-500">
                              รายละเอียด
                            </button>
                          </td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
