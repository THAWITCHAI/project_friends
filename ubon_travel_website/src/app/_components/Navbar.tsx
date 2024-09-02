'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  const router = useRouter()
  return (
    <div className="w-full h-fit">
      <div className="border h-[4rem] w-full bg-rose-500 flex justify-between items-center pl-5 pr-5">
        <div className="w-[20rem]">
          <Image src={"/lotus.png"} width={50} height={50} alt="Logo" onClick={()=>{
            return router.replace('/')
          }}/>
        </div>
        <h1 className="text-white text-3xl">TEAVEL UBON RATCHATHANI</h1>
        <div className="w-[20rem] h-full flex justify-between items-center">
          <Link
            href={"/authen/login"}
            className="ring-1 ring-white w-[48%] h-[60%] active:scale-90 transition-all ease-in-out"
          >
            <button className="w-full h-full text-white ">ล็อคอิน</button>
          </Link>
          <Link
            href={""}
            className="ring-1 ring-white w-[48%] h-[60%] active:scale-90 transition-all ease-in-out"
          >
            <button className="w-full h-full bg-white text-rose-500 ">
              ลงทะเบียน
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
