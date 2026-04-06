import React from 'react';
import { Link } from 'react-router';
import CustomIcon from './custom/customIcon/customIcon';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between items-center'>
            <Link to="https://floka.casethemes.net/">
            <img className='w-28 h-auto' src="https://floka.casethemes.net/wp-content/uploads/2025/05/Logo.png" alt="" />
            </Link>
            <a href="/">Home</a>
            <a href="/">Pages</a>
            <a href="/">Portfolio</a>
            <a href="/">Blog</a>
            <div className='flex items-center gap-2'>
                <p>info@floka.com</p>
            {/* <a href=""><TiPlusOutline /></a> */}
            <CustomIcon></CustomIcon>
            </div>
        </nav>
        </div>
    );
};

export default Header;
