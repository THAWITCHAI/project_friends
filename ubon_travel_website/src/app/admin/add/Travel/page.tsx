"use client";
import travelModule from "@/app/lib/globalApi";
import React, { useEffect, useState } from "react";

type Props = {};

export default function AddTravel({}: Props) {
  const [dataTypeTravel, setDataTypeTravel] = useState([]);
  const [form, setForm] = useState({});

  const handleChang = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log(form);
    console.log(Object.keys(form).length);
    if (Object.keys(form).length < 15) {
      return alert("กรุณากรอกให้ครบ!!");
    } else {
      const res = await fetch("/api/travel", {
        method: "POST",
        body: JSON.stringify(form),
      });
      if(res.ok){
        const resp = await res.json()
        return alert(resp['massage'])
      }
    }
    return;
  };

  useEffect(() => {
    travelModule.getTypeTravels().then((res: any) => setDataTypeTravel(res));
  }, []);

  return (
    <div className="w-full h-fit overflow-x-scroll">
      <h1 className="border-b h-[3rem] w-1/2 flex justify-start items-center p-2 text-xl font-light">
        สถานที่ท่องเที่ยว
      </h1>
      <div className="w-full h-fit mt-5 flex justify-center items-center">
        <form className="shadow-2xl w-[60%] h-fit p-10 rounded-xl ml-20 mr-20 mb-10">
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">ชื่อ</li>
          </div>
          <input
            required
            name="travel_name"
            onChange={handleChang}
            type="text"
            className="mb-3 w-full border h-[3rem] p-2 rounded-lg outline-none"
            placeholder="กรอกชื่อสถานที่ท่องเที่ยว"
          />
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">ที่อยู่</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              required
              name="travel_road"
              onChange={handleChang}
              type="text"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="ถนน"
            />
            <input
              required
              name="travel_alley"
              onChange={handleChang}
              type="text"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="ซอย"
            />
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              required
              name="travel_province"
              onChange={handleChang}
              type="text"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="จังหวัด"
            />
            <input
              required
              name="travel_district"
              onChange={handleChang}
              type="text"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="อำเภอ"
            />
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              required
              name="travel_subdistrict"
              onChange={handleChang}
              type="text"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="ตำบล"
            />
            <input
              required
              name="travel_post"
              onChange={handleChang}
              type="text"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="รหัสไปรษณีย์"
            />
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">ค่าธรรมเนียมเข้าชม</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              required
              name="travel_adult_fee"
              onChange={handleChang}
              type="number"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="ผู้ใหญ่"
            />

            <input
              required
              name="travel_child_fee"
              onChange={handleChang}
              type="number"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="เด็ก"
            />
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">ข้อมูลติดต่อ</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              required
              name="travel_call"
              onChange={handleChang}
              type="number"
              className="w-[100%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="เบอร์"
            />
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">เวลาทำการ</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              required
              name="travel_business_hours_s"
              onChange={handleChang}
              type="time"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
            />
            <input
              required
              name="travel_business_hours_e"
              onChange={handleChang}
              type="time"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
            />
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">ตำแหน่ง</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              required
              name="travel_url"
              onChange={handleChang}
              type="url"
              className="w-full border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="URL"
            />
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">ประเภทสถานที่</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center ">
            <select
              className="w-1/2 border h-[3rem] p-2 rounded-lg outline-none"
              name="type_travel_id"
              onChange={handleChang}
            >
              {dataTypeTravel.map((item, index) => {
                return (
                  <option
                    key={index}
                    className="outline-none"
                    value={item["type_travel_id"]}
                  >
                    {item["type_travel_name"]}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">ข้อมูลทั่วไป</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <textarea
              name="travel_background"
              onChange={handleChang}
              className="w-full border h-[20rem] p-2 rounded-lg outline-none overflow-x-scroll"
              placeholder="ความเป็นมาหรือแนะนำ"
            ></textarea>
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">เครื่องอำนวยความสะดวก</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <div className="w-[18%] h-10 pl-5 flex justify-between items-center">
              <input
                required
                onChange={handleChang}
                type="checkbox"
                name="travel_facilies_1"
                value={"ที่จอด"}
              />{" "}
              <label htmlFor="">ที่จอดรถ</label>
            </div>
            <div className="w-[18%] h-10 pl-5 flex justify-between items-center">
              <input
                required
                onChange={handleChang}
                type="checkbox"
                name="travel_facilies_2"
                value={"ร้านค้า"}
              />{" "}
              <label htmlFor="">ร้านค้า</label>
            </div>
            <div className="w-[18%] h-10 pl-5 flex justify-between items-center">
              <input
                required
                onChange={handleChang}
                type="checkbox"
                name="travel_facilies_3"
                value={"ห้องน้ำ"}
              />{" "}
              <label htmlFor="">ห้องน้ำ</label>
            </div>
            <div className="w-[24%] h-10 pl-5 flex justify-between items-center">
              <input
                required
                onChange={handleChang}
                type="checkbox"
                name="travel_facilies_4"
                value={"รถสาธารณะ"}
              />{" "}
              <label htmlFor="">รถสาธารณะ</label>
            </div>
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">
              รูปสถานที่ท่องเที่ยว 1{" "}
              <span className="text-blue-500"> ( ต้องมี )</span>
            </li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              onChange={handleChang}
              required
              name="travel_image_1"
              type="file"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
            />
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">
              รูปสถานที่ท่องเที่ยว 2{" "}
              <span className="text-red-500"> ( ถ้ามี )</span>
            </li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              onChange={handleChang}
              required
              name="travel_image_2"
              type="file"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
            />
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">
              รูปสถานที่ท่องเที่ยว 3{" "}
              <span className="text-red-500"> ( ถ้ามี )</span>
            </li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              onChange={handleChang}
              required
              name="travel_image_3"
              type="file"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
            />
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">ยืนยันการเพิ่ม</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <button
              className="w-[32%] bg-green-500 text-white hover:bg-green-600 h-[3rem] p-2 rounded-lg outline-none active:scale-90 transition-all ease-in-out"
              onClick={(e) => {
                e.preventDefault();
                return history.back();
              }}
            >
              กลับ
            </button>
            <button
              className="w-[32%] bg-red-500 h-[3rem] p-2 rounded-lg outline-none active:scale-90 transition-all ease-in-out text-white hover:bg-red-600"
              type="reset"
            >
              รีเซ็ต
            </button>
            <button
              className="hover:bg-blue-600 w-[32%] bg-blue-500 text-white h-[3rem] p-2 rounded-lg outline-none active:scale-90 transition-all ease-in-out"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              ยืนยันการเพิ่ม
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
