import React from 'react';

const PortfoCard = () => {
    return (
        <div className='flex flex-col gap-6'>

            {/* HEADER */}
            <div className='mb-6'>
                <div className='p-2 mb-4'>
                    <h1 className='font-funnel text-xl'>Portfolio</h1>
                    <div className="w-full h-[2px] bg-gray-400 mt-1"></div>
                </div>

                <div className='flex flex-col lg:flex-row justify-between'>
                    <div></div>
                    <div className='w-full lg:w-auto'>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-funnel text-black'>
                            Strategy to build powerful <br /> digital solutions.
                        </h1>
                    </div>
                </div>
            </div>

            {/* TWO CARD ROW */}
            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='relative w-full lg:w-1/2'>
                    <img className='rounded-2xl w-full' src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img5-655x450.webp" alt="" />
                    <img className='absolute top-2 left-2 p-4' src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon7.svg" alt="" />
                    <h1 className='absolute left-4 bottom-4 text-white'>BRANDING, UX</h1>
                </div>

                <div className='relative w-full lg:w-1/2'>
                    <img className='rounded-2xl w-full' src="https://floka.casethemes.net/wp-content/uploads/2025/05/home3-accordion1-655x450.jpg" alt="" />
                    <img className='absolute top-2 left-2 p-4' src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon6.svg" alt="" />
                    <div className='flex flex-wrap absolute left-4 bottom-4 text-white gap-1'>
                        <h2>BRANDING,</h2>
                        <h2>MODULE,</h2>
                        <h2>PRODUCT,</h2>
                        <h2>UX,</h2>
                        <h2>WEBSITE</h2>
                    </div>
                </div>
            </div>

            {/* TWO CARD LABELS */}
            <div className='flex flex-col lg:flex-row gap-4 w-full'>
                <div className='flex justify-between w-full lg:w-1/2 px-4 py-4 rounded-2xl bg-white border border-gray-200'>
                    <h1>ALDAN BRANDING</h1>
                    <h1>2025</h1>
                </div>

                <div className='flex justify-between w-full lg:w-1/2 px-4 py-4 rounded-2xl bg-white border border-gray-200'>
                    <h1>ALDAN BRANDING</h1>
                    <h1>2025</h1>
                </div>
            </div>

            {/* SINGLE CARD */}
            <div className='flex flex-col gap-4'>
                <div className='relative'>
                    <img className='rounded-2xl w-full' src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3-1320x600.webp" alt="" />
                    <img className='absolute left-4 top-4 text-white' src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon5.svg" alt="" />
                    <h1 className='absolute left-4 bottom-4 text-white'>BRANDING, UX</h1>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex justify-between w-full px-4 py-4 rounded-2xl bg-white border border-gray-200'>
                        <h1>ALDAN BRANDING</h1>
                        <h1>2025</h1>
                    </div>
                </div>
            </div>

            {/* ANOTHER TWO CARD ROW */}
            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='relative w-full lg:w-1/2'>
                    <img className='rounded-2xl w-full' src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2-655x450.webp" alt="" />
                    <img className='absolute top-2 left-2 p-4' src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon7.svg" alt="" />
                    <h1 className='absolute left-4 bottom-4 text-white'>BRANDING, UX</h1>
                </div>

                <div className='relative w-full lg:w-1/2'>
                    <img className='rounded-2xl w-full' src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img1-655x450.webp" alt="" />
                    <img className='absolute top-2 left-2 p-4' src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon3.svg" alt="" />
                    <div className='flex flex-wrap absolute left-4 bottom-4 text-white gap-1'>
                        <h2>BRANDING,</h2>
                        <h2>MODULE,</h2>
                        <h2>PRODUCT,</h2>
                        <h2>UX,</h2>
                        <h2>WEBSITE</h2>
                    </div>
                </div>
            </div>

            {/* TWO CARD LABELS */}
            <div className='flex flex-col lg:flex-row gap-4 w-full'>
                <div className='flex justify-between w-full lg:w-1/2 px-4 py-4 rounded-2xl bg-white border border-gray-200'>
                    <h1>ALDAN BRANDING</h1>
                    <h1>2025</h1>
                </div>

                <div className='flex justify-between w-full lg:w-1/2 px-4 py-4 rounded-2xl bg-white border border-gray-200'>
                    <h1>ALDAN BRANDING</h1>
                    <h1>2025</h1>
                </div>
            </div>

        </div>
    );
};

export default PortfoCard;