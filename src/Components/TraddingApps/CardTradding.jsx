import React, { use } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const CardTradding = ({ dataLoad }) => {
    const allApp = use(dataLoad);


    return (
        <div className='grid lg:grid-cols-4 gap-5 my-5 container mx-auto'>
            {
                allApp.slice(0, 8).map((app, ind) =>
                    <Link to={`/appdetail/${app.id}`} key={ind} className="card bg-base-200 shadow-sm hover:cursor-pointer hover:translate-0.5 border border-gray-300">
                        <figure className='p-5'>
                            <img className='h-[200px] w-fit'
                                src={app.image}
                                alt={app.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{app.title}</h2>
                            <div className="card-actions justify-between">
                                <div className='badge text-green-500 bg-green-50'><IoCloudDownloadOutline /> {app.downloads}</div>
                                <div className='badge text-orange-400 bg-amber-100'><FaStar /> {app.ratingAvg}</div>
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default CardTradding;