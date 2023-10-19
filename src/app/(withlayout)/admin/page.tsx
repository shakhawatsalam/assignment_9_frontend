"use client";
import { getUserInfo } from "@/service/auth.service";
import { useRouter } from "next/navigation";
import React from "react";

const AdminPage = () => {
  const router = useRouter();
  const user: any = getUserInfo();
  if (user?.role !== "admin") {
    router.push("/");
  }
  return (
    <div>
      <h1>Hello Admin Page</h1>
    </div>
  );
};

export default AdminPage;
