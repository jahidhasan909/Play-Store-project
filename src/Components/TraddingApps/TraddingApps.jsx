import React, { Suspense, useEffect } from 'react';
import { data, Link } from 'react-router';
import CardTradding from './CardTradding';
import logo from '/logo.png'




const appsData = async () => {
    const res = await fetch('/data.json')
    return res.json()
}



const TraddingApps = () => {
    const dataLoad = appsData();
    return (
        <div className='my-10 container mx-auto'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl'>Trending Apps</h1>
                <p className='text-neutral/50'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <Suspense fallback={
                <div className='flex items-center text-3xl font-bold text-neutral/50 justify-center'> L <span><img className='animate-spin h-[40px]' src={logo} alt="" /></span> ading
                </div>
            }>
                <CardTradding dataLoad={dataLoad}></CardTradding>
            </Suspense>
            <div className='flex justify-center my-5'>
                <Link to={'/app'} className='btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Show All</Link>
            </div>

        </div >
    );
};

export default TraddingApps;