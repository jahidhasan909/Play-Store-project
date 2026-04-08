import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { SiGoogleplay } from 'react-icons/si';


const Banner = () => {
    return (
        <div className='container mx-auto mt-7' >
            <div className='text-center space-y-3'>
                <h1 className='font-bold text-4xl'>We Build <br /><span className='text-purple-500'>Productive</span> Apps</h1>
                <p className='text-neutral/50'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex  justify-center gap-2'>
                    <button className='btn'><SiGoogleplay /> Google Play</button>
                    <button className='btn'><FaAppStoreIos /> App Store</button>
                </div>
            </div>
            <img className='mt-5 mx-auto h-[300px]' src="https://i.ibb.co.com/b5LLpqGg/hero.png" alt="" />
           
        </div>
    );
};

export default Banner;