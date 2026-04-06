import React from 'react';
import CustomIcon from '../custom/customIcon/customIcon';


const Banner = () => {
    return (
        <div>
            <div className='relative'>
                {/* <h1>video banner</h1> */}
                <div className="h-[600px] overflow-hidden rounded-2xl">
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    >
                        <source src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4" />
                    </video>
                </div>

            </div>

            <div className='absolute top-110 left-20 text-white flex items-end'>
                {/* <h1>logo img left under</h1> */}
                <div className='relative'>
                    <span className='text-9xl font-bold'>Floka</span>
                </div>
                <h2 className='absolute text-6xl -bottom-10 right-2'>
                    <span>Studio</span>
                </h2>
            </div>

            <div className='absolute top-105 right-20 text-white flex items-end'>
                {/* <h1>img content right under</h1> */}
                <div>
                    <div className='flex  gap-5 bg-white p-2 rounded-2xl'>
                        <div>
                            <img className='w-[100px] h-[100px] object-cover rounded-2xl' src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-img-slide-300x300.jpg" alt="" />
                        </div>
                        <div>
                            <h1 className='text-gray-400'>HEAD OF IDEA</h1>
                            <h1 className='text-black font-bold'>Almond D. Nelsi</h1>
                            <div className='flex items-center gap-2 text-black'>
                                <CustomIcon ></CustomIcon>
                                <p className='font-semibold'>LET'S TALK</p>
                            </div>
                        </div>
                    </div>
                    {/* content */}
                    <div>
                        <p className='text-lg'>
                            No cookie-cutter websites. No fluff. <br />
                            Just real tools and smart strategies to grow your <br /> business and elevate your brand.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;