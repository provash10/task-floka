import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto my-5'>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;