import React from 'react';
import Banner from '../../Components/Banner/Banner';
import CountBanner from '../../Components/CountBanner/CountBanner';
import TraddingApps from '../../Components/TraddingApps/TraddingApps';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <CountBanner></CountBanner>
            <TraddingApps></TraddingApps>
        </div>
    );
};

export default HomePage;