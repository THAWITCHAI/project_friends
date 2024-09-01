import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function GET() {
  const promisePool = mysqlPool.promise();
  const [row] = await promisePool.query(
    "SELECT * FROM booking B JOIN users U ON B.uid = U.uid JOIN cars C ON B.cid = C.cid JOIN statuses S ON C.sid = S.sid JOIN type_cars T ON C.tid = T.tid JOIN roles R ON U.rid = R.rid "
  );
  return NextResponse.json(row);
}
