/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
"use client";

import assert from "assert";
import Image from "next/image";
// framer motion
// import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";
import CountUp from "react-countup";

// counter

const HeroSection = () => {
  return (
    <div className='py-32 h-[80vh] text-center xl:text-left '>
      {/* avatar Img  */}
      <div className='invisible xl:visible absolute bottom-0 -left-[370px]'></div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text  */}
        <div className='flex-1 flex flex-col justify-center '>
          <h2 className='text-5xl font-semibold mb-10 '>
            Captivating <span className='text-gray-500'>stories</span> birth
            magnificent design
          </h2>
          <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            10 years ago, I began freelancing as a Developer. Since then, I've
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use.
          </p>
          {/* counters  */}
          <div className='invisible md:visible md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience  */}
              <div className='relative  flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] xl:max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients  */}
              <div className='relative  flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold mb-2'>
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] xl:max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects  */}
              <div className='relative  flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold  mb-2'>
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] xl:max-w-[100px]'>
                  Finished Projects
                </div>
              </div>
              {/* awards  */}
              <div className='relative  flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold mb-2'>
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] xl:max-w-[100px]'>
                  Winning awards
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* info  */}
        <div className='flex flex-col justify-center items-center w-full xl:max-w-[48%] h-[480px]'>
          {" "}
          <div>
            <Image width={500} height={500} src={"/car.png"} alt=''></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
