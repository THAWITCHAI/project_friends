"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../_components/Navbar_2";
import travelModule from "../lib/globalApi";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "../_components/Sidebar";

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
  type_travel_id: String;
  travel_background: String;
  travel_facilies_1: String;
  travel_facilies_2: String;
  travel_facilies_3: String;
  travel_facilies_4: String;
  travel_image_1: string;
  travel_image_2: string;
  travel_image_3: string;
  travel_call: string;
}

export default function AllTravels({ params }: Props) {
  const { id } = params;
  const [travels, setTravels] = useState<TravelDetail[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    travelModule.getTravels().then((res) => setTravels(res));
  }, []);

  const check = travels.filter((item)=>String(item.type_travel_id)===String(id))

  const result = check.filter((item) => {
    return (
      (item.travel_name &&
        item.travel_name.toUpperCase().includes(search.toUpperCase())) ||
      (item.travel_district &&
        item.travel_district.toUpperCase().includes(search.toUpperCase())) ||
      (item.travel_subdistrict &&
        item.travel_subdistrict.toUpperCase().includes(search.toUpperCase())) ||
      item.travel_province.toUpperCase().includes(search.toUpperCase())
    );
  });

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className=" w-full h-fit px-10 py-10 flex justify-center items-center outline-none">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="w-1/2 shadow-md h-[3rem] px-5 rounded-full flex justify-center items-center outline-none"
          placeholder="ค้นหา ชื่อ อำเภอ ตำบล หรือ ประเภท สถานที่ ที่คุณอยากจะไป"
        />
      </div>
      <div className="px-5 w-full h-[25rem] flex items-center justify-center">
        <Sidebar />
        <div className="w-[85%] h-full overflow-y-scroll scrollbar-hide p-10">
          <div className="text-start text-2xl px-10">
            สถานที่ทั้งหมด : {search ? result.length : check.length} รายการ
          </div>
          <div className="w-full h-fit template py-10 px-5 ">
            {!search &&
              check.map((item, index) => {
                return (
                  <Link key={index} href={"/all-travels/" + item.travel_id}>
                    <div className="shadow-lg h-[15rem] rounded-md transition-all ease-in-out hover:scale-110 overflow-hidden">
                      <Image
                        src={"/back.jpg"}
                        width={200}
                        height={200}
                        alt=""
                        className="w-full h-[70%] rounded-md"
                      />
                      <h1 className="w-full h-fit text-start px-5 mt-2 text-[14px]">
                        {item.travel_name}
                      </h1>
                      <p className="text-xs flex justify-start items-center px-2 h-[2.5rem]">
                        <Image
                          src={"/location.png"}
                          alt=""
                          width={15}
                          height={15}
                          className="mx-2"
                        />{" "}
                        {item.travel_province}
                      </p>
                    </div>
                  </Link>
                );
              })}
            {search &&
              result.map((item, index) => {
                return (
                  <Link key={index} href={"/all-travels/" + item.travel_id}>
                    <div className="shadow-lg h-[15rem] rounded-md transition-all ease-in-out hover:scale-110 overflow-hidden">
                      <Image
                        src={"/back.jpg"}
                        width={200}
                        height={200}
                        alt=""
                        className="w-full h-[70%] rounded-md"
                      />
                      <h1 className="w-full h-fit text-start px-5 mt-2 text-[14px]">
                        {item.travel_name}
                      </h1>
                      <p className="text-xs flex justify-start items-center px-2 h-[2.5rem]">
                        <Image
                          src={"/location.png"}
                          alt=""
                          width={15}
                          height={15}
                          className="mx-2"
                        />{" "}
                        {item.travel_province}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
