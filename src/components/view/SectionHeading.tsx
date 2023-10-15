import React from "react";

const SectionHeading = ({ children }: { children: string }) => {
  return (
    <div>
      <h1 className='text-center text-6xl'>{children}</h1>
    </div>
  );
};

export default SectionHeading;
