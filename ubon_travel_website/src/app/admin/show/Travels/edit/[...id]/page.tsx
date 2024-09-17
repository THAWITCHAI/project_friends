"use client";
import travelModule from "@/app/lib/globalApi";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

type Props = {};

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

export default function AddTravel({ params }: any) {
  const router = useRouter()
  const { id } = params;
  const [dataTypeTravel, setDataTypeTravel] = useState([]);
  const [dataTravels, setDataTravels] = useState<TravelDetail[]>([])

  const [form, setForm] = useState({ travel_id: id });
  const [travel_image_1, setTravel_image_1] = useState<String | null>(null);
  const [travel_image_2, setTravel_image_2] = useState<String | null>('-');
  const [travel_image_3, setTravel_image_3] = useState<String | null>('-');
  console.log(form)

  useEffect(() => {
    travelModule.getTravels().then((res) => setDataTravels(res));
    travelModule.getTypeTravels().then((res: any) => setDataTypeTravel(res));
  }, []);

  const result = dataTravels.filter((item) => item.travel_id == id)
  console.log(result)



  const handleFileChange_1 = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTravel_image_1(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange_2 = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTravel_image_2(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange_3 = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTravel_image_3(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChang = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async () => {
    console.log(2)
    const dataForm = Object.assign({}, form, { travel_image_1: travel_image_1 }, { travel_image_2: travel_image_2 }, { travel_image_3: travel_image_3 })
    if (travel_image_1 != null || travel_image_1 != '-' || travel_image_1 != '') {
      const res = await fetch("/api/travel", {
        method: "PUT",
        body: JSON.stringify(dataForm),
      });
      if (res.ok) {
        const resp = await res.json()
        return alert(resp['massage'])
      }
      return
    } else {
      const res = await fetch("/api/travel", {
        method: "PUT",
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const resp = await res.json()
        return alert(resp['massage'])
      }
    }
    return;
  };

  const handleDelete = async () => {
    const res = await fetch(`/api/travel`, {
      method: "DELETE",
      body: JSON.stringify(form)
    });
    if (res.ok) {
      const resp = await res.json()
      return alert(resp['massage'])
    }
    return;
  }




  return (
    <div className="w-full h-fit overflow-x-scroll">
      <h1 className="border-b h-[3rem] w-1/2 flex justify-start items-center p-2 text-xl font-light">
        แก้ไข สถานที่ท่องเที่ยว
      </h1>
      <div className="w-full h-fit mt-5 flex justify-center items-center">
        {
          result.map((item, index) => {
            return (
              <form className="shadow-2xl w-[60%] h-fit p-10 rounded-xl ml-20 mr-20 mb-10" key={index}>
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
                  defaultValue={String(item.travel_name)}
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
                    defaultValue={String(item.travel_road)}

                  />
                  <input
                    required
                    name="travel_alley"
                    onChange={handleChang}
                    type="text"
                    className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
                    placeholder="ซอย"
                    defaultValue={String(item.travel_alley)}

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
                    defaultValue={String(item.travel_province)}

                  />
                  <input
                    required
                    name="travel_district"
                    onChange={handleChang}
                    type="text"
                    className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
                    placeholder="อำเภอ"
                    defaultValue={String(item.travel_district)}

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
                    defaultValue={String(item.travel_subdistrict)}

                  />
                  <input
                    required
                    name="travel_post"
                    onChange={handleChang}
                    type="text"
                    className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
                    placeholder="รหัสไปรษณีย์"
                    defaultValue={String(item.travel_post)}

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
                    defaultValue={String(item.travel_adult_fee)}

                  />

                  <input
                    required
                    name="travel_child_fee"
                    onChange={handleChang}
                    type="number"
                    className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
                    placeholder="เด็ก"
                    defaultValue={String(item.travel_child_fee)}

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
                    type="text"
                    className="w-[100%] border h-[3rem] p-2 rounded-lg outline-none"
                    placeholder="เบอร์"
                    defaultValue={String(item.travel_call)}

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
                    defaultValue={String(item.travel_business_hours_s)}

                    className="w-[49%] border h-[3rem] p-2 rounded-lg outline-none"
                  />
                  <input
                    required
                    name="travel_business_hours_e"
                    onChange={handleChang}
                    type="time"
                    defaultValue={String(item.travel_business_hours_e)}
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
                    defaultValue={String(item.travel_url)}
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
                    value={String(item.type_travel_id)}
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
                    defaultValue={String(item.travel_background)}
                  ></textarea>
                </div>
                <div className="w-full h-fit flex justify-start items-center">
                  <li className="w-full h-[2rem] ">เครื่องอำนวยความสะดวก</li>
                </div>
                <div className="w-full h-fit mb-3 flex justify-between items-center">
                  <div className="w-[18%] h-10 pl-5 flex justify-between items-center">
                    {
                      item.travel_facilies_1 != null && (
                        <input
                          required
                          onChange={handleChang}
                          type="checkbox"
                          name="travel_facilies_1"
                          value={"ที่จอด"}
                          checked
                        />
                      )
                    }
                    {
                      item.travel_facilies_1 == null && (
                        <input
                          required
                          onChange={handleChang}
                          type="checkbox"
                          name="travel_facilies_1"
                          value={"ที่จอด"}
                        />
                      )
                    }
                    <label htmlFor="">ที่จอดรถ</label>
                  </div>
                  <div className="w-[18%] h-10 pl-5 flex justify-between items-center">
                    {
                      item.travel_facilies_2 != null && (
                        <input
                          required
                          onChange={handleChang}
                          type="checkbox"
                          name="travel_facilies_1"
                          value={"ที่จอด"}
                          checked
                        />
                      )
                    }
                    {
                      item.travel_facilies_2 == null && (
                        <input
                          required
                          onChange={handleChang}
                          type="checkbox"
                          name="travel_facilies_1"
                          value={"ที่จอด"}
                        />
                      )
                    }
                    <label htmlFor="">ร้านค้า</label>
                  </div>
                  <div className="w-[18%] h-10 pl-5 flex justify-between items-center">
                    {
                      item.travel_facilies_3 != null && (
                        <input
                          required
                          onChange={handleChang}
                          type="checkbox"
                          name="travel_facilies_1"
                          value={"ที่จอด"}
                          checked
                        />
                      )
                    }
                    {
                      item.travel_facilies_3 == null && (
                        <input
                          required
                          onChange={handleChang}
                          type="checkbox"
                          name="travel_facilies_1"
                          value={"ที่จอด"}
                        />
                      )
                    }
                    <label htmlFor="">ห้องน้ำ</label>
                  </div>
                  <div className="w-[15%] h-10 pl-5 flex justify-between items-center">
                    {
                      item.travel_facilies_4 != null && (
                        <input
                          required
                          onChange={handleChang}
                          type="checkbox"
                          name="travel_facilies_1"
                          value={"ที่จอด"}
                          checked
                        />
                      )
                    }
                    {
                      item.travel_facilies_4 == null && (
                        <input
                          required
                          onChange={handleChang}
                          type="checkbox"
                          name="travel_facilies_1"
                          value={"ที่จอด"}
                        />
                      )
                    }
                    <label htmlFor="">อื่นๆ</label>
                  </div>
                </div>
                <div className="w-full h-fit flex justify-start items-center">
                  <li className="w-full h-[2rem] ">
                    รูปสถานที่ท่องเที่ยว 1
                    <span className="text-blue-500"> ( ต้องมี )</span>
                  </li>
                </div>
                <div className="w-full h-fit mb-3 flex justify-between items-center">
                  <input
                    onChange={handleFileChange_1}
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
                    onChange={handleFileChange_2}

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
                    onChange={handleFileChange_3}

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
                    onClick={() => {
                      setForm({ travel_id: id })
                      handleDelete()
                      return history.back()
                    }}
                  >
                    ลบ
                  </button>
                  <button
                    className="hover:bg-yellow-600 w-[32%] bg-yellow-500 text-white h-[3rem] p-2 rounded-lg outline-none active:scale-90 transition-all ease-in-out"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    แก้ไข
                  </button>
                </div>
              </form>
            )
          })
        }
      </div>
    </div>
  );
}
