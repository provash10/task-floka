import React from 'react';
import CountUp from '../custom/CountUp/CountUp';
import SlideImgDown from '../custom/SlideImgDown/SlideImgDown';

const CompanyOverview = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-6 p-4 bg-gray-200'>

            {/* LEFT SIDE */}
            <div className='w-full lg:w-[20%] flex flex-col gap-6'>
                <div className='bg-white rounded-2xl p-4'>
                    <h1 className='text-black text-6xl sm:text-7xl md:text-8xl'>
                        <CountUp end={25} duration={2000} />
                        <span className='text-gray-400'>+</span>
                    </h1>
                    <p className='text-sm font-bold text-gray-500 mt-2'>Years of experience</p>
                </div>

                <div className='bg-white rounded-2xl p-4'>
                    <p className='text-md font-semibold text-gray-500'>Explore how we transform ideas into extraordinary digital experiences.</p>
                </div>

                <div className='bg-white rounded-2xl p-4'>
                    <div className='flex mb-2'>
                        <img className="h-12 w-auto object-cover rounded-full" src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img1.webp" alt="" />
                        <img className="h-12 w-auto object-cover -ml-2 rounded-full" src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img2.webp" alt="" />
                        <img className="h-12 w-auto object-cover -ml-2 rounded-full" src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img3.webp" alt="" />
                        <img className="h-12 w-auto object-cover -ml-2 rounded-full" src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img4.webp" alt="" />
                    </div>
                    <p className='text-lg'>1200+ happy users review</p>
                </div>
            </div>

            {/* MIDDLE IMAGE */}
            <div className='w-full lg:w-[60%] rounded-2xl relative'>
                <SlideImgDown
                    src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-author-img1.webp"
                    alt="Author"
                    className="w-full sm:w-[400px] h-auto mx-auto rounded-2xl"
                />
                <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4'>
                    <p className='text-white text-lg sm:text-2xl'>
                        “ At Floka, we merge strategy, creativity, and technology to <br /> shape brands that people love. ”
                    </p>
                    <h1 className='text-white font-semibold text-lg sm:text-2xl mt-2'>Merizo H. Yelso  /CEO</h1>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className='w-full lg:w-[20%] flex flex-col gap-6'>

                <div className='bg-white rounded-2xl p-4'>
                    <div className='mb-2'>
                        <h1 className='text-md text-gray-400'>Follow us</h1>
                        <p className='text-md text-black'>For check updates</p>
                    </div>
                    <div className='py-2 flex flex-col gap-2'>
                        <div className='flex flex-wrap gap-2'>
                            <button className='border font-semibold border-gray-400 hover:border-black rounded-xl px-3 py-1'>DRIBBBLE</button>
                            <button className='border font-semibold border-gray-400 hover:border-black rounded-xl px-3 py-1'>BEHANCE</button>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <button className='border font-semibold border-gray-400 hover:border-black rounded-xl px-3 py-1'>LINKEDIN</button>
                            <button className='border font-semibold border-gray-400 hover:border-black rounded-xl px-3 py-1'>X</button>
                            <button className='border font-semibold border-gray-400 hover:border-black rounded-xl px-3 py-1'>XING</button>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-2xl p-4 flex flex-col gap-2'>
                    <h1 className='text-gray-400'>Impressions</h1>
                    <div className='flex justify-between bg-gray-200 rounded-2xl p-2'>
                        <h2 className='text-md font-semibold'>Solutions</h2>
                        <p className='text-gray-400 font-semibold'>100%</p>
                    </div>
                    <div className='flex justify-between bg-black text-white rounded-2xl p-2 w-[90%]'>
                        <h2>UI/UX</h2>
                        <p>90%</p>
                    </div>
                    <div className='flex justify-between w-[72%] bg-white'>
                        <h2 className='text-md font-semibold'>Explore</h2>
                        <p className='text-gray-400 font-semibold'>72%</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CompanyOverview;