"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

type Props = {};

export default function Home({}: Props) {
  const [form, setForm] = useState({});
  const [base64_profile, setBase64_profile] = useState<String | null>(null);
  const [base64, setBase64] = useState<String | null>(null);

  const handleFileProfileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64_profile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileDiveChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64(reader.result as string);
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
    if (
      Object.keys(form).length <= 6 &&
      base64 == null &&
      base64_profile == null
    ) {
      return alert("กรุณากรอกให้ครับ!!");
    } else {
      const data = Object.assign(
        {},
        form,
        { uprofile: base64_profile },
        { udive: base64 },
      );
      await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => alert(res["massage"]));
    }
  };

  const [select, setSelete] = useState(0);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSubmitLogin = () => {
    if (email === "" && pwd === "") {
      return alert("อีเมล หรือ รหัสผ่านไม่ถูกต้อง");
    } else {
      signIn("credentials", {
        username: email,
        password: pwd,
        redirect: true,
        callbackUrl: "/login",
      });
    }
  };
  if (status === "unauthenticated" || status === "loading") {
    return (
      <div className="home">
        <div className="box-home">
          {select == 0 ? (
            <div className="login">
              <div className="logo-image">
                <Image
                  src={"/people.png"}
                  width={128}
                  height={128}
                  alt="Loading"
                  className="Image"
                  placeholder="empty"
                />
              </div>
              <form action="" method="post" className="form">
                <div className="box-email">
                  <div className="input-email">
                    <Image
                      src={"/user.png"}
                      width={24}
                      height={24}
                      alt="Loading"
                    />
                    <input
                      type="email"
                      required
                      placeholder="JohnDoe@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="box-email">
                  <div className="input-email">
                    <Image
                      src={"/padlock.png"}
                      width={24}
                      height={24}
                      alt="Loading"
                    />
                    <input
                      type="password"
                      required
                      placeholder="Your Password"
                      onChange={(e) => setPwd(e.target.value)}
                    />
                  </div>
                </div>
                <div className="box-btn">
                  <div className="input-submit signin">
                    <button
                      className="btn-1"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmitLogin();
                      }}
                    >
                      เข้าสู่ระบบ
                    </button>
                  </div>
                  <div className="input-submit">
                    <button
                      className="btn-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelete(1);
                      }}
                    >
                      ลงทะเบียน
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="register">
              <div className="register-image">
                <Image
                  className="Image"
                  src={"/add-user.png"}
                  alt=""
                  width={125}
                  height={125}
                />
              </div>
              <form className="form-register">
                <div className="input-register">
                  <div className="input-1">
                    <label htmlFor="">ชื่อผู้ใช้</label>
                    <br />
                    <input
                      onChange={handleChang}
                      required
                      className="input-text"
                      type="text"
                      name="uname"
                      placeholder="กรุณากรอกให้ครบ"
                    />
                  </div>
                  <div className="input-1">
                    <label htmlFor="">ชื่อเล่น</label>
                    <br />
                    <input
                      onChange={handleChang}
                      required
                      className="input-text"
                      type="text"
                      name="unick_name"
                      placeholder="กรุณากรอกให้ครบ"
                    />
                  </div>
                  <div className="input-1">
                    <label htmlFor="">อีเมลล์</label>
                    <br />
                    <input
                      onChange={handleChang}
                      required
                      className="input-text"
                      type="text"
                      name="uemail"
                      placeholder="กรุณากรอกให้ครบ"
                    />
                  </div>
                  <div className="input-1">
                    <label htmlFor="">รหัสผ่าน</label>
                    <br />
                    <input
                      onChange={handleChang}
                      required
                      className="input-text"
                      type="text"
                      name="upwd"
                      placeholder="กรุณากรอกให้ครบ"
                    />
                  </div>
                  <div className="input-1">
                    <label htmlFor="">ยืยยันรหัสผ่าน</label>
                    <br />
                    <input
                      required
                      className="input-text"
                      type="text"
                      placeholder="กรุณากรอกให้ครบ"
                    />
                  </div>
                  <div className="input-1">
                    <label htmlFor="">เบอร์โทร</label>
                    <br />
                    <input
                      onChange={handleChang}
                      required
                      className="input-text"
                      type="text"
                      name="uphone"
                      placeholder="กรุณากรอกให้ครบ"
                    />
                  </div>
                  <div className="input-1">
                    <label htmlFor="">ใบอนุญาติการขับขี่</label>
                    <br />
                    <input
                      className="input-file"
                      type="file"
                      required
                      onChange={handleFileDiveChange}
                    />
                  </div>
                  <div className="input-1">
                    <label htmlFor="">รูปโปรไฟล์</label>
                    <br />
                    <input
                      className="input-file"
                      type="file"
                      required
                      onChange={handleFileProfileChange}
                    />
                  </div>
                </div>
                <div className="btn-register">
                  <div className="btn-1">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                      }}
                    >
                      ยืนยันลงทะเบียน
                    </button>
                  </div>
                  <div className="btn-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSelete(0);
                      }}
                    >
                      กลับไป เข้าสู่ระบบ
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
  if (status === "authenticated" && session) {
    if (session.user.rname == "User") {
      return router.replace("/client/booking");
    }
    if (session.user.rname == "Admin") {
      return router.replace("/admin/welcome");
    }
  }
}
