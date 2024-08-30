"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
type Props = {};

export default function Sidebar({}: Props) {
  const [time, setTime] = useState<Date | null>(null);
  const { data: session } = useSession();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  useEffect(() => {
    // Set the initial time once the component has mounted (client-side)
    setTime(new Date());

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format time as HH:mm:ss
  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours} ชั่วโมง : ${minutes} นาที : ${seconds} วินาที`;
  };
  return (
    <div className="sidebar">
      <div className="setting">
        <Link href={"/admin/setting"}>
          <Image
            src={"/settings.png"}
            width={24}
            height={24}
            alt=""
            className="Image"
          />
        </Link>
      </div>
      <div className="profile">
        <div className="box-Image  overflow-hidden rounded-full">
          {data.map((item, index) => {
            if (String(session?.user.uid) === String(item["uid"])) {
              return (
                <Image
                  key={index}
                  src={String(item['uprofile'] || "/profile.png")}
                  width={110}
                  height={100}
                  className="image overflow-hidden"
                  alt="loading"
                />
              );
            }
          })}
        </div>
        <div className="box-contact">
          <h1 className="name">{session?.user.unick_name}</h1>
          <h1 className="status">{session?.user.rname}</h1>
        </div>
      </div>
      <div className="tag-bar">แสดงข้อมูล</div>
      <div className="box-menu-1">
        <Link href={"/admin/car/all-car"}>
          <div className="menu-item">
            <Image
              src={"/car.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            ข้อมูลรถ
          </div>
        </Link>
        <Link href={"/admin/user/all-user"}>
          <div className="menu-item">
            <Image
              src={"/group.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            ข้อมูลผู้ใช้
          </div>
        </Link>
      </div>
      <div className="tag-bar">เพิ่มข้อมูล</div>
      <div className="box-menu-1">
        <Link href={"/admin/add-car"}>
          <div className="menu-item">
            <Image
              src={"/car.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            เพิ่มข้อมูลรถ
          </div>
        </Link>
        <Link href={"/admin/user/add-user"}>
          <div className="menu-item">
            <Image
              src={"/group.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            เพิ่มข้อมูลผู้ใช้
          </div>
        </Link>
      </div>

      <div className="box-menu-1">
        <Link href={"/admin/car/add-type"}>
          <div className="menu-item">
            <Image
              src={"/car.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            เพิ่มประเภทรถ
          </div>
        </Link>
        <Link href={"/admin/user/add-role"}>
          <div className="menu-item">
            <Image
              src={"/admin.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            เพิ่มสิทธิ์ผู้ใช้
          </div>
        </Link>
      </div>

      <div className="box-menu-1">
        <Link href={"/admin/list"}>
          <div className="menu-item">
            <Image
              src={"/to-do-list.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            รายการจอง
          </div>
        </Link>
        <Link href={"/api/auth/signout"}>
          <div className="menu-item">
            <Image
              src={"/logout.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            ออกจากระบบ
          </div>
        </Link>
      </div>
    </div>
  );
}
