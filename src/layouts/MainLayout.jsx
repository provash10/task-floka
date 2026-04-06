import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import CustomCursor from '../components/cursor/CustomCursor';

const MainLayout = () => {
    return (
        <div className=''>
            <CustomCursor></CustomCursor>
            <header className='sticky top-0 z-50 bg-white'>
                <div className='max-w-7xl mx-auto px-6'>
                    <Header></Header>
                </div>
            </header>
            <main className='max-w-7xl mx-auto bg-gray-200 mt-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;