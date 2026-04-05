import React from 'react';

const PortfoCard = () => {
    return (
        <div>
            <div className='mb-12'>
                <div className='p-2 mb-16'>
                    <h1 className='font-funnel text-xl'>Portfolio</h1>
                    <div className="w-full h-[2px] bg-gray-400 mt-1"></div>
                </div>

                <div className='flex justify-between'>
                    <div>

                    </div>
                    <div>
                        <h1 className='text-5xl font-funnel text-black px-32'>Strategy to build powerful <br /> digital solutions.</h1>
                    </div>
                </div>
            </div>
            {/* 2 card */}
            <div className='flex justify-between gap-4 rounded-2xl mb-2'>
                <div className='relative'>
                    <img className='rounded-2xl' src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img5-655x450.webp" alt="" />
                    <img className='absolute top-2 left-2 p-4' src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon7.svg" alt="" />
                    <h1 className='absolute left-4 top-100 text-white'>BRANDING, UX</h1>
                </div>

                <div className='relative'>
                    <img  src="https://floka.casethemes.net/wp-content/uploads/2025/05/home3-accordion1-655x450.jpg" alt="" />
                    <img className='absolute top-2 left-2 p-4' src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon6.svg" alt="" />
                    <div className='flex absolute left-4 top-100 text-white'>
                        <h2>BRANDING,</h2>
                        <h2>MODULE,</h2>
                        <h2>PRODUCT,</h2>
                        <h2>UX,</h2>
                        <h2>WEBSITE</h2>
                    </div>

                </div>


            </div>

            <div className='flex justify-between gap-4 w-full'>
    
    <div className='flex justify-between w-1/2 px-4 py-4 rounded-2xl bg-white border border-gray-200'>
        <h1>ALDAN BRANDING</h1>
        <h1>2025</h1>
    </div>

    <div className='flex justify-between w-1/2 px-4 py-4 rounded-2xl bg-white border border-gray-200'>
        <h1>ALDAN BRANDING</h1>
        <h1>2025</h1>
    </div>

</div>
        </div>
    );
};

export default PortfoCard;