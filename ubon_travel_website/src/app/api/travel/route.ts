import { mysqlPool } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  const promisePool = mysqlPool.promise();
  const [row] = await promisePool.query("SELECT * FROM travels T JOIN type_travels TT ON T.type_travel_id = TT.type_travel_id ");
  return NextResponse.json(row);
}
export async function POST(req: any) {
  const data = await req.json();
  const promisePool = mysqlPool.promise();
  await promisePool.query("INSERT INTO travels set ?", [data]);
  return NextResponse.json({ massage: "Add Successfully" }, { status: 200 });
}
export async function PUT(req: any) {
  const data = await req.json();
  const promisePool = mysqlPool.promise();
  await promisePool.query("UPDATE travels set ? WHERE travel_id = ?", [data, data['travel_id']]);
  return NextResponse.json({ massage: "Update Successfully" }, { status: 200 });
}
export async function DELETE(req: any) {
  const data = await req.json();
  const promisePool = mysqlPool.promise();
  await promisePool.query("DELETE FROM `travels` WHERE travel_id = ?", [data['travel_id']]);
  return NextResponse.json({ massage: "DELETE Successfully" }, { status: 200 });
}
