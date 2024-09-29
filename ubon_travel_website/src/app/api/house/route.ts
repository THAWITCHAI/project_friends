import { mysqlPool } from "@/app/lib/db";
import { NextResponse } from "next/server";


export async function GET(){
    const PromisePool = mysqlPool.promise()
    const [row] = await PromisePool.query('SELECT * FROM houses')
    return NextResponse.json(row,{status:200})
}

export async function POST(req:any){
    const data = await req.json()
    const promisePool = mysqlPool.promise()
    await promisePool.query('INSERT INTO houses SET?',[data])
    return NextResponse.json({massage:'Add Successfully'},{status:200})
}