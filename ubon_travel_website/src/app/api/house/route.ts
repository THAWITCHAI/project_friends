import { mysqlPool } from "@/app/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    const PromisePool = mysqlPool.promise()
    const [row] = await PromisePool.query('SELECT * FROM houses')
    return NextResponse.json(row, { status: 200 })
}

export async function POST(req: any) {
    const data = await req.json()
    const promisePool = mysqlPool.promise()
    await promisePool.query('INSERT INTO houses SET?', [data])
    return NextResponse.json({ massage: 'Add Successfully' }, { status: 200 })
}
export async function DELETE(req: any) {
    const { id } = await req.json();
    console.log(id)
    const promisePool = mysqlPool.promise();
    await promisePool.query("DELETE FROM `houses` WHERE id = ?", [id]);
    return NextResponse.json({ massage: "DELETE Successfully" }, { status: 200 });
}

export async function PUT(req: any) {
    const data = await req.json();
    const promisePool = mysqlPool.promise();
    await promisePool.query("UPDATE houses set ? WHERE id = ?", [data, data['id']]);
    return NextResponse.json({ massage: "Update Successfully" }, { status: 200 });
}