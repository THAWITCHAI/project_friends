import { NextResponse } from "next/server";

export async function POST(req: any) {
  const { email, password } = await req.json();
  const user = [
    {
      id: 1,
      name: "Phongsathon Namsean",
      email: "admin@gmail.com",
      password: "13495000",
      role: 1,
    },
    {
      id: 2,
      name: "นาย ใจดี เกินเหตุ",
      email: "user@gmail.com",
      password: "1234",
      role: 2,
    },
  ];

  const result = user.filter(
    (item) => password === item["password"] && email === item["email"]
  );
  if (result) {
    return NextResponse.json(result[0], { status: 200 });
  } else {
    return NextResponse.json({ massage: "Not Found" }, { status: 404 });
  }
}
