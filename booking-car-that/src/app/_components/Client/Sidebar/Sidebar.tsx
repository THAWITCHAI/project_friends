"use client";
import React, { useEffect, useState } from "react";
import "./reponsive.css";
import "./sidebar.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
type Props = {};

export default function Sidebar({}: Props) {
  const [time, setTime] = useState<Date | null>(null);
  const router = useRouter();
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
    return `${hours} : ${minutes}  : ${seconds} `;
  };
  return (
    <div className="sidebar">
      <div className="setting">
        <Image
          src={"/settings.png"}
          width={24}
          height={24}
          alt="setting"
          className="Image"
          onClick={() => router.push("/client/setting")}
        />
      </div>
      <div className="profile">
        <div className="image-profile border flex justify-center items-center overflow-hidden">
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
        <div className="contact-profile">
          <h1 className="status">{session?.user.unick_name}</h1>
          <p>{session?.user.rname}</p>
        </div>
      </div>
      <div className="side-menu">
        <button
          className="item menu-1"
          onClick={() => router.push("/client/booking")}
        >
          <Image
            src={"/appointment.png"}
            width={24}
            height={24}
            alt=""
            className="Image"
          />
          <div id="button" className="button">
            จองรถ
          </div>
        </button>
        <button
          className="item menu-2"
          onClick={() => router.push("/client/list")}
        >
          <Image
            src={"/to-do-list.png"}
            width={24}
            height={24}
            alt=""
            className="Image"
          />
          <div id="button" className="button">
            ประวัติการจอง
          </div>
        </button>
        <button
          className="item menu-3"
          onClick={() => router.push("/client/all-car")}
        >
          <Image
            src={"/pickup-car.png"}
            width={24}
            height={24}
            alt=""
            className="Image"
          />
          <div id="button" className="button">
            รถทั้งหมด
          </div>
        </button>
        <button
          className="item menu-4"
          onClick={() => router.replace("/api/auth/signout")}
        >
          <Image
            src={"/logout.png"}
            width={24}
            height={24}
            alt=""
            className="Image"
          />
          <div id="button" className="button">
            ออกจากระบบ
          </div>
        </button>
        <div className="menu-5">{time ? formatTime(time) : "Loading..."}</div>
      </div>
    </div>
  );
}
