"use client";
import React from "react";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */

import LoginForm from "@/components/view/LoginForm";
import assert from "assert";
import Image from "next/image";
// framer motion
// import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import Register from "@/components/view/Register";

const RegisterPage = () => {
  return (
    <div className='py-32 h-[80vh] text-center xl:text-left '>
      {/* avatar Img  */}
      <div className='invisible xl:visible absolute bottom-0 -left-[370px]'></div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text  */}
        <div className='flex-1 flex flex-col justify-center items-center'>
          <Image
            src={"/login.svg"}
            width={350}
            height={500}
            alt=''
            className='mb-11'></Image>
        </div>
        {/* info  */}
        <div className='flex flex-col justify-center items-center w-full xl:max-w-[48%] h-[480px]'>
          {" "}
          <div>
            <Register></Register>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
