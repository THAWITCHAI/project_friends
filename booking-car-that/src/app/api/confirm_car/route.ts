import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function POST(req: any) {
  const data = await req.json();
  console.log(data)
  const promisePool = mysqlPool.promise();
  await promisePool.query("UPDATE cars set sid =4 WHERE cid = ?", [data['cid']]);
  return NextResponse.json({ massage: "อนุมัติเสร็จสิ้น" }, { status: 200 });
}
