"use client";
import travelModule from "@/app/lib/globalApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = any;
interface TravelDetail {
  travel_id: number;
  travel_name: String;
  travel_road: String;
  travel_alley: String;
  travel_subdistrict: String;
  travel_district: String;
  travel_province: String;
  travel_post: String;
  travel_adult_fee: number;
  travel_child_fee: number;
  travel_business_hours_s: String;
  travel_business_hours_e: String;
  travel_url: String;
  type_travel_name: String;
  travel_background: String;
  travel_facilies_1: String;
  travel_facilies_2: String;
  travel_facilies_3: String;
  travel_facilies_4: String;
  travel_image_1: string;
  travel_image_2: string;
  travel_image_3: string;
}

export default function TravelDetail({ params }: Props) {
  const { id } = params;
  const [data, setData] = useState<TravelDetail[]>([]);

  useEffect(() => {
    travelModule.getTravels().then((res) => setData(res));
  }, []);

  const detail = data.filter((item) => item.travel_id == id);

  return (
    <div className="flex justify-center items-center">
      {detail.map((item, index) => {
        return (
          <div key={index} className="border w-1/4 p-4 rounded-lg">
            <ul>
              <li className="overflow-hidden">
                <Image
                  src={'/1.webp'}
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
              <li>เวลาเปิด : {item.travel_business_hours_s} - {item.travel_business_hours_e}</li>
              <li>ประเภท : {item.type_travel_name}</li>
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
