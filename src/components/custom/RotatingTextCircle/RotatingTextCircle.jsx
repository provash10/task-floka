import React from "react";
import flokaLogo from "../../../assets/floka-logo.svg";

const RotatingTextCircle = () => {
  const text =
    "WANT IT TO SOUND PLAYFUL, LUXURIOUS, OR MORE • ";

  return (
    <div className="relative w-40 h-40">

      <div className="absolute inset-0 animate-spin-slow">
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
        >
          <defs>
            <path
              id="circlePath"
              d="
                M 100,100
                m -70,0
                a 70,70 0 1,1 140,0
                a 70,70 0 1,1 -140,0
              "
            />
          </defs>

          <text
            fill="#9ca3af"
            fontSize="8"
            fontWeight="400"
            letterSpacing="2"
          >
            <textPath href="#circlePath">
              {text.repeat(3)}
            </textPath>
          </text>
        </svg>
      </div>

      <img
        src={flokaLogo}
        alt="Logo"
        className="absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2"
      />

    </div>
  );
};

export default RotatingTextCircle;