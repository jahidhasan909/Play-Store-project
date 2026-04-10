import React, { Suspense } from 'react';
import AllAppCard from './AllAppCard';
import logo from '/logo.png'



const appsData = async () => {
    const res = await fetch('/data.json')
    return res.json()
}

const App = () => {
    const appLoad = appsData();
    return (
        <div className='my-10'>
            <div className='text-center space-y-2'>
                <h1 className='font-bold text-3xl'>Our All Applications</h1>
                <p className='text-neutral/50'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <Suspense fallback={<div className='flex items-center h-screen text-3xl font-bold text-neutral/50 justify-center'> L <span><img className='animate-spin h-[40px]' src={logo} alt="" /></span> ading
            </div>}>

                <AllAppCard appLoad={appLoad}></AllAppCard>
            </Suspense>

        </div>
    );
};

export default App;