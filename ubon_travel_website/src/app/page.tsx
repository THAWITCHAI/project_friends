"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Your existing imports
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "./_components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (String(session?.user.role) === "1") {
    return router.replace("/admin/show/Travels");
  }

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // Settings for React Slick Carousel
  const settings = {
    infinite: true, // Enables loop
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Auto slide
    autoplaySpeed: 5000, // 10 seconds
  };
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="fixed z-[1] h-fit w-full">
        <Navbar />
      </div>
      <Slider
        {...settings}
        className="w-[100%] h-[100%] flex justify-center items-center relative"
      >
        <div className="w-[100vw] h-[100vh] back-title  bg-[url(/back.jpg)]">
          <div className="w-full h-full bg flex justify-end items-center bg-[rgba(0,0,0,0.5)]">
            <div className="w-1/2 h-full flex justify-center items-center">
              <div className="w-full h-[70%] p-10">
                <h1 className="w-full h-fit text-center text-7xl my-10 text-yellow-500 title">
                  แห่เทียนอุบลราชธานี
                </h1>
                <p className="w-full text-white text-center h-fit p-10">
                  เที่ยวอุบลราชธานี - ดินแดนแห่งธรรมชาติและวัฒนธรรมที่งดงาม!
                  ชมพระอาทิตย์ขึ้นที่ผาแต้ม เดินสำรวจสามพันโบก
                  สักการะพระธาตุหนองบัว และร่วมประเพณีแห่เทียนพรรษา
                  ลิ้มรสอาหารท้องถิ่นอีสานแท้ๆ และสัมผัสความอบอุ่นจากคนท้องถิ่น
                  มาค้นพบเสน่ห์ที่ไม่เหมือนใครในอุบลราชธานี!
                </p>
                <div className="w-full h-[5rem] flex justify-center items-center">
                  <Button className="border bg-color-none hover:bg-color-none active:scale-90 transition-all ease-in-out font-thin">
                    <Link href={"/all-travels"}>ดูสถานที่ทั้งหมด</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100vw] h-[100vh] back-title  bg-[url(/utayan.jpg)]">
          <div className="w-full h-full bg flex justify-end items-center bg-[rgba(0,0,0,0.5)]">
            <div className="w-1/2 h-full flex justify-center items-center">
              <div className="w-full h-[70%] p-10">
                <h1 className="w-full h-fit text-center text-7xl my-10 text-yellow-500 title">
                  อุทยานแห่งชาติ
                </h1>
                <p className="w-full text-white text-center h-fit p-10">
                  หากคุณกำลังมองหาสถานที่ท่องเที่ยวที่เต็มไปด้วยความงดงามของธรรมชาติและความสงบสุข
                  อุบลราชธานีเป็นจุดหมายปลายทางที่คุณไม่ควรพลาด
                  ด้วยอุทยานแห่งชาติที่สวยงามมากมาย
                  คุณจะได้สัมผัสกับทิวทัศน์ที่น่าทึ่งและประสบการณ์ท่องเที่ยวที่ไม่มีวันลืม
                </p>
                <div className="w-full h-[5rem] flex justify-center items-center">
                  <Button className="border bg-color-none hover:bg-color-none active:scale-90 transition-all ease-in-out font-thin">
                    ดูสถานที่อื่นๆ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100vw] h-[100vh] back-title  bg-[url(/publice.avif)]">
          <div className="w-full h-full bg flex justify-end items-center bg-[rgba(0,0,0,0.5)]">
            <div className="w-1/2 h-full flex justify-center items-center">
              <div className="w-full h-[70%] p-10">
                <h1 className="w-full h-fit text-center text-7xl my-10 text-yellow-500 title">
                  สวนสาธารณะ
                </h1>
                <p className="w-full text-white text-center h-fit p-10">
                  อุบลราชธานีมีสวนสาธารณะที่สวยงามและร่มรื่นหลายแห่ง
                  เหมาะสำหรับการพักผ่อน ออกกำลังกาย หรือใช้เวลากับครอบครัว
                  นี่คือ 5 สถานที่ที่น่าสนใจ คือ สวนสาธารณะห้วยม่วง
                  สวนเฉลิมพระเกียรติ 80 พรรษา สวนรุกขชาติอุบลวนารมย์
                  สวนสาธารณะทุ่งศรีเมือง และ สวนสมเด็จพระศรีนครินทร์
                </p>
                <div className="w-full h-[5rem] flex justify-center items-center">
                  <Button className="border bg-color-none hover:bg-color-none active:scale-90 transition-all ease-in-out font-thin">
                    ดูสถานที่อื่นๆ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100vw] h-[100vh] back-title  bg-[url(/numthok_1.jpg)]">
          <div className="w-full h-full bg flex justify-end items-center bg-[rgba(0,0,0,0.5)]">
            <div className="w-1/2 h-full flex justify-center items-center">
              <div className="w-full h-[70%] p-10">
                <h1 className="w-full h-fit text-center text-7xl my-10 text-yellow-500 title">
                  น้ำตก
                </h1>
                <p className="w-full text-white text-center h-fit p-10">
                  อุบลราชธานีมีน้ำตกที่สวยงามมากมาย
                  เหมาะสำหรับผู้ที่ชื่นชอบธรรมชาติและความงดงามของสายน้ำ
                  นี่คือตัวอย่างน้ำตกที่น่าสนใจ 5 แห่ง: น้ำตกห้วยหลวง
                  น้ำตกแสงจันทร์ (น้ำตกรู) น้ำตกสร้อยสวรรค์ น้ำตกตาดโตน และ
                  น้ำตกแก่งลำดวน
                </p>
                <div className="w-full h-[5rem] flex justify-center items-center">
                  <Button className="border bg-color-none hover:bg-color-none active:scale-90 transition-all ease-in-out font-thin">
                    ดูสถานที่อื่นๆ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add more Carousel Items as needed */}
      </Slider>
    </div>
  );
}
