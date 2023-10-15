import React from "react";
import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";

const UpcomingService = () => {
  return (
    <>
      <SectionHeading>Up Coming Service</SectionHeading>
      <div className='container grid grid-cols-4 gap-3 mt-10'>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </>
  );
};

export default UpcomingService;
