import React from 'react';
import AllAppCard from './AllAppCard';



const appsData = async () => {
    const res = await fetch('/data.json')
    return res.json()
}

const appLoad = appsData();



const App = () => {
    return (
        <div className='my-10'>
            <div className='text-center space-y-2'>
                <h1 className='font-bold text-3xl'>Our All Applications</h1>
                <p className='text-neutral/50'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <AllAppCard appLoad={appLoad}></AllAppCard>

        </div>
    );
};

export default App;