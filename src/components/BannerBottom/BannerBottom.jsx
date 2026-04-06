import React from "react";
import RotatingTextCircle from "../custom/RotatingTextCircle/RotatingTextCircle";
import { AnimatedText } from "../custom/AnimatedText1/AnimatedText";

const BannerBottom = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between m-8 gap-6 lg:gap-0">
      
      {/* LEFT SIDE */}
      <div className="flex flex-col items-start text-left w-full lg:w-1/3">
        <RotatingTextCircle />

        <h1 className="text-gray-500 mt-4 leading-relaxed text-sm">
          We design every project with long-<br />
          term success in mind.
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-2/3 mt-6 lg:mt-0">
        <AnimatedText />
      </div>

    </div>
  );
};

export default BannerBottom;