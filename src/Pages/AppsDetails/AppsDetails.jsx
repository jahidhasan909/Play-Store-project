import React, { useContext } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { IoCloudDownloadSharp } from 'react-icons/io5';
import { useLoaderData, useParams } from 'react-router';
import RatingChart from '../Chart/Chart';
import { InstallApps } from '../../Context/InstallContext';

const AppsDetails = () => {
  const params = useParams()
  const appsload = useLoaderData()


  const expectedApp = appsload.find(app => app.id == params.id)

  console.log(expectedApp);

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    ratings
  } = expectedApp


  const { install, setInstall } = useContext(InstallApps)

  const handleInstall = () => {
    setInstall([...install, expectedApp])
  }




  return (
    <div className='container mx-auto my-5 bg-base-100 py-4 px-5 rounded-xl'>
      <div className="card lg:card-side ">
        <figure className='p-4'>
          <img
            className='h-[250px]'
            src={image}
            alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Developed by: {companyName}</p>
          <div className='border-b border-gray-300 my-3'></div>
          <div className="card-actions gap-5">
            <div className='flex flex-col items-center h-17'>
              <IoCloudDownloadSharp />
              <p>Downloads</p>
              <h2 className='font-bold text-2xl'>{size}M</h2>
            </div>
            <div className='flex flex-col items-center h-17'>
              <FaStar />
              <p>Average Ratings</p>
              <h2 className='font-bold text-2xl'>{ratingAvg}</h2>
            </div>
            <div className='flex flex-col items-center h-17'>
              <BiSolidLike />
              <p>Total Reviews</p>
              <h2 className='font-bold text-2xl'>{reviews}</h2>
            </div>
          </div>
          <button onClick={handleInstall} className='btn btn-success w-48 text-white'>Install Now ({size})Mb</button>
        </div>
      </div>


      <div className='my-8'>
        <RatingChart ratings={ratings}></RatingChart>
      </div>



      <div className='my-10'>
        <h2 className='font-bold my-3'>Description</h2>
        <p className='text-neutral/50'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppsDetails;