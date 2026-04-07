import React from 'react';
import Navber from '../Components/Shared/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;