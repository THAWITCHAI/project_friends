"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function Welcome({}: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <div className="text-7xl flex justify-center items-center h-full w-full">
      <h1 className="text-blue-500">Hello,{session?.user.uname}</h1>
    </div>
  );
  // if (status=='loading') {
  //   return (
  //     <div className="text-8xl flex justify-center items-center h-full w-full">
  //       <h1
  //         className="text-blue-500 cursor-pointer"
  //       >
  //         Loading...
  //       </h1>
  //     </div>
  //   );
  // }
  // if (status=='unauthenticated') {
  //   return router.replace("/");
  // }
}
