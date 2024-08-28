import HelloWorld from "@/app/_components/Admin/Index/HelloWorld";
import Sidebar from "@/app/_components/Admin/Sidebar/Sidebar";
import React from "react";

type Props = {};

export default function Welcome_Page({}: Props) {
  return (
    <div className="main">
      <Sidebar />
      <HelloWorld/>
    </div>
  );
}
