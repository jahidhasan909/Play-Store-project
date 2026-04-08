import React, { useState } from 'react';
import { InstallApps } from './InstallContext';


const InstallProvider = ({ children }) => {

    const [install, setInstall] = useState([])

    const data = {
        install,
        setInstall,
    }


    return <InstallApps.Provider value={data}>
        {children}
    </InstallApps.Provider>
};

export default InstallProvider;