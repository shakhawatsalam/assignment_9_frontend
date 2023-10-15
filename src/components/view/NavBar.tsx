import React from "react";
import { MainNav } from "../ui/navBar";
import { Avater } from "./Avater";
import { ModeToggle } from "./ThemeToggleButton";

const NavBar = () => {
  return (
    <div className='border-y-[1px] shadow-md dark:shadow-gray-700 dark:shadow-md'>
      <div className='container flex  justify-between items-center h-14'>
        <div>
          {" "}
          <h1 className='text-lg font-bold'>Auto.Service</h1>
        </div>
        <div>
          {" "}
          <MainNav />
        </div>
        <div className='flex  w-24 justify-between items-center'>
          <div>
            <Avater />
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
