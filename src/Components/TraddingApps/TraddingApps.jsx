import React, { useEffect } from 'react';
import { data, Link } from 'react-router';
import CardTradding from './CardTradding';




const appsData = async () => {
    const res = await fetch('/data.json')
    return res.json()
}

const dataLoad = appsData();


const TraddingApps = () => {
    return (
        <div className='my-10 container mx-auto'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl'>Trending Apps</h1>
                <p className='text-neutral/50'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <CardTradding dataLoad={dataLoad}></CardTradding>
            <div className='flex justify-center my-5'>
                <Link to={'/app'} className='btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Show All</Link>
            </div>

        </div >
    );
};

export default TraddingApps;