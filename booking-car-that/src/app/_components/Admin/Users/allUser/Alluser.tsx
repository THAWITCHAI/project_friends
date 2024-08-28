"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
type Props = {};

export default function Alluser({}: Props) {
  const [select, setSelect] = useState(1);
  const [dataRole, setDataRole] = useState([]);
  const [dataUer, setDataUser] = useState([]);

  const getDataRole = () => {
    fetch("/api/role")
      .then((res) => res.json())
      .then((res: any) => setDataRole(res));
  };

  const getDataUser = async () => {
    await fetch("/api/user")
      .then((res) => res.json())
      .then((res) => setDataUser(res));
  };

  useEffect(() => {
    getDataRole();
    getDataUser();
  }, []);

  const handleDeteleRole = (id: any) => {
    fetch("/api/role", {
      method: "DELETE",
      body: JSON.stringify({ rid: id }),
    })
      .then((res) => res.json())
      .then((res) => alert(res["massage"]));
  };

  const handleDeteleUser = (id: any) => {
    fetch("/api/user", {
      method: "DELETE",
      body: JSON.stringify({ uid: id }),
    })
      .then((res) => res.json())
      .then((res) => alert(res["massage"]));
  };
  return (
    <div className="all-user">
      <div className="box-count">
        <div className="h1">
          <select
            name=""
            id=""
            className="h-full w-3/5 rounded-xl outline-none"
            onChange={(e) => setSelect(Number(e.target.value))}
          >
            <option value={1} className="text-center text-[#1B98E0]">
              กรุณาเลือก
            </option>
            <option value={2} className="text-center text-[#1B98E0]">
              ผู้ใช้
            </option>
            <option value={3} className="text-center text-[#1B98E0]">
              บทบาท
            </option>
          </select>
        </div>
        {select == 2 && (
          <div className="h1">จำนวนทั้งหมด: {Object.keys(dataUer).length}</div>
        )}
        {select == 3 && (
          <div className="h1">จำนวนทั้งหมด: {Object.keys(dataRole).length}</div>
        )}
      </div>
      {select == 2 ? (
        <div className="box-table">
          <div className="relative overflow-x-auto table-user">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-black">
                    รหัสผู้ใช้
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    ชื่อ - นามสุกล
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    ชื่อเล่น
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    อีเมล
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    เบอร์โทร
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    บทบาท
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    ตอบสนอง
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataUer.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 box-tr"
                    >
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["uid"]}
                      </td>
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["uname"]}
                      </td>
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["unick_name"]}
                      </td>
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["uemail"]}
                      </td>
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-green-500 whitespace-nowrap dark:text-white"
                      >
                        {item["uphone"]}
                      </td>
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["rname"]}
                      </td>
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <Link href={"/admin/user/detail-user/" + item["uid"]}>
                          <button className="btn mr-4 bg-yellow-500 hover:bg-yellow-600">
                            เพิ่มเติม
                          </button>
                        </Link>
                        <button
                          className="btn bg-red-500 hover:bg-red-600"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDeteleUser(item["uid"]);
                            getDataUser();
                          }}
                        >
                          ลบ
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
      {select == 3 ? (
        <div className="box-table">
          <div className="relative overflow-x-auto table-2 table-user">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-black">
                    รหัสบทบาท
                  </th>
                  <th scope="col" className="px-6 py-3 text-black">
                    ชื่อบทบาท
                  </th>

                  <th scope="col" className="px-6 py-3 text-black">
                    ตอบสนอง
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataRole.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 box-tr"
                    >
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["rid"]}
                      </td>
                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item["rname"]}
                      </td>

                      <td
                        scope="row"
                        className="title px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <button
                          className="btn bg-red-500 hover:bg-red-600"
                          onClick={() => {
                            handleDeteleRole(item["rid"]);
                            getDataRole();
                          }}
                        >
                          ลบ
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
