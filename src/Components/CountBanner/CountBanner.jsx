import React from 'react';

const CountBanner = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-16 space-y-7'>
            <h2 className='text-center text-white font-bold text-4xl'>Trusted by Millions, Built for You</h2>
            <div className=' container mx-auto text-center text-white'>
                <div className='grid grid-cols-3'>
                    <div className='space-y-1'>
                        <p className='text-[0.70rem]'>Total Downloads</p>
                        <h2 className='font-bold text-4xl'>29.6M</h2>
                        <p className='text-[0.70rem]'>21% more than last month</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-[0.70rem]'>Total Downloads</p>
                        <h2 className='font-bold text-4xl'>29.6M</h2>
                        <p className='text-[0.70rem]'>21% more than last month</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-[0.70rem]'>Total Downloads</p>
                        <h2 className='font-bold text-4xl'>29.6M</h2>
                        <p className='text-[0.70rem]'>21% more than last month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountBanner;