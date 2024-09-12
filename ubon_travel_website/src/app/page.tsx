"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const image = "/back.jpg";
  const { data: session, status } = useSession();
  const router = useRouter();

  if (String(session?.user.role) === "1") {
    return router.replace("/admin/show/Travels");
  }
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden">
      <Carousel className="w-[100%] h-[100%] flex justify-center items-center relative">
        <CarouselContent>
          <CarouselItem>
            <div className="w-[100vw] h-[100vh] back-title  bg-[url(/back.jpg)]">
              <div className="w-full h-full bg flex justify-end items-center bg-[rgba(0,0,0,0.274)]">
                <div className="w-1/2 h-full flex justify-center items-center">
                  <div className="w-full h-[70%] p-10">
                    <h1 className="w-full h-fit text-center text-7xl my-10 text-yellow-500 title">
                      แห่เทียนอุบลราชธานี
                    </h1>
                    <p className="w-full text-white text-center h-fit p-10">
                      เที่ยวอุบลราชธานี -
                      ดินแดนแห่งธรรมชาติและวัฒนธรรมที่งดงาม!
                      ชมพระอาทิตย์ขึ้นที่ผาแต้ม เดินสำรวจสามพันโบก
                      สักการะพระธาตุหนองบัว และร่วมประเพณีแห่เทียนพรรษา
                      ลิ้มรสอาหารท้องถิ่นอีสานแท้ๆ
                      และสัมผัสความอบอุ่นจากคนท้องถิ่น
                      มาค้นพบเสน่ห์ที่ไม่เหมือนใครในอุบลราชธานี!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-pink-500 w-[100vw] h-[100vh]"></div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4" />
        <CarouselNext className="absolute right-4" />
      </Carousel>
    </div>
  );
}
