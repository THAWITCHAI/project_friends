import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";
// import bcrypt from "bcrypt"; // Uncomment if you're using bcrypt for password hashing

export async function POST(req: Request) {
  try {
    // รับข้อมูล JSON จากคำขอ
    const { uemail, upwd } = await req.json();

    console.log("Email =>", uemail);
    console.log("Password =>", upwd);

    const promisePool = mysqlPool.promise();

    // ค้นหาผู้ใช้ในฐานข้อมูล
    const [rows]: any = await promisePool.query(
      "SELECT U.uid,U.uname,U.unick_name,U.uemail,U.upwd,U.uphone,R.rid,R.rname  FROM users U JOIN roles R ON R.rid = U.rid WHERE uemail = ? AND upwd = ?",
      [uemail,upwd]
    );

    // ตรวจสอบว่าพบผู้ใช้หรือไม่
    if (rows.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const user = rows[0];

    // การเปรียบเทียบรหัสผ่าน
    // ถ้าคุณใช้ bcrypt ให้ใช้โค้ดนี้
    // const isMatch = await bcrypt.compare(upwd, user.upwd);
    // if (!isMatch) {
    //   return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    // }

    // ถ้าไม่ได้ใช้ bcrypt ให้ใช้การเปรียบเทียบตรงๆ
    if (user.upwd !== upwd) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // ส่งคืนข้อมูลผู้ใช้
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
