import React from 'react';
import '../AnimatedText1/textAnimation.css';

export const AnimatedText = () => {
    return (
        <div className="overflow-hidden">
            <h1 className='text-5xl font-semibold text-black animate-fade-in-right'>
                Our approach is straightforward—<br /> 
                prioritizing functionality, speed, and <br />
                clarity for solutions.
            </h1>
        </div>
    );
};