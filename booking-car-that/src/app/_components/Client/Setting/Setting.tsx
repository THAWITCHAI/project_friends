"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import "./style.css";
import "./reponsive.css";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

type Props = {};

export default function Setting({ }: Props) {
  const { data: session } = useSession()
  const [base64_profile, setBase64_profile] = useState<String | null>(null);
  const [form, setForm] = useState({ uid: session?.user.uid })


  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFileProfileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64_profile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.assign({}, form, { udive: base64_profile })
    if (data.udive == null) {
      console.log(form)
      const res = await fetch('http://localhost:3000/api/user/', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      alert('แก้ไขข้อมูลสำเร็จ')
      return
    }
    if (data.udive != null) {
      console.log(data)
      const res = await fetch('http://localhost:3000/api/user/', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      alert('แก้ไขข้อมูลสำเร็จ')
      return
    }
    return
  }

  return (
    <div className="setting-bg">
      <div className="show-contact">
        <h1 className="text-black title">ข้อมูลผู้ตัวเอง</h1>
        <div className="box-form">
          <div className="box-show">
            <Image
              src={"/key-chain.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            <input
              type="text"
              placeholder="รหัสผู้ใช้"
              className="input"
              disabled
              defaultValue={session?.user.uid}
            />
          </div>
          <div className="box-show">
            <Image
              src={"/id-card.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            <input
              name="uname"
              onChange={handleChange}
              type="text"
              placeholder="ชื่อ - นามสกุล"
              className="input"
              defaultValue={session?.user.uname}
            />
          </div>
          <div className="box-show">
            <Image
              src={"/id-card.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            <input
              name="unick_name"
              onChange={handleChange}
              type="text"
              placeholder="ชื่อเล่น"
              className="input"
              defaultValue={session?.user.unick_name}
            />
          </div>
          <div className="box-show">
            <Image
              src={"/mail.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            <input
              name="uemail"
              onChange={handleChange}
              type="text"
              placeholder="อีเมล"
              className="input"
              defaultValue={session?.user.uemail}
            />
          </div>
          <div className="box-show">
            <Image
              src={"/password.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            <input
              name="upwd"
              onChange={handleChange}
              type="text"
              placeholder="รหัสผ่าน"
              className="input"
              defaultValue={session?.user.upwd}
            />
          </div>
          <div className="box-show">
            <Image
              src={"/telephone.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            <input
              name="uphone"
              onChange={handleChange}
              type="text"
              placeholder="เบอร์โทร"
              className="input"
              defaultValue={session?.user.uphone}
            />
          </div>
          <div className="box-show">
            <Image
              src={"/search.png"}
              width={24}
              height={24}
              alt=""
              className="Image"
            />
            <input
              type="text"
              placeholder="สถานะ"
              className="input"
              defaultValue={session?.user.rname}
              disabled
            />
          </div>
          <div className="box-show box-file">
            <label htmlFor="" className="text-black">
              อัพเดทใบขับขี่
            </label>
            <input
              type="file"
              className="file"
              onChange={handleFileProfileChange}
            />
          </div>
          <div className="box-show-btn">
            <button
              className="btn text-white text-xl rounded-lg bg-yellow-500 w-full h-full"
              onClick={() => [history.back()]}
            >
              กลับ
            </button>
          </div>
          <div className="box-show-btn">
            <button className="btn text-white text-xl rounded-lg bg-green-500" onClick={handleSubmit}>
              อัพเดท
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
