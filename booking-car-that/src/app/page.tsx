"use client";
import React from "react";
import Login from "./_components/auth/Login/Login";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {};

export default function Home({}: Props) {
  const { data: session, status } = useSession();
  const router = useRouter()
  if (status == "unauthenticated") {
    return (
      <>
        <Login />
      </>
    );
  }
  if (status == "authenticated") {
    if(session.user.rname==='User'){
      return router.replace('/client/booking')
    }else{
      return router.replace('/admin/welcome')

    }
  }
  if (status == "loading") {
    return (
      <>
        <Login />
      </>
    );
  }
}
