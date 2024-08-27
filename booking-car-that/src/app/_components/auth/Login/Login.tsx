"use client";
import Image from "next/image";
import "./home.css";
import Link from "next/link";
import { useState } from "react";
import { signIn} from "next-auth/react";
export default function Login() {
  const [email, setEmail] = useState(String);
  const [pwd, setPwd] = useState(String);

  const handleSubmit = () => {
    if (email === "" && pwd === "") {
      return alert("กรอกให้ครบ");
    } else {
      signIn("credentials", {
        username: email,
        password: pwd,
        redirect: true,
        callbackUrl: "/",
      });
    }
  };
    return (
      <div className="w-screen h-screen home-page">
        <div className="home-screen flex justify-center items-center">
          <form
            action=""
            method="post"
            className="w-full h-full flex justify-center items-center"
          >
            <div className="login-card w-1/3 h-3/4 rounded-3xl overflow-hidden">
              <div className="w-full h-1/3 flex justify-center items-center">
                <Image
                  src={"/people.png"}
                  width={100}
                  height={100}
                  alt=""
                  className="image-login"
                />
              </div>
              <div className=" h-1/4 w-full box-input p-5">
                <div className="input flex justify-center items-center overflow-hidden">
                  <div className="w-1/6 h-full flex justify-center items-center">
                    <Image src={"/user.png"} width={24} height={24} alt="" />
                  </div>
                  <input
                    type="text"
                    className="h-full w-full pl-3 text-x"
                    placeholder="อีเมล"
                    name="uemail"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="input flex justify-center items-center overflow-hidden">
                  <div className="w-1/6 h-full flex justify-center items-center">
                    <Image src={"/padlock.png"} width={24} height={24} alt="" />
                  </div>
                  <input
                    type="password"
                    className="h-full w-full pl-3 text-x"
                    placeholder="รหัสผ่าน"
                    name="upwd"
                    onChange={(e) => {
                      setPwd(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className=" h-1/3 w-full">
                <div className=" w-full h-1/3 p-2 flex justify-center items-center">
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    className="shadow-lg w-1/2 h-full flex justify-center items-center text-white bg-green-500 text-xl rounded-full active:scale-90 transition-all"
                  >
                    เข้าสู่ระบบ
                  </button>
                </div>
                <div className=" w-full h-1/3 p-2 flex justify-center items-center border-t">
                  <Link
                    href={""}
                    className="shadow-lg w-1/2 h-full flex justify-center items-center text-white bg-blue-500 text-xl rounded-full active:scale-90 transition-all"
                  >
                    <button>ลงทะเบียน</button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}
