"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "../_components/Navbar_2";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    if (session.user.role === 2) {
      return <>{children}</>;
    }
    if (session.user.role === 1) {
      return router.replace("/admin/show/Travels");
    }
  }
  if (status === 'unauthenticated') {
    return <>
      <Navbar />
      {children}</>
  }
}
