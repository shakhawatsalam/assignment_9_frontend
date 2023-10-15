/* eslint-disable react/no-children-prop */
import React from "react";
import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";

const ServiceSection = () => {
  return (
    <>
      <SectionHeading children={"Service"} />
      <div className='container grid grid-cols-4 gap-3 mt-10 mb-10'>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </>
  );
};

export default ServiceSection;
