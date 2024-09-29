'use client'
import Link from "next/link";
import React from "react";

type Props = {};

export default function CreateAccount({}: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-fit h-fit">
        <div className="bg-red-500 my-10 w-[25rem] h-[3rem] rounded-md flex justify-center items-center text-white">
          รหัสผ่านหรืออีเมล์ไม่ถูกต้อง
        </div>
        <div className="h-fit w-[25rem] shadow-md p-5 rounded-md flex flex-col justify-center items-center">
          <h1 className="text-center text-3xl my-2 text-blue-500">
            ลงทะเบียน
          </h1>
          <p className="text-center text-slate-400 my-2">
            กรุณากรอก ชื่อ อีเมล์ และ รหัสผ่าน ให้ถูกต้อง
          </p>
          <input
            type="text"
            className="my-2 border rounded-md w-full h-10 outline-none px-2"
            placeholder="ชื่อ"
          />
          <input
            type="email"
            className="my-2 border rounded-md w-full h-10 outline-none px-2"
            placeholder="อีเมล์"
          />
          <input
            type="password"
            className="my-2 border rounded-md w-full h-10 outline-none px-2"
            placeholder="รหัสผ่าน"
          />
          <div className=" h-[4rem] w-full flex justify-center items-center">
            <button className="bg-green-500 w-1/2 h-[50%] rounded-md text-white">
              ลงทะเบียน
            </button>
          </div>
          <p className="text-center">
            ถ้าหากยังมีบัญชี?{" "}
            <Link href={"/authen/login"} className="text-blue-500">
              เข้าสู่ระบบ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
