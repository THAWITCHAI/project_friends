'use client'
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function Booking({}: Props) {
  const {data:session,status}= useSession()
  const router = useRouter()
if(session){
  return (
    <div className="text-8xl flex justify-center items-center h-full w-full">
      <h1
        className="text-blue-500 cursor-pointer"
        onClick={() => {
          signOut();
        }}
      >
        Welcome
      </h1>
    </div>
  );
}
if(!session){
  return router.replace('/')
}
}
