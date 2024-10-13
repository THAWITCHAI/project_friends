import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function POST(req: any) {
  const data = await req.json();
  // console.log(data)
  const promisePool = mysqlPool.promise();
  await promisePool.query("INSERT INTO cars set ?", [data]);
  return NextResponse.json({ massage: "Successfully" }, { status: 200 });
}
export async function PUT(req: any) {
  const data = await req.json();
  // console.log(data)
  const promisePool = mysqlPool.promise();
  await promisePool.query("UPDATE cars set ? WHERE cid = ?", [data, data.cid]);
  return NextResponse.json({ massage: "Successfully" }, { status: 200 });
}

export async function GET() {
  const promisePool = mysqlPool.promise();
  const [row] = await promisePool.query(
    "SELECT * FROM cars C JOIN type_cars TC ON C.tid = TC.tid JOIN statuses S ON C.sid = S.sid;"
  );
  return NextResponse.json(row);
}
