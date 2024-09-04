"use client";
import Navbar from "@/app/_components/Navbar";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

export default function Login({}: Props) {
  const [select, setSelect] = useState(1);
  const [name, setName] = useState("");
  const [password, setPassword] = useState(""); // เพิ่ม state สำหรับ password
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSubmitLogin = () => {
    if (name === "" && password === "") {
      alert("กรอกให้ครบ!!");
      return;
    }
    signIn("credentials", {
      email: name,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  if (status === "unauthenticated") {
    return (
      <div className="w-full h-full">
        <Navbar/>
        <div className="h-[30rem] mt-10 p-5 flex justify-center items-center">
        <div className="relative w-[70%] h-full rounded-3xl overflow-hidden shadow-2xl">
          {/* Container for the slide animation */}
          <div
            className={`absolute w-full h-full flex transition-transform duration-700 ease-in-out ${
              select === 1 ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className=" w-full h-full rounded-lg flex justify-center items-center transition-all ease-in-out">
              <div className="bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] w-1/2 h-full transition-all ease-in-out p-5 flex justify-center items-center">
                <div className=" w-full h-fit">
                  <h1 className=" w-full mt-10 h-[5rem] text-3xl flex justify-center items-center text-white font-extrabold">
                    Hello, Friend!
                  </h1>
                  <p className="h-[5rem] text-white text-center flex justify-center items-center text-xl">
                    Enter Your personal details and start journey with us
                  </p>
                  <div className="w-full h-[10rem] flex justify-center items-center">
                    <button
                      className="active:scale-90 transition-all ease-in-out ring-1 ring-white w-[15rem] h-[3.5rem] rounded-full uppercase text-xl font-bold text-white"
                      onClick={() => {
                        setSelect(2);
                      }}
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-full w-1/2">
                <h1 className=" w-full h-[20%] flex justify-center items-center text-3xl font-extrabold">
                  Sign in
                </h1>
                <form className=" h-4/5 w-full">
                  <div className=" h-[50%] w-full p-5">
                    <input
                      type="email"
                      className="w-full h-[3.5rem] bg-[#eee] outline-none pl-5 text-xl rounded-xl"
                      placeholder="Email"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="password" // เปลี่ยนเป็น type="password" เพื่อให้เข้ากับการใช้งานของ input นี้
                      className="w-full h-[3.5rem] mt-[5%] bg-[#eee] outline-none pl-5 text-xl rounded-xl"
                      placeholder="Password"
                      value={password} // กำหนดให้ input นี้เป็น controlled component
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="h-[30%] w-full flex justify-center items-center">
                    <button
                      className="active:scale-90 transition-all ease-in-out rounded-full h-[3.5rem] w-1/2 bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] uppercase text-white font-extrabold"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmitLogin();
                        setName("");
                        setPassword(""); // รีเซ็ตค่า password เมื่อ submit
                      }}
                      type="submit"
                    >
                      sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className={`absolute w-full h-full flex transition-transform duration-700 ease-in-out ${
              select === 2 ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className=" w-full h-full rounded-lg flex justify-center items-center transition-all ease-in-out">
              <div className="h-full w-1/2">
                <h1 className=" w-full h-[20%] flex justify-center items-center text-3xl font-extrabold">
                  Register
                </h1>
                <form className=" h-4/5 w-full">
                  <div className=" h-[50%] w-full p-5">
                    <input
                      type="text"
                      className="w-full h-[3.5rem] bg-[#eee] outline-none pl-5 text-xl rounded-xl"
                      placeholder="Username"
                    />
                    <input
                      type="text"
                      className="w-full h-[3.5rem] mt-[2%] bg-[#eee] outline-none pl-5 text-xl rounded-xl"
                      placeholder="Email"
                    />
                    <input
                      type="text"
                      className="w-full h-[3.5rem] mt-[2%] bg-[#eee] outline-none pl-5 text-xl rounded-xl"
                      placeholder="Password"
                    />
                  </div>
                  <div className="h-[50%] w-full flex justify-center items-center">
                    <button
                      className="rounded-full h-[3.5rem] w-1/2 bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] uppercase text-white font-extrabold active:scale-90 transition-all ease-in-out"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      type="submit"
                    >
                      sign up
                    </button>
                  </div>
                </form>
              </div>
              <div className="bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] w-1/2 h-full transition-all ease-in-out p-5 flex justify-center items-center">
                <div className=" w-full h-fit">
                  <h1 className=" w-full mt-10 h-[5rem] text-3xl flex justify-center items-center text-white font-extrabold">
                    Welcome Back!
                  </h1>
                  <p className="h-[5rem] text-white text-center flex justify-center items-center text-xl">
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <div className="w-full h-[10rem] flex justify-center items-center">
                    <button
                      className="ring-1 ring-white w-[15rem] h-[3.5rem] rounded-full uppercase text-xl font-bold text-white active:scale-90 transition-all ease-in-out"
                      onClick={() => {
                        setSelect(1);
                      }}
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  if (status === "authenticated") {
    return router.replace("/");
  }
  if (status === "loading") {
    return <div>Loading...</div>;
  }
}
