"use client";
import travelModule from "@/app/lib/globalApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Navbar from "@/app/_components/Navbar_2";

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
  travel_call: string;
}

export default function TravelDetail({ params }: Props) {
  const { id } = params;
  const [data, setData] = useState<TravelDetail[]>([]);

  useEffect(() => {
    travelModule.getTravels().then((res) => setData(res));
  }, []);

  const detail = data.filter((item) => item.travel_id == id);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center">
        {detail.map((item, index) => {
          const url = item.travel_url;
          return (
            <div key={index} className="w-full p-4 rounded-lg">
              <h1 className="p-2 text-4xl text-blue-500 border-b flex justify-between items-center">
                {item.travel_name}
                <button
                  className="text-lg text-yellow-500"
                  onClick={() => history.back()}
                >
                  กลับหน้าหลัก
                </button>
              </h1>
              <div className=" mt-5 h-[25rem] flex justify-between items-center">
                <div className="h-full w-[49%] px-10 overflow-hidden">
                  <Carousel className="w-full h-full flex justify-center items-center">
                    <CarouselContent>
                      <CarouselItem>
                        <Image
                          src={item.travel_image_1}
                          width={500}
                          height={500}
                          alt=""
                          className="rounded-lg"
                        />
                      </CarouselItem>
                      {item.travel_image_2 !== '-' && (
                        <CarouselItem>
                          <Image
                            src={item.travel_image_2}
                            width={500}
                            height={500}
                            alt=""
                            className="rounded-lg"
                          />
                        </CarouselItem>
                      )}
                      {item.travel_image_3 !== '-' && (
                        <CarouselItem>
                          <Image
                            src={item.travel_image_3}
                            width={500}
                            height={500}
                            alt=""
                            className="rounded-lg"
                          />
                        </CarouselItem>
                      )}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
                <div className="h-full w-[49%] py-14">
                  <div className="w-full h-fit p-5 border-b-2 border-dashed border-gray-500">
                    <li className="w-full h-fit">ประเภท สถานที่ท่องเที่ยว</li>
                    <h1 className="w-full h-fit flex items-start justify-start text-lg text-blue-500 px-6">
                      {item.type_travel_name}
                    </h1>
                  </div>
                  <div className="w-full h-fit p-5 border-b-2 border-dashed border-gray-500">
                    <li className="w-full h-fit">ข้อมูลติดต่อ</li>
                    <h1 className="w-full h-fit flex items-start justify-start text-sm text-blue-500 px-6">
                      {item.travel_call}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-full h-fit text-2xl text-blue-500 pb-5 border-b">
                สิ่งที่ควรรู้
                <li className="text-black text-lg mt-10">ข้อมูล</li>
              </div>
              <div className="my-10 w-full h-fit flex justify-around items-center">
                <div className="h-[20rem] w-[32%] p-2">
                  <div className="w-full h-fit flex justify-center items-center">
                    <Image
                      src={"/hand.png"}
                      width={30}
                      height={30}
                      alt=""
                      className="mx-2"
                    />
                    <h1 className="text-xl">ค่าธรรมเนียม</h1>
                  </div>
                  <h1 className="flex justify-center items-center my-5">
                    ผู้ใหญ่ - {item.travel_adult_fee} ฿
                  </h1>
                  <h1 className="flex justify-center items-center my-5">
                    เด้ก - {item.travel_child_fee} ฿
                  </h1>
                </div>
                <div className="h-[20rem] w-[32%] p-2 border-l border-r">
                  <div className="w-full h-fit flex justify-center items-center">
                    <Image
                      src={"/calendar.png"}
                      width={30}
                      height={30}
                      alt=""
                      className="mx-2"
                    />
                    <h1 className="text-xl">เวลาทำการ</h1>
                  </div>
                  <h1 className="flex justify-center items-center my-5">
                    {item.travel_business_hours_s} น -{" "}
                    {item.travel_business_hours_e} น
                  </h1>
                </div>
                <div className="h-[20rem] w-[32%] p-2">
                  <div className="w-full h-fit flex justify-center items-center">
                    <Image
                      src={"/location.png"}
                      width={30}
                      height={30}
                      alt=""
                      className="mx-2"
                    />
                    <h1 className="text-xl">ที่อยู่</h1>
                  </div>
                  <div className="h-fit w-full flex justify-center items-center my-4">
                    <h1 className="">
                      <h1> ถนน : {item.travel_road}</h1>
                      <h1> ซอย : {item.travel_alley}</h1>
                    </h1>
                  </div>
                  <div className="h-fit w-full flex justify-center items-center  my-4">
                    <h1 className="">
                      <h1> ตำบล : {item.travel_subdistrict}</h1>
                      <h1> อำเถอ : {item.travel_district}</h1>
                    </h1>
                  </div>

                  <div className="h-fit w-full flex justify-center items-center  my-4">
                    <h1 className="">
                      <h1> จังหวัด : {item.travel_province}</h1>
                      <h1> รหัสไปรษณีย์ : {item.travel_post}</h1>
                    </h1>
                  </div>
                </div>
              </div>
              <div className=" my-10 py-2">
                <li className="text-lg pb-5 border-b my-2">
                  ความเป็นมา หรือ คำแนะนำ
                </li>
                <div className="h-[20rem] flex justify-center items-center mt-5">
                  <div className="shadow-lg rounded-lg w-[80%] h-full overflow-y-scroll scrollbar-hide text-center p-5">
                    {item.travel_background}
                  </div>
                </div>
              </div>
              <li className="text-xl">แผนที่</li>
              <div className="w-full h-fit p-5 flex justify-center items-center">
                <iframe
                  src={String(url)}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  width={300}
                  height={300}
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
