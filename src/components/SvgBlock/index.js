import React from "react";

const SvgBlock = ({ svg }) => {
  const SvgIcon = require(`../../assets/${svg}`);
  return (
    <div
      id="svgBlock"
      className="flex justify-center items-center w-2/5 relative md:hidden"
    >
      <img src={SvgIcon} alt="Services" className="w-full" />
    </div>
  );
};

export default SvgBlock;
