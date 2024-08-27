"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  const router = useRouter();
  if (!session && status === "unauthenticated") {
    return router.replace("/");
  }
  if (session?.user.rname==='Admin' && status === "authenticated") {
    return (
      <div className="w-full h-full flex justify-between items-center">
        <div className="bg-[#084C61] w-1/6 h-full">
          <div className="w-full h-1/5 flex justify-center items-center p-2">
            <div className="image w-fit h-fit overflow-hidden flex justify-center items-center rounded-full">
              <Image src={"/profile.jpg"} width={80} height={80} alt="" />
            </div>
            <div className="image w-1/2 h-full">
              <div className="w-full h-1/2 text-white text-xl flex items-end pl-2">
                {session.user.unick_name}
              </div>
              <div className="w-full h-1/2 text-white text-xs font-light  pl-2 items-start">
                {session.user.rname}
              </div>
            </div>
          </div>
          <div className=" h-4/5">
            <div className=" h-16 flex items-center justify-center p-1">
              <Link href={"/admin/cars/contact_cars"} className="h-full w-full">
                <button className="w-full h-full flex items-center justify-center hover:ring-stone-300 hover:ring-1 transition-all rounded-lg active:scale-90">
                  <div className="w-1/4 h-full flex justify-center items-center">
                    <Image
                      src={"/checklist.png"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="w-full h-full flex justify-start items-center pl-3 text-white font-thin text-sm">
                    จัดการข้อมูลรถ
                  </div>
                </button>
              </Link>
            </div>
            <div className=" h-16 flex items-center justify-center p-1">
              <Link href={""} className="h-full w-full">
                <button className="w-full h-full flex items-center justify-center hover:ring-stone-300 hover:ring-1 transition-all rounded-lg active:scale-90">
                  <div className="w-1/4 h-full flex justify-center items-center">
                    <Image src={"/people.png"} alt="" width={24} height={24} />
                  </div>
                  <div className="w-full h-full flex justify-start items-center pl-3 text-white font-thin text-sm">
                    จัดการข้อมูลผู้ใช้
                  </div>
                </button>
              </Link>
            </div>
            <div className=" h-16 flex items-center justify-center p-1 mt-40">
              <Link href={""} className="h-full w-full">
                <button className="w-full h-full flex items-center justify-center hover:ring-stone-300 hover:ring-1 transition-all rounded-lg active:scale-90">
                  <div className="w-1/4 h-full flex justify-center items-center">
                    <Image
                      src={"/settings.png"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="w-full h-full flex justify-start items-center pl-3 text-white font-thin text-sm">
                    ตั้งค่าข้อมูลผู้ใช้
                  </div>
                </button>
              </Link>
            </div>
            <div className=" h-16 flex items-center justify-center p-1">
              <Link href={"/api/auth/signout"} className="h-full w-full">
                <button className="w-full h-full flex items-center justify-center hover:ring-stone-300 hover:ring-1 transition-all rounded-lg active:scale-90">
                  <div className="w-1/4 h-full flex justify-center items-center">
                    <Image src={"/logout.png"} alt="" width={24} height={24} />
                  </div>
                  <div className="w-full h-full flex justify-start items-center pl-3 text-white font-thin text-sm">
                    ออกจากระบบ
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-5/6 h-full">{children}</div>
      </div>
    );
  }
  if (status === "loading") {
    return <div className="w-full h-full p-5 text-xl">Waiting Loading...</div>;
  }
  if (session?.user.rname==='User') {
    return router.replace('/')
  }
}
