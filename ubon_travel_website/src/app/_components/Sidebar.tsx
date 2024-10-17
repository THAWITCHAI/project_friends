"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import travelModule from "../lib/globalApi";

type Props = {};

export default function Sidebar({}: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    travelModule.getTypeTravels().then((res) => setData(res));
  }, []);
  return (
    <div className="w-[15%] h-full flex flex-col justify-start items-center overflow-y-scroll scrollbar-hide">
      <span className="w-full h-fit my-2 flex justify-center items-center active:scale-90 transition-all ease-in-out">
        <Link href={""} className="w-fit h-fit text-xl">
          สถานที่ท่องเที่ยว
        </Link>
      </span>
      <span className=" w-full h-fit my-2 flex justify-center items-center text-blue-500 active:scale-90 transition-all ease-in-out hover:scale-125">
        <Link href={`/all-travels`} className="w-fit h-fit">
          ทั้งหมด
        </Link>
      </span>
      {data.map((item, index) => {
        return (
          <span
            className="bg-bu-500 p-2 w-full h-fit my-2 flex justify-center items-center text-blue-500 active:scale-90 transition-all ease-in-out hover:scale-125"
            key={index}
          >
            <Link href={`/${item["type_travel_id"]}`} className="w-fit h-fit">
              {item["type_travel_name"]}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
