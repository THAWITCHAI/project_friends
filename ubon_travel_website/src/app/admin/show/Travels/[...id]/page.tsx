"use client";
import travelModule from "@/app/lib/globalApi";
import Image from "next/image";
import React from "react";

type Props = any;

export default function TravelDetail({ params }: Props) {
  const { id } = params;
  const data = travelModule.getDetailTravel(id);
  console.log(data);
  return (
    <div className="flex justify-center items-center">
      {data.map((item, index) => {
        return (
          <div key={index} className="border w-1/4 p-4 rounded-lg">
            <ul>
              <li className="overflow-hidden">
                <Image
                  src={item.travel_image}
                  width={300}
                  height={300}
                  alt=""
                  className="mb-5 rounded-md"
                />
              </li>
              <li>รหัสสถานที่ : {item.travel_id}</li>
              <li>ชื่อ : {item.travel_name}</li>
              <li>จังหวัด : {item.travel_province}</li>
              <li>อำเภอ : {item.travel_district}</li>
              <li>เวลาเปิด : {item.travel_time}</li>
              <li>ประเภท : {item.travel_type}</li>
            </ul>
            <br />
            <button
              className="bg-blue-500 w-full h-10 rounded-md text-white active:scale-90 transition-all ease-in-out hover:bg-blue-600"
              onClick={() => history.back()}
            >
              กลับ
            </button>
          </div>
        );
      })}
    </div>
  );
}
