import React from 'react';
import { TiPlusOutline } from 'react-icons/ti';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between items-center border'>
            <a href="https://floka.casethemes.net/">
            <img src="https://floka.casethemes.net/wp-content/uploads/2025/05/Logo.png" alt="" />
            </a>
            <a href="/">Home</a>
            <a href="/">Pages Nav</a>
            <a href="/">Portfolio</a>
            <a href="/">Blog</a>
            <p>info@floka.com</p>
            <a href=""><TiPlusOutline /></a>
        </nav>
        </div>
    );
};

export default Header;
