"use client";
import React, { useEffect, useState } from "react";
import "./reponsive.css";
import "./style.css";
import Image from "next/image";
import Sidebar from "@/app/_components/Admin/Sidebar/Sidebar";
import Link from "next/link";

type Props = any;

export default function Detail_Cars({ params }: Props) {
  const [data, setData] = useState([]);
  const { id } = params;

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("/api/car")
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  if (id) {
    return (
      <div className="main">
        <Sidebar />
        <div className="detail-car">
          {data.map((item, index) => {
            if (String(item["cid"]) == String(id)) {
              return (
                <div key={index} className="contact">
                  <div className="image overflow-hidden">
                    <Image
                      src={item["cpath"]}
                      width={600}
                      height={128}
                      alt=""
                    />
                  </div>
                  <div className="detail">
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/key-chain.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">รหัสรถ</h1>
                      </div>
                      <div className="resualt text-black">{id}</div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/tag.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">แบรนด์</h1>
                      </div>
                      <div className="resualt text-black">{item['cbrand']}</div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/hatchback.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">รุ่น</h1>
                      </div>
                      <div className="resualt text-black">{item['cmodel']}</div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/car-seat.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">ที่นั่ง</h1>
                      </div>
                      <div className="resualt text-black">{item['cseat']}</div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/art.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">สี</h1>
                      </div>
                      <div className="resualt text-black">
                        <div className="rounded-xl w-12 h-12 color" style={{ background: String(item['ccolor']) }}></div>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/license-plate.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">ป้ายทะเบียน</h1>
                      </div>
                      <div className="resualt text-black">
                        {item['clicense']}
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/dollar.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">ราคา</h1>
                      </div>
                      <div className="resualt text-black">{item['cprice']}</div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/vehicle.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">ประเภท</h1>
                      </div>
                      <div className="resualt text-black">{item['tname']}</div>
                    </div>
                    <div className="detail-item">
                      <div className="title">
                        <Image
                          src={"/clipboard.png"}
                          width={24}
                          height={24}
                          alt=""
                          className="Image"
                        />
                        <h1 className="text-black title-name">สถานะรถ</h1>
                      </div>
                      <div className="resualt text-green-500">{item['sname']}</div>
                    </div>
                  </div>
                  <div className="w-full h-fit flex justify-center items-center gap-4">
                    <button className="w-[20%] h-[2rem] rounded-md bg-yellow-500" onClick={() => history.back()}>กลับก่อนหน้า</button>
                    <button className="w-[20%] h-[2rem] rounded-md bg-green-500"> <Link href={'/admin/car/detail-car/edit/' + item['cid']}>แก้ไข</Link> </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
