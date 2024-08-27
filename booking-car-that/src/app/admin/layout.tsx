'use client'
import { signOut } from "next-auth/react";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex justify-between items-center">
      <div className="border w-1/6 h-full flex justify-center items-end p-2 ">
        <button
          onClick={() => {
            signOut();
          }}
          className="w-full h-12 ring-0 hover:ring-blue-500 hover:ring-1 rounded-lg transition-all"
        >
          Logout
        </button>
      </div>
      <div className="w-4/5 h-full">{children}</div>
    </div>
  );
}
