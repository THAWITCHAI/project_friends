"use client";
import React, { useState } from "react";

type Props = {};

export default function Login({}: Props) {
  const [select, setSelect] = useState(1);

  return (
    <div className="h-[30rem] mt-10 p-5 flex justify-center items-center">
      <div className="relative w-[70%] h-full rounded-3xl overflow-hidden shadow-2xl">
        {/* Container for the slide animation */}
        <div
          className={`absolute w-full h-full flex transition-transform duration-700 ease-in-out ${
            select === 1 ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className=" w-full h-full rounded-lg flex justify-center items-center transition-all ease-in-out">
            <div className="bg-rose-500 w-1/2 h-full transition-all ease-in-out"></div>
            <div className="h-full w-1/2">
              <h1 className=" w-full h-[20%] flex justify-center items-center text-3xl">
                SignIn
              </h1>
              <div className="mt-5  w-full h-20 flex justify-center items-center">
                <button
                  className=" w-1/2 h-1/2 transition-all ease-in-out"
                  onClick={() => {
                    setSelect(2);
                  }}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute w-full h-full flex transition-transform duration-700 ease-in-out ${
            select === 2 ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className=" w-full h-full rounded-lg flex justify-center items-center transition-all ease-in-out">
            <div className="h-full w-1/2">
              <h1 className=" w-full h-[20%] flex justify-center items-center text-3xl">
                Register
              </h1>
              <div className="mt-5  w-full h-20 flex justify-center items-center">
                <button
                  className=" w-1/2 h-1/2"
                  onClick={() => {
                    setSelect(1);
                  }}
                >
                  Signin
                </button>
              </div>
            </div>
            <div className="bg-rose-500 w-1/2 h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
