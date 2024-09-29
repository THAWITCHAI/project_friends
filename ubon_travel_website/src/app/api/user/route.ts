import { mysqlPool } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const { email, password } = await req.json();
  const promisePool = mysqlPool.promise();
  const [user] = await promisePool.query("SELECT * FROM users");
  console.log(user)

  const result = user.filter(
    (item) => password === item["password"] && email === item["email"]
  );
  if (result) {
    return NextResponse.json(result[0], { status: 200 });
  } else {
    return NextResponse.json({ massage: "Not Found" }, { status: 404 });
  }
}
