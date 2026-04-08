import React from 'react';

const ErrorElement = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

                <img className='mx-auto' src="https://i.ibb.co.com/fY9C8WL3/error-404.png" alt="" />

                <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                    Oops, page not found!
                </h2>

                <p className="text-gray-500 mt-2 max-w-md">
                    The page you are looking for is not available.</p>

                <a
                    href="/"
                    className="mt-6 px-6 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white transition"
                >
                    Go Back Home!
                </a>

            </div>
        </div>
    );
};

export default ErrorElement;





