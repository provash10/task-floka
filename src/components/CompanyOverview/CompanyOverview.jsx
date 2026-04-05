import React from 'react';

const CompanyOverview = () => {
    return (
        <div className='flex gap-2 bg-gray-200 p-2'>
            {/* left */}
            <div className='w-[20%] bg-white rounded-2xl p-2'>
                <div className='mb-30'>
                    <h1 className='text-black text-8xl'>25<span className='text-gray-400'>+</span></h1>
                    <p className='text-sm font-bold text-gray-500'>Years of experience</p>
                </div>

                <div className='mb-34'>
                    <p className='text-md font-semibold text-gray-500'>Explore how we transform ideas into extraordinary digital experiences.</p>
                </div>

                <div>
                    <div className='flex mb-2'>
                        <img className="h-12 w-auto object-cover  rounded-full" src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img1.webp" alt="" />
                        <img className="h-12 w-auto object-cover -ml-2 rounded-full" src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img2.webp" alt="" />
                        <img className="h-12 w-auto object-cover -ml-2 rounded-full" src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img3.webp" alt="" />
                        <img className="h-12 w-auto object-cover -ml-2 rounded-full" src="	https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img4.webp" alt="" />
                    </div>
                    <p className='text-lg'>1200+ happy users review</p>
                </div>

            </div>

            {/* middle */}
            <div className='w-[60%] rounded-2xl border bg-black'>
                <div className='relative'>
                    <div>
                        <img className='w-[400px] h-auto px-4 py-4' src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-author-img1.webp" alt="" />
                    </div>
                    <div className='absolute top-90 left-20'>
                        <p className='text-white text-2xl'>“ At Floka, we merge strategy, creativity, and technology to <br /> shape brands that people love. ”</p>
                        <h1 className='text-white font-semibold text-2xl'>Merizo H. Yelso  /CEO</h1>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className='w-[20%]'>

                <div className='mb-2 bg-white rounded-2xl p-2'>
                    <div className='mb-18'>
                        <h1 className='text-md text-gray-400'>Follow us</h1>
                        <p className='text-md text-black'>For check updates</p>

                    </div>
                    <div className='py-2'>
                        <div className='flex items-center gap-4 m-2'>
                            <button className='border font-semibold border-gray-400 hover:border-black rounded-xl px-3 py-1'>DRIBBBLE</button>
                            <button className='border font-semibold border-gray-400 hover:border-black rounded-xl px-3 py-1'>BEHANCE</button>
                        </div>
                        <div className='flex items-center gap-4'>
                            <button className='border font-semibold border-gray-400 hover:border-black rounded-xl px-3 py-1'>LINKEDIN</button>
                            <button className='border font-semibold border-gray-400 hover:border-black rounded-xl px-3 py-1'>X</button>
                            <button className='border font-semibold border-gray-400 hover:border-black rounded-xl px-3 py-1'>XING</button>
                        </div>
                    </div>
                </div>

                <div className='mb-2 bg-white rounded-2xl p-2'>
                    <div className=''>
                        <h1 className='text-gray-400 mb-42'>Impressions</h1>
                    </div>

                    <div className=''>
                        <div className='flex justify-between bg-gray-200 rounded-2xl p-2'>
                            <h2 className='text-md font-semibold'>Solutions</h2>
                            <p className='text-gray-400 font-semibold'>100%</p>
                        </div>
                        <div className='flex justify-between bg-black rounded-2xl p-2 w-[90%]'>
                            <h2 className='text-white'>UI/UX</h2>
                            <p className='text-white'>90%</p>
                        </div>
                        <div className='flex justify-between w-[72%] bg-white'>
                            <h2 className='text-md font-semibold'>Explore</h2>
                            <p className='text-gray-400 font-semibold'>72%</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CompanyOverview;