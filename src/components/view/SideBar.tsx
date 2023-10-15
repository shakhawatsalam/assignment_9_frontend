"use client";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import Image from "next/image";
import { useContext, createContext, useState } from "react";
import { Button } from "../ui/button";
import { SidebarItem } from "./SidebarItems";
import { sidebarItems } from "@/app/constant/sidebarItems";

export const SidebarContext = createContext({ expanded: false });

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className='h-screen'>
      <nav className='h-full flex flex-col  shadow-sm'>
        <div className='p-4 pb-2 flex justify-between items-center'>
          {/* <Image
            width={500}
            height={500}
            src='https://img.logoipsum.com/243.svg'
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=''
          /> */}
          <h1
            className={`overflow-hidden transition-all text-lg font-bold ${
              expanded ? "w-32" : "w-0"
            }`}>
            Auto.Service
          </h1>
          <Button
            onClick={() => setExpanded((curr) => !curr)}
            className='p-1.5 rounded-lg'>
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </Button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className='flex-1 px-3'>
            <SidebarItem SideBarItems={sidebarItems("admin")} />
          </ul>
        </SidebarContext.Provider>

        {/* bottom info  */}
        <div className='border-t flex p-3'>
          {/* <Image
            width={500}
            height={500}
            src='https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true'
            alt=''
            className='w-10 h-10 rounded-md'
          /> */}
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}>
            <div className='leading-4'>
              <h4 className='font-semibold'>John Doe</h4>
              <span className='text-xs text-gray-600'>johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}
