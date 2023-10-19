"use client";

import NavBar from "@/components/view/NavBar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar></NavBar>
      <div className='min-h-[calc(100vh-64px)]'>{children}</div>
    </div>
  );
}
