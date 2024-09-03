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

export default function Navbar({}: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <div className="w-full h-fit">
      <div className="border h-[4rem] w-full bg-rose-500 flex justify-between items-center pl-5 pr-5">
        <div className="w-[20rem]">
          <Image
            src={"/lotus.png"}
            width={50}
            height={50}
            alt="Logo"
            onClick={() => {
              return router.replace("/");
            }}
          />
        </div>
        <h1 className="text-white text-3xl">TEAVEL UBON RATCHATHANI</h1>
        <div className="w-[20rem] h-full flex justify-end items-center">
          {status == "unauthenticated" && (
            <Link
              href={"/authen/login"}
              className=" w-[48%] h-[60%] active:scale-90 transition-all ease-in-out bg-white rounded-lg"
            >
              <button className="w-full h-full text-lg text-red-500 ">
                ล็อคอิน
              </button>
            </Link>
          )}
          {status === "authenticated" && (
            <div className="w-[16rem] h-full flex justify-between items-center">
              <h1 className="text-xl text-white flex justify-center items-center h-full overflow-hidden">
                {session.user?.name}
              </h1>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Image src={"/user.png"} width={40} height={40} alt="" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex justify-around items-center">
                    <Image src={"/user.png"} width={24} height={24} alt="" />
                    <p className=" w-[5rem] h-[2rem] flex justify-center items-center">
                      Profile
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
