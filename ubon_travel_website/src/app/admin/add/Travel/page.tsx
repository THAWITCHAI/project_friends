"use client";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type Props = {};

export default function AddTravel({}: Props) {
  return (
    <div className="w-full h-fit overflow-x-scroll">
      <h1 className="border-b h-[3rem] w-1/2 flex justify-start items-center p-2 text-xl font-light">
        เพิ่มข้อมูลสถานที่
      </h1>
      <div className="w-full h-fit mt-5 flex justify-center items-center">
        <form className="shadow-2xl w-[60%] h-fit p-10 rounded-xl ml-20 mr-20 mb-10">
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">ชื่อ</li>
          </div>
          <input
            type="text"
            className="mb-3 w-full border h-[3rem] p-2 rounded-lg outline-none"
            placeholder="กรอกชื่อสถานที่ท่องเที่ยว"
          />
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">ที่อยู่</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              type="text"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="จังหวัด"
            />
            <input
              type="text"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="อำเภอ"
            />
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              type="text"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="ตำบล"
            />
            <input
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
              type="number"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="ผู้ใช้"
            />

            <input
              type="number"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="เด็ก"
            />
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">เวลาทำการ</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              type="time"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="ผู้ใช้"
            />
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">ตำแหน่ง</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              type="text"
              className="w-full border h-[3rem] p-2 rounded-lg outline-none"
              placeholder="ลิ้งพิกัด"
            />
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">ประเภทสถานที่</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <select className="w-1/2 border h-[3rem] p-2 rounded-lg outline-none">
              <option className="outline-none" value="">
                วัด
              </option>
              <option className="outline-none" value="">
                ทะเล
              </option>
              <option className="outline-none" value="">
                คาเฟ่
              </option>
            </select>
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">ข้อมูลทั่วไป</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <textarea
              className="w-full border h-[20rem] p-2 rounded-lg outline-none overflow-x-scroll"
              placeholder="ความเป็นมาหรือแนะนำ"
            ></textarea>
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">เครื่องอำนวยความสะดวก</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <div className="w-[18%] h-10 pl-5 flex justify-between items-center">
              <input type="checkbox" /> <label htmlFor="">ที่จอดรถ</label>
            </div>
            <div className="w-[18%] h-10 pl-5 flex justify-between items-center">
              <input type="checkbox" /> <label htmlFor="">ร้านค้า</label>
            </div>
            <div className="w-[18%] h-10 pl-5 flex justify-between items-center">
              <input type="checkbox" /> <label htmlFor="">ห้องน้ำ</label>
            </div>
            <div className="w-[24%] h-10 pl-5 flex justify-between items-center">
              <input type="checkbox" /> <label htmlFor="">รถสาธารณะ</label>
            </div>
          </div>
          <div className="w-full h-fit flex justify-start items-center">
            <li className="w-full h-[2rem] ">รูปสถานที่ท่องเที่ยว</li>
          </div>
          <div className="w-full h-fit mb-3 flex justify-between items-center">
            <input
              type="file"
              className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
