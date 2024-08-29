'use client'
import React from "react";
import "./style.css";
import { useSession } from "next-auth/react";
type Props = {};

export default function HelloWorld({}: Props) {
  const {data:session} = useSession()
  return (
    <div className="index">
      <h1 className="h1">ยินต้อนรับ คุณ {session?.user.uname} สู่หน้า Admin</h1>
    </div>
  );
}
