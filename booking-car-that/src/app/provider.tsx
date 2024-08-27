"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

export const CustomProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};
