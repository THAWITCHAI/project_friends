"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Login({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(1);
  const [massage, setMassage] = useState('');


  const handleSubmitLogin = () => {
    if (email === "" && password === "") {
      setMassage('กรอกให้ครบ!');
      setErr(2)
      return;
    }
    signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-fit h-fit">
        {err == 1 && (
          <div className="bg-none my-10 w-[25rem] h-[3rem] rounded-md flex justify-center items-center text-white"></div>
        )}
        {err == 2 && (
          <div className="bg-red-500 my-10 w-[25rem] h-[3rem] rounded-md flex justify-center items-center text-white">
            {massage}
          </div>
        )}
        {err == 3 && (
          <div className="bg-green-500 my-10 w-[25rem] h-[3rem] rounded-md flex justify-center items-center text-white">
            {massage}
          </div>
        )}
        <div className="h-fit w-[25rem] shadow-md p-5 rounded-md flex flex-col justify-center items-center">
          <h1 className="text-center text-3xl my-2 text-blue-500">
            เข้าสู่ระบบ
          </h1>
          <p className="text-center text-slate-400 my-2">
            กรุณากรอก อีเมล์ และ รหัสผ่าน ให้ถูกต้อง
          </p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="my-2 border rounded-md w-full h-10 outline-none px-2"
            placeholder="อีเมล์"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="my-2 border rounded-md w-full h-10 outline-none px-2"
            placeholder="รหัสผ่าน"
          />
          <div className=" h-[4rem] w-full flex justify-center items-center">
            <Button
              className="w-1/2 h-[50%] bg-green-500 hover:bg-green-600 active:scale-90 transition-all ease-in-out"
              disabled={!(password && email)}
              onClick={handleSubmitLogin}
            >
              เข้าสู่ระบบ
            </Button>
          </div>
          <p className="text-center">
            ถ้าหากยังไม่มีบัญชี?{" "}
            <Link href={"/authen/create-account"} className="text-blue-500">
              ลงทะเบียน
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
