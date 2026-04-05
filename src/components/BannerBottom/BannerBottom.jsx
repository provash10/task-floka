import React from 'react';

const BannerBottom = () => {
    return (
        <div className='flex m-8'>

            {/* left 1/3 */}
            <div className='w-1/3'>
                <img 
                    className='w-28 h-auto m-8' 
                    src="https://floka.casethemes.net/wp-content/uploads/2025/05/Logo.png" 
                    alt="" 
                />
                <div>
                    <h1 className='text-gray-600'>
                        We design every project with long-<br />term success in mind.
                    </h1>
                </div>
            </div>

            {/* right 2/3 */}
            <div className='w-2/3'>
                <h1 className='text-5xl font-semibold text-black'>
                    Our approach is straightforward—<br /> 
                    prioritizing functionality, speed, and <br />
                    clarity for solutions.
                </h1>
            </div>

        </div>
    );
};

export default BannerBottom;