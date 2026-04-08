import React, { use } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const AllAppCard = ({ appLoad }) => {
    const appLoaded = use(appLoad)
    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-between my-4'>
                <h4 className='font-semibold'>({appLoaded.length} )Apps Found</h4>
                <label className="input w-52">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>


            <div className='grid grid-cols-4 gap-5 my-5'>
                {
                    appLoaded.map((apps, ind) =>
                        <Link to={`/appdetail/${apps.id}`} key={ind} className="card bg-base-200 shadow-sm hover:cursor-pointer hover:translate-0.5 border border-gray-300">
                            <figure className='p-5'>
                                <img className='h-[200px] w-fit'
                                    src={apps.image}
                                    alt={apps.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{apps.title}</h2>
                                <div className="card-actions justify-between">
                                    <div className='badge text-green-500 bg-green-50'><IoCloudDownloadOutline /> {apps.downloads}</div>
                                    <div className='badge text-orange-400 bg-amber-100'><FaStar /> {apps.ratingAvg}</div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default AllAppCard;