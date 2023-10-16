"use client";
import React, { ReactElement, useContext, useState } from "react";
import { SidebarContext } from "./SideBar";
import Link from "next/link";
import { StickerIcon } from "lucide-react";
// type SideBarItemsProps = {
//   icon?: React.ReactNode | ReactElement;
//   text?: string;
//   active?: boolean;
//   alert?: boolean;
//   link: string;
// }[];
export function SidebarItem({ SideBarItems }: any) {
  const [key, setKey] = useState<Number>();

  const { expanded } = useContext(SidebarContext);

  return (
    <>
      {SideBarItems?.map((sidebarItem: any, index: number) => (
        <li
          key={index} // Add a unique key for each list item
          onClick={() => setKey(index)}
          className={`
            relative flex items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer
            transition-colors group
            ${
              key === index
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "hover:bg-indigo-50 text-gray-600"
            }
          `}>
          <Link href={sidebarItem.link}>{sidebarItem.icon}</Link>
          <Link
            href={sidebarItem.link}
            className={`overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}>
            {sidebarItem.text}
          </Link>
          {key === index && (
            <div
              className={`absolute right-2 w-2 h-2 rounded bg-primary-foreground ${
                expanded ? "" : "top-2"
              }`}
            />
          )}

          {!expanded && (
            <div
              className={`
                absolute left-full rounded-md px-2 py-1 ml-6
                bg-primary text-white dark:text-slate-800 text-sm
                invisible opacity-20 -translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
              `}>
              {sidebarItem.text}
            </div>
          )}
        </li>
      ))}
    </>
  );
}
