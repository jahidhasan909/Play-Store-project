import React from 'react';
import Navber from '../Components/Shared/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Shared/Footer';

const MainLayout = () => {
    return (
        <div className='bg-base-300 flex flex-col min-h-screen'>
            <Navber></Navber>
            <div className='grow'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;