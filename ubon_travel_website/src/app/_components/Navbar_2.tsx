"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {};

export default function Navbar({ }: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <div className="w-full h-fit shadow-md bg-blue-500 sticky top-0 z-[1]">
      <div className="h-[4rem] w-full flex justify-between items-center pl-5 pr-5">
        <div className="w-[20rem]">
          <Image
            src={"/lotus.png"}
            className="cursor-pointer"
            width={50}
            height={50}
            alt="Logo"
            onClick={() => {
              return router.replace("/");
            }}
          />
        </div>
        <div className=" h-full w-[30rem] flex justify-between items-center">
          <div className="cursor-pointer hover:ring-1 hover:ring-white rounded-md transition-all ease-in-out h-[70%] w-[9rem] flex justify-center items-center text-white"> <Link className="w-full h-full flex justify-center items-center" href={'/all-travels'}>สถานที่ท่องเที่ยว</Link> </div>
          <div className="cursor-pointer hover:ring-1 hover:ring-white rounded-md transition-all ease-in-out h-[70%] w-[9rem] flex justify-center items-center text-white"> <Link className="w-full h-full flex justify-center items-center" href={'/all_house'}>ที่พัก</Link> </div>
          <div className="cursor-pointer hover:ring-1 hover:ring-white rounded-md transition-all ease-in-out h-[70%] w-[9rem] flex justify-center items-center text-white"> <Link className="w-full h-full flex justify-center items-center" href={'/all_cafe'}>ค่าเฟ่</Link> </div>
        </div>
        <div className="w-[20rem] h-full flex justify-end items-center">
          {status == "unauthenticated" && (
            <Link
              href={"/authen/login"}
              className=" w-fit h-fit active:scale-90 transition-all ease-in-outrounded-lg"
            >
              <Image src={'/profile_1.png'} width={30} height={30} alt="" />
            </Link>
          )}
          {status === "authenticated" && (
            <div className="w-[14rem] h-full flex justify-between items-center">
              <h1 className="text-[14px] text-white flex justify-center items-center h-full overflow-hidden">
                {session.user?.name}
              </h1>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Image src={"/profile_1.png"} width={30} height={30} alt="" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex justify-around items-center">
                    <Image src={"/user.png"} width={24} height={24} alt="" />
                    <p className=" w-[5rem] h-[2rem] flex justify-center items-center">
                      Profile Bro
                    </p>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="flex justify-around items-center"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    <Image
                      src={"/turn-off.png"}
                      width={24}
                      height={24}
                      alt=""
                    />
                    <p className=" w-[5rem] h-[2rem] flex justify-center items-center">
                      Log Out
                    </p>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
