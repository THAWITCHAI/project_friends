import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function POST(req: any) {
  const data = await req.json();
  const cid = data["cid"];
  const promisePool = mysqlPool.promise();
  await promisePool.query("INSERT INTO booking set ?", [data]);
  await promisePool.query("UPDATE cars set sid=2 WHERE cid = ?", [cid]);
  return NextResponse.json({ massage: "Add Successfully" }, { status: 200 });
}
export async function UPDATE(req: any) {
  const data = await req.json();
  const cid = data["cid"];
  const promisePool = mysqlPool.promise();
  await promisePool.query("INSERT INTO booking set ?", [data]);
  await promisePool.query("UPDATE cars set sid=2 WHERE cid = ?", [cid]);
  return NextResponse.json({ massage: "Add Successfully" }, { status: 200 });
}
export async function GET() {
  const promisePool = mysqlPool.promise();
  const [row] = await promisePool.query(
    "SELECT * FROM booking B JOIN users U ON B.uid = U.uid JOIN cars C ON B.cid = C.cid JOIN statuses S ON C.sid = S.sid JOIN type_cars T ON C.tid = T.tid JOIN roles R ON U.rid = R.rid WHERE S.sid = 2 OR S.sid = 4"
  );
  return NextResponse.json(row);
}

export async function DELETE(req: any) {
  const data = await req.json();
  const promisePool = mysqlPool.promise();
  await promisePool.query(`DELETE FROM booking WHERE bid=${data['bid']}`);
  await promisePool.query(`UPDATE cars set sid=1 WHERE cid = ${data['cid']}`);
  return NextResponse.json({ massage: "Delete Successfully" }, { status: 200 });
}
