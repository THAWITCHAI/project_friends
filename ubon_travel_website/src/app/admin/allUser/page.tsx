"use client";
import React, { useState } from "react";

type Props = {};

export default function AllUser({}: Props) {
  const [search, setSearch] = useState("");

  const data_demo = [
    {
      name: "Thawitchai",
      email: "Thawitchai@gmail.com",
      password: "1234",
      role: "Admin",
    },
    {
      name: "phatcharaporn",
      email: "phatcharaporn@gmail.com",
      password: "13495000",
      role: "User",
    },
    {
      name: "that",
      email: "that@gmail.com",
      password: "15495",
      role: "Admin",
    },
    {
      name: "thammanoon",
      email: "thammanoon@gmail.com",
      password: "13495000",
      role: "Admin",
    },
    {
      name: "pongsathon",
      email: "pongsathon@gmail.com",
      password: "1234",
      role: "Admin",
    },
  ];
  const result = data_demo.filter((item) => {
    return (
      item.name.toUpperCase().includes(search.toUpperCase()) ||
      item.email.toUpperCase().includes(search.toUpperCase()) ||
      item.role.toUpperCase().includes(search.toUpperCase())||
      item.password.toUpperCase().includes(search.toUpperCase())
    );
  });

  return (
    <div>
      <div className="w-full h-[5rem] mb-5 flex justify-center items-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="border w-1/2 h-1/2 mr-4 rounded-lg p-2"
          placeholder="Search"
        />
        {/* <button className="bg-black text-white active:scale-90 h-1/2 w-[5rem] rounded-lg transition-all ease-in-out">
          Search
        </button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-fit">
        {search === "" &&
          data_demo.map((item, index) => {
            return (
              <div
                key={index}
                className="shadow-lg hover:scale-110 w-[20rem] h-[20rem] rounded-xl transition-all ease-in-out"
              >
                <h1 className="w-full h-[4rem] text-xl flex justify-center items-center">
                  {item["name"]}
                </h1>
                <h1 className="w-full h-[4rem] text-sm flex justify-center items-center">
                  {item["email"]}
                </h1>
                <h1 className="w-full h-[4rem] text-sm flex justify-center items-center">
                  {item["password"]}
                </h1>
                <h1 className="w-full h-[4rem] text-sm flex justify-center items-center">
                  {item["role"]}
                </h1>
              </div>
            );
          })}
        {search !== "" &&
          result.map((item, index) => {
            return (
              <div
                key={index}
                className="shadow-lg hover:scale-100 w-[20rem] h-[20rem] rounded-xl"
              >
                <h1 className="w-full h-[4rem] text-xl flex justify-center items-center">
                  {item["name"]}
                </h1>
                <h1 className="w-full h-[4rem] text-sm flex justify-center items-center">
                  {item["email"]}
                </h1>
                <h1 className="w-full h-[4rem] text-sm flex justify-center items-center">
                  {item["password"]}
                </h1>
                <h1 className="w-full h-[4rem] text-sm flex justify-center items-center">
                  {item["role"]}
                </h1>
              </div>
            );
          })}
      </div>
    </div>
  );
}
