import React, { use, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const AllAppCard = ({ appLoad }) => {
    const appLoaded = use(appLoad)
    const [search, setSearch] = useState('')




    const fillterapp = appLoaded.filter(app => app.title.toLowerCase().includes(search.toLowerCase()))



    return (
        <div className='container mx-auto'>
            <div className='lg:flex items-center lg:justify-between my-4'>
                <h4 className='font-semibold'>({appLoaded.length} )Apps Found</h4>
                <label className="input w-52">
                    <input
                        type="search"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </label>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-5 my-5'>
                {
                    fillterapp.map((apps, ind) =>
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