import { mysqlPool } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  const promisePool = mysqlPool.promise();
  const [row] = await promisePool.query("SELECT * FROM type_travels");
  return NextResponse.json(row);
}
export async function POST(req: any) {
  const data = await req.json();
  const promisePool = mysqlPool.promise();
  await promisePool.query("INSERT INTO type_travels set ?", [data]);
  return NextResponse.json({ massage: "Add Successfully" }, { status: 200 });
}
export async function DELETE(req: any) {
  const data = await req.json();
  const promisePool = mysqlPool.promise();
  await promisePool.query("DELETE FROM `type_travels` WHERE type_travel_id = ?", [data['type_travel_id']]);
  return NextResponse.json({ massage: "DELETE Successfully" }, { status: 200 });
}
