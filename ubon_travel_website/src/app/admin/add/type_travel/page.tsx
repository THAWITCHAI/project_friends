"use client";
import React, { useState } from "react";

type Props = {};

export default function Type_Travel({}: Props) {
  const [category, setCategory] = useState(0);
  const [name, setName] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(Number(event.target.value));
  };

  const handleSubmit = async () => {
    if (category === 1) {
      const res = await fetch("/api/type_travels", {
        method: "POST",
        body: JSON.stringify({ type_travel_name: name }),
      });
      const resp = await res.json()
      if(res.ok){
        return alert(resp['massage'])
      }
    }
    return;
  };

  return (
    <div className="w-full h-full">
      <h1 className="border-b h-[3rem] w-1/2 flex justify-start items-center p-2 text-xl font-light">
        ประเภทสถานที่
      </h1>
      <div className="mt-5 w-full h-[90%] p-2 flex justify-center items-start">
        <div className="shadow-lg w-1/2 h-fit p-5">
          <form action="" className="w-full h-fit">
            <input
              type="text"
              className="border rounded-md h-[2.5rem] w-full outline-none p-2"
              placeholder="ชื่อ"
              onChange={(e) => setName(e.target.value)}
            />
            <h1 className="p-2 mt-5">เลือกประเภทที่จะเพิ่ม</h1>
            <div className="w-1/2 h-[2rem] p-2 flex justify-between items-center">
              <div className="w-[40%] p-2 flex justify-between items-center">
                <input
                  type="radio"
                  name="category"
                  value={1}
                  onChange={handleRadioChange}
                  className="outline-none"
                />{" "}
                <span>สถานที่</span>
              </div>
              {/* <div className="w-[40%] p-2 flex justify-between items-center">
                <input
                  type="radio"
                  name="category"
                  value={2}
                  onChange={handleRadioChange}
                  className="outline-none"
                />{" "}
                <span>ที่พัก</span>
              </div> */}
            </div>
            <button
              className="bg-blue-500 w-full mt-5 h-[3.5rem] rounded-lg text-white"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              เพิ่ม
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
