"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  const router = useRouter();
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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-3 hover:bg-[#ffffff67] p-2 rounded-lg transition-all duration-300 w-full outline-none">
                <Image src={"/add.png"} width={20} height={20} alt="" />
                <span className="text-base font-medium">เพิ่มข้อมูล</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[15rem]">
              <DropdownMenuLabel>เลือก</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>สถานที่</DropdownMenuItem>
              <DropdownMenuItem>ร้านอาหาร</DropdownMenuItem>
              <DropdownMenuItem>ที่พัก</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <br />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-3 hover:bg-[#ffffff67] p-2 rounded-lg transition-all duration-300 w-full outline-none">
                <Image src={"/database.png"} width={20} height={20} alt="" />
                <span className="text-base font-medium">แสดงข้อมูล</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[15rem]">
              <DropdownMenuLabel>เลือก</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>สถานที่</DropdownMenuItem>
              <DropdownMenuItem>ร้านอาหาร</DropdownMenuItem>
              <DropdownMenuItem>ที่พัก</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            onClick={() => {
              signOut();
            }}
            className="flex items-center space-x-3 hover:bg-[#ffffff67] p-2 rounded-lg transition-all duration-300 w-full outline-none mt-[22rem]"
          >
            <Image src={"/logout.png"} width={20} height={20} alt="" />
            <span className="text-base font-medium">ออกจากระบบ</span>
          </button>
        </div>
        {/* Main Content */}
        <div className="h-screen w-4/5 p-4 bg-gray-100 overflow-auto">
          {children}
        </div>
      </div>
    );
  }
  if (status === "unauthenticated") {
    return router.replace("/");
  }
}
