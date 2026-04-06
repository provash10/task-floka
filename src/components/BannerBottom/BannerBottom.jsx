import React from "react";
import RotatingTextCircle from "../custom/RotatingTextCircle/RotatingTextCircle";
import { AnimatedText } from "../custom/AnimatedText1/AnimatedText";

const BannerBottom = () => {
  return (
    <div className="flex items-center justify-between m-8">

      {/* LEFT SIDE */}
      <div className="w-1/3 flex flex-col items-start text-left">
        <RotatingTextCircle />

        <h1 className="text-gray-500 mt-4 leading-relaxed text-sm">
          We design every project with long-<br />
          term success in mind.
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-2/3">
        <AnimatedText />
      </div>

    </div>
  );
};

export default BannerBottom;
