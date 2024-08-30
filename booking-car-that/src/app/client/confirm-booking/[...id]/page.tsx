"use client";
import Sidebar from "@/app/_components/Client/Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type Props = any;

export default function Confirm_Booking({ params }: Props) {
  const { id } = params;
  // สถานที่จะไป ถนน ซอย แขวง/ตำบล อำเภอ จังหวัด รหัสไปรษณีย์
  const { data: session } = useSession();
  const [dataCar, setDataCar] = useState([]);
  const [form, setForm] = useState({
    uid: session?.user.uid,
    cid: Number(id[0]),
  });
  const router = useRouter();

  const handleChang = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const res = await fetch(`/api/booking`, {
      method: "POST",
      body: JSON.stringify(form),
    });

    if(res.ok){
      const response = await res.json()
      alert(response['massage'])
      return router.replace('/client/booking')
    }
  };

  useEffect(() => {
    fetch("/api/car")
      .then((res) => res.json())
      .then((res) => setDataCar(res));
  }, []);

  return (
    <div className="main">
      <Sidebar />
      <div className="confirm-booking">
        {dataCar.map((item, index) => {
          if (String(item["cid"]) === String(id)) {
            return (
              <form key={index} method="post" className="card-form">
                <div className="box-input">
                  <label className="text-black label">ชื่อสถานที่</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ชื่อสถานที่"
                    name="bnamelocation"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">ถนน</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ชื่อถนน"
                    name="broad"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">ซอย</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ชื่อซอย"
                    name="balley"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">แขวง/ตำบล</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ชื่อแขวง/ตำบล"
                    name="bsubdistrict"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">อำเภอ</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ชื่ออำเภอ"
                    name="bdistrict"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">จังหวัด</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ชื่อจังหวัด"
                    name="province"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">รหัสไปรษณีย์</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ตัวอย่าง 34220"
                    name="bzip_code"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">วันที่รับ</label>
                  <input
                    className="input"
                    type="date"
                    name="bdate_s"
                    onChange={handleChang}
                  />
                </div>
                <div className="box-input">
                  <label className="text-black label">วันที่คืน</label>
                  <input
                    className="input"
                    type="date"
                    placeholder="ชื่อสถานที่"
                    name="bdate_e"
                    onChange={handleChang}
                  />
                </div>
                <button
                  className="btn bg-green-500  hover:bg-green-600 Link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (Object.keys(form).length < 9) {
                      alert("กรุณากรอกให้ครบ!!");
                    } else {
                      handleSubmit();
                    }
                  }}
                >
                  ยืนยันการจอง
                </button>
              </form>
            );
          }
        })}
      </div>
    </div>
  );
}
