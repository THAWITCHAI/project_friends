"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "./_components/Navbar";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (String(session?.user.role) === "1") {
    return router.replace("/admin/allUser");
  }
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full h-full overflow-y-scroll">
      <Navbar />
      {status === "authenticated" && (
        <div className="w-full h-[6rem] p-2 flex justify-around items-center shadow-md">
          <div className="w-[10%] h-full active:scale-90 transition-all ease-out hover:ring-1 hover:ring-rose-500 rounded-md">
            <Link href={"/"} className="w-full h-full">
              <div className="h-1/2 w-full flex justify-center items-center">
                <Image src={"/home.png"} width={24} height={24} alt="" />
              </div>
              <h1 className="h-1/2 w-full flex justify-center items-center">
                หน้าหลัก
              </h1>
            </Link>
          </div>
          <div className="w-[10%] h-full active:scale-90 transition-all ease-out hover:ring-1 hover:ring-rose-500 rounded-md">
            <Link href={""} className="w-full h-full">
              <div className="h-1/2 w-full flex justify-center items-center">
                <Image src={"/destination.png"} width={24} height={24} alt="" />
              </div>
              <h1 className="h-1/2 w-full flex justify-center items-center">
                สถานที่ท่องเที่ยว
              </h1>
            </Link>
          </div>
          <div className="w-[10%] h-full active:scale-90 transition-all ease-out hover:ring-1 hover:ring-rose-500 rounded-md">
            <Link href={""} className="w-full h-full">
              <div className="h-1/2 w-full flex justify-center items-center">
                <Image src={"/restaurant.png"} width={24} height={24} alt="" />
              </div>
              <h1 className="h-1/2 w-full flex justify-center items-center">
                ร้านอาหาร
              </h1>
            </Link>
          </div>
          <div className="w-[10%] h-full active:scale-90 transition-all ease-out hover:ring-1 hover:ring-rose-500 rounded-md">
            <Link href={""} className="w-full h-full">
              <div className="h-1/2 w-full flex justify-center items-center">
                <Image src={"/resident.png"} width={24} height={24} alt="" />
              </div>
              <h1 className="h-1/2 w-full flex justify-center items-center">
                ที่พัก
              </h1>
            </Link>
          </div>
        </div>
      )}
      <div className="mt-10 h-[20rem] w-full flex justify-center items-center p-5">
        <Carousel className="w-[90%] h-full flex justify-center items-center">
          <CarouselContent className=" w-full h-full">
            <CarouselItem className="flex justify-around items-center w-full h-full">
              <Image
                src={"/2.webp"}
                width={400}
                height={400}
                alt=""
                className="rounded-lg"
              />
              <div className="w-[40rem]  h-[16.75rem] pl-10">
                <p className=" w-full h-[70%]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tenetur dolore natus vero ipsum id sequi, soluta dolorem
                  explicabo, iste totam quisquam temporibus ea dicta repellat
                  reiciendis illo deserunt amet ipsam! Excepturi modi, ullam
                  voluptatibus ex accusamus iure delectus in dolores natus nulla
                  numquam illum inventore aspernatur consequuntur velit, laborum
                  vero!
                </p>
                <div className="w-full h-[30%]  flex justify-center items-center">
                  <button className="w-[15rem] h-1/2 text-red-500 ring-1 ring-rose-500 flex justify-center items-center rounded-md active:scale-90 transition-all ease-linear">
                    ดูเพิ่มเติม
                  </button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-around items-center w-full h-full">
              <Image
                src={"/1.webp"}
                width={400}
                height={400}
                alt=""
                className="rounded-lg"
              />
              <div className="w-[40rem]  h-[16.75rem] pl-10">
                <p className=" w-full h-[70%]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tenetur dolore natus vero ipsum id sequi, soluta dolorem
                  explicabo, iste totam quisquam temporibus ea dicta repellat
                  reiciendis illo deserunt amet ipsam! Excepturi modi, ullam
                  voluptatibus ex accusamus iure delectus in dolores natus nulla
                  numquam illum inventore aspernatur consequuntur velit, laborum
                  vero!
                </p>
                <div className="w-full h-[30%]  flex justify-center items-center">
                  <button className="w-[15rem] h-1/2 text-red-500 ring-1 ring-rose-500 flex justify-center items-center rounded-md active:scale-90 transition-all ease-linear">
                    ดูเพิ่มเติม
                  </button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="mt-10 w-full h-[20rem] p-10 flex justify-center items-center">
        <div className="w-1/2 h-full">
          <h1 className="text-3xl text-center">คําขวัญ เมืองอุบลราชธานี</h1>
          <p className="w-full mt-10 h-[10rem] flex justify-center items-center text-xl text-center">
            “เมืองดอกบัวงาม แม่น้ำสองสี มีปลาแซบหลาย หาดทรายแก่งหิน
            <br />
            ถิ่นไทยนักปราชญ์ ทวยราษฎร์ใฝ่ธรรม งามล้ำเทียนพรรษา
            <br />
            ผาแต้มก่อนประวัติศาสตร์ ฉลาดภูมิปัญญาท้องถิ่น
            <br />
            ดินแดนอนุสาวรีย์คนดีศรีอุบล”
          </p>
        </div>
      </div>
      <div className="bg-[#000F08] h-[7rem] flex justify-around items-center w-full">
        <div className="w-[20%] h-1/2 text-white text-lg flex justify-center items-center text-center">
          &copy; 2024 ท่องเที่ยวอุบลราชธานี
        </div>
        <div className="w-[20%] h-full flex justify-between items-center">
          <div className="w-[20%] h-1/2 text-white text-lg flex justify-center items-center text-center">
            <Link
              target="_blank"
              href={"https://www.facebook.com/phongsathon.Namsaeno.9"}
            >
              <Image src={"/facebook.png"} width={40} height={40} alt="" />
            </Link>
          </div>
          <div className="w-[20%] h-1/2 text-white text-lg flex justify-center items-center text-center">
            <Link
              target="_blank"
              href={
                "https://www.instagram.com/hairiakpomwaharameiei?igsh=d2o1aGV2bW5nMm15"
              }
            >
              <Image src={"/instagram.png"} width={40} height={40} alt="" />
            </Link>
          </div>
          <div className="w-[20%] h-1/2 text-white text-lg flex justify-center items-center text-center">
            <Link href={""} target="_blank">
              <Image src={"/line.png"} width={40} height={40} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
