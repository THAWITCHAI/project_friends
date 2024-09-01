import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function POST(req: any) {
  const data = await req.json();
  console.log(data);
  const promisePool = mysqlPool.promise();
  await promisePool.query("UPDATE cars set sid=3 WHERE cid = ?", [data["cid"]]);
  await promisePool.query("UPDATE booking set bnot = ? WHERE bid = ?", [
    data["bnot"],
    data["bid"],
  ]);
  return NextResponse.json({ massage: "Successfully" }, { status: 200 });
}
export async function GET() {
  const promisePool = mysqlPool.promise();
  const [row] = await promisePool.query(
    "SELECT * FROM booking B JOIN users U ON B.uid = U.uid JOIN cars C ON B.cid = C.cid JOIN statuses S ON C.sid = S.sid JOIN type_cars T ON C.tid = T.tid JOIN roles R ON U.rid = R.rid WHERE S.sid = 3"
  );
  return NextResponse.json(row);
}
