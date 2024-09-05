"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [menuAdd, setMenuAdd] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  if (status === "authenticated") {
    return (
      <div className="w-full h-full flex">
        {/* Sidebar */}
        <div className="h-screen w-1/5 bg-gradient-to-b from-rose-400 to-rose-500 text-white p-4">
          {/* Logo Section */}
          <div className="mb-8">
            <h1 className="text-xl font-bold tracking-wide text-center">
              Travel Ubon
            </h1>
          </div>
          {/* Menu Section */}
          <div className="h-2/3">
            <button
              className="flex items-center space-x-3 hover:bg-[#ffffff67] p-2 rounded-lg transition-all duration-300 w-full outline-none ease-in-out"
              onClick={() => setMenuAdd(!menuAdd)}
            >
              <Image src={"/add.png"} width={20} height={20} alt="" />
              <span className="text-base font-medium">เพิ่มข้อมูล</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                menuAdd ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{ transitionDuration: "0.25s" }}
            >
              <Link href={'/admin/allUser'}>
              <button
                className="pl-10 flex items-center space-x-3 hover:bg-[#ffffff67] p-2 rounded-lg transition-all duration-300 w-full outline-none"
              >
                <Image src={"/add.png"} width={20} height={20} alt="" />
                <span className="text-base font-medium">สถานที่ท่องเที่ยว</span>
              </button>
              </Link>
              <Link href={'/admin/allUser'}>
              <button
                className="pl-10 flex items-center space-x-3 hover:bg-[#ffffff67] p-2 rounded-lg transition-all duration-300 w-full outline-none"
              >
                <Image src={"/add.png"} width={20} height={20} alt="" />
                <span className="text-base font-medium">ร้านอาหาร</span>
              </button>
              </Link>
              <Link href={'/admin/allUser'}>
              <button
                className="pl-10 flex items-center space-x-3 hover:bg-[#ffffff67] p-2 rounded-lg transition-all duration-300 w-full outline-none"
              >
                <Image src={"/add.png"} width={20} height={20} alt="" />
                <span className="text-base font-medium">ที่พักอาศัย</span>
              </button>
              </Link>

              
            </div>
            <br />
            <button
              className="flex items-center space-x-3 hover:bg-[#ffffff67] p-2 rounded-lg transition-all duration-300 w-full outline-none ease-in-out"
              onClick={() => setMenuShow(!menuShow)}
            >
              <Image src={"/database.png"} width={20} height={20} alt="" />
              <span className="text-base font-medium">แสดงข้อมูล</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                menuShow ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{ transitionDuration: "0.25s" }}
            >
              <Link href={'/admin/allTravels'}>
              <button
                className="pl-10 flex items-center space-x-3 hover:bg-[#ffffff67] p-2 rounded-lg transition-all duration-300 w-full outline-none"
              >
                <Image src={"/database.png"} width={20} height={20} alt="" />
                <span className="text-base font-medium">สถานที่ท่องเที่ยว</span>
              </button>
              </Link>
              <Link href={'/admin/allUser'}>
              <button
                className="pl-10 flex items-center space-x-3 hover:bg-[#ffffff67] p-2 rounded-lg transition-all duration-300 w-full outline-none"
              >
                <Image src={"/database.png"} width={20} height={20} alt="" />
                <span className="text-base font-medium">ร้านอาหาร</span>
              </button>
              </Link>
              <Link href={'/admin/allUser'}>
              <button
                className="pl-10 flex items-center space-x-3 hover:bg-[#ffffff67] p-2 rounded-lg transition-all duration-300 w-full outline-none"
              >
                <Image src={"/database.png"} width={20} height={20} alt="" />
                <span className="text-base font-medium">ที่พักอาศัย</span>
              </button>
              <button
                className="pl-10 flex items-center space-x-3 hover:bg-[#ffffff67] p-2 rounded-lg transition-all duration-300 w-full outline-none"
              >
                <Image src={"/database.png"} width={20} height={20} alt="" />
                <span className="text-base font-medium">ผู้ใช้</span>
              </button>
              </Link>
            </div>
          </div>

          <button
            onClick={() => {
              signOut();
            }}
            className="flex items-center space-x-3 hover:bg-[#ffffff67] p-2 rounded-lg transition-all duration-300 w-full outline-none mt-[3rem]"
          >
            <Image src={"/logout.png"} width={20} height={20} alt="" />
            <span className="text-base font-medium">ออกจากระบบ</span>
          </button>
        </div>
        {/* Main Content */}
        <div className="h-screen w-4/5 p-4 bg-white overflow-auto">
          {children}
        </div>
      </div>
    );
  }
  if (status === "unauthenticated") {
    return router.replace("/");
  }
}
