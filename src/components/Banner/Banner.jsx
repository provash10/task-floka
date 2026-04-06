import React from 'react';
import CustomIcon from '../custom/customIcon/customIcon';

const Banner = () => {
  return (
    <div className="relative w-full">

      {/* BANNER VIDEO */}
      <div className="relative h-[600px] sm:h-[400px] overflow-hidden rounded-2xl">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4" />
        </video>

        {/* DESKTOP OVERLAY */}
        <div className="hidden lg:flex absolute inset-0 justify-between items-start px-20 pt-44">
          {/* LEFT TEXT */}
          <div className="text-white">
            <span className="block text-9xl font-bold">Floka</span>
            <span className="block text-6xl font-semibold mt-2">Studio</span>
          </div>

          {/* RIGHT CARD */}
          <div className="flex flex-col gap-4 w-[450px]">
            <div className="flex gap-4 bg-white p-6 rounded-2xl items-center shadow-lg">
              <img
                className="w-[100px] h-[100px] object-cover rounded-2xl"
                src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-img-slide-300x300.jpg"
                alt="Almond D. Nelsi"
              />
              <div>
                <h3 className="text-gray-400 text-base">HEAD OF IDEA</h3>
                <h2 className="font-bold text-xl">Almond D. Nelsi</h2>
                <div className="flex items-center gap-2 mt-1 text-black">
                  <CustomIcon />
                  <p className="font-semibold text-base">LET'S TALK</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-white">
              No cookie-cutter websites. No fluff. <br />
              Just real tools and smart strategies to grow your <br /> business and elevate your brand.
            </p>
          </div>
        </div>

        {/* MOBILE OVERLAY */}
        <div className="lg:hidden absolute inset-0 flex flex-col justify-between px-4 py-4">
          {/* TOP: LEFT TEXT */}
          <div className="text-white mt-4">
            <span className="block text-5xl sm:text-6xl font-bold">Floka</span>
            <span className="block text-3xl sm:text-4xl font-semibold mt-1">Studio</span>
          </div>

          {/* BOTTOM: RIGHT CARD */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg flex gap-4 items-center mb-4">
            <img
              className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-cover rounded-2xl"
              src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-img-slide-300x300.jpg"
              alt="Almond D. Nelsi"
            />
            <div>
              <h3 className="text-gray-400 text-sm sm:text-base">HEAD OF IDEA</h3>
              <h2 className="font-bold text-lg sm:text-xl">Almond D. Nelsi</h2>
              <div className="flex items-center gap-2 mt-1 text-black">
                <CustomIcon />
                <p className="font-semibold text-sm sm:text-base">LET'S TALK</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;