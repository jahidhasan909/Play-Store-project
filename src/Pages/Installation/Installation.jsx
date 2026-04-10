import React, { useContext, useState } from 'react';
import { InstallApps } from '../../Context/InstallContext';
import { IoCloudDownloadSharp } from 'react-icons/io5';
import { FaArrowDown, FaStar } from 'react-icons/fa';
import { BiSolidLike } from 'react-icons/bi';
import { toast } from 'react-toastify';

const Installation = () => {
    const { install, setInstall } = useContext(InstallApps)


    const [sortType, setSortType] = useState('')

    const sortedApp = [...install]

    if (sortType == 'size') {
        sortedApp.sort((a, b) => b.size - a.size)
    }


    const handleUninstall = (ins) => {
        const fillterApp = sortedApp.filter(app => app.id !== ins.id)
        setInstall(fillterApp)
        toast.warning(`${ins.title} is unInstall`)
    }



    return (
        <div className='my-10'>
            <div className='text-center space-y-2'>
                <h1 className='font-bold text-3xl'>Your Installed Apps</h1>
                <p className='text-neutral/50'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='container mx-auto flex justify-between items-center my-4'>
                <h3 className='font-semibold'>({install.length})Apps Found</h3>



                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1 text-neutral/50">Sort size <FaArrowDown /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortType('size')}><a>sort by size</a></li>
                    </ul>
                </div>



            </div>
            <div className=' space-y-4 container mx-auto my-5'>

                {
                    sortedApp.length === 0 ? <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

                        <img className='mx-auto' src="https://i.ibb.co.com/Qt1P0rw/App-Error.png" alt="" />

                        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                            OPPS!! APP NOT FOUND
                        </h2>

                        <p className="text-gray-500 mt-2 max-w-md">
                            The App you are requesting is not found on our system.  please try another apps
                        </p>

                        <a
                            href="/app"
                            className="mt-6 px-6 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white transition"
                        >
                            Go install app!
                        </a>

                    </div> :
                        sortedApp.map(ins => <div>
                            <div className="card card-side bg-base-100 shadow-sm">
                                <figure className='p-5'>
                                    <img
                                        className='h-[100px] rounded-md'
                                        src={ins.image}
                                        alt="Movie" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{ins.title}</h2>
                                    <div className="flex gap-3">
                                        <div className='flex items-center gap-1 text-green-500'>
                                            <IoCloudDownloadSharp />
                                            <h2 className=''>{ins.downloads}M</h2>
                                        </div>
                                        <div className='flex items-center gap-1 text-orange-500'>
                                            <FaStar />
                                            <p className=''>{ins.ratingAvg}</p>
                                        </div>
                                        <div className='flex items-center gap-1 text-neutral/50'>
                                            <p className=''>{ins.size}Mb</p>
                                        </div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleUninstall(ins)} className="btn btn-success text-white">Uninstall</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Installation;