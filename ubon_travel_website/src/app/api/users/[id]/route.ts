import { mysqlPool } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: { params: string }) {
  const id = parseInt(params.id);
  const promisePool = mysqlPool.promise();
  const [row] = await promisePool.query(`SELECT * FROM users WHERE id = ${id}`);
  return NextResponse.json(row);
}

export async function PUT(req: any, { params }: { params: string }) {
  const id = parseInt(params.id);
  const data = await req.json();
  const promisePool = mysqlPool.promise();
  await promisePool.query(`UPDATE users set ? WHERE id = ${id}`, [data]);
  return NextResponse.json({ massage: "Update Successfully" }, { status: 200 });
}
export async function DELETE(req: any, { params }: { params: string }) {
  const id = parseInt(params.id);
  const promisePool = mysqlPool.promise();
  await promisePool.query(`DELETE FROM users WHERE id = ${id}`);
  return NextResponse.json({ massage: "DELETE Successfully" }, { status: 200 });
}
