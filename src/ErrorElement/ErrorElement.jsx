import React from 'react';

const ErrorElement = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

                <img className='mx-auto' src="https://i.ibb.co.com/Qt1P0rw/App-Error.png" alt="" />

                <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                    OPPS!! APP NOT FOUND
                </h2>

                <p className="text-gray-500 mt-2 max-w-md">
                    The App you are requesting is not found on our system.  please try another apps
                </p>

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





