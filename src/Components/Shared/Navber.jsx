import React from 'react';
import BannerLogo from '/logo.png'
import { NavLink } from 'react-router';
import { IoLogoGithub } from 'react-icons/io';



const Navber = () => {


    const links = (
        <div className=' flex gap-3'>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'border-b text-purple-500 font-semibold' : 'font-semibold'}>Home</NavLink>
            <NavLink to={'/app'} className={({ isActive }) => isActive ? 'border-b text-purple-500 font-semibold' : 'font-semibold'}>Apps</NavLink>
            <NavLink to={'/install'} className={({ isActive }) => isActive ? 'border-b text-purple-500 font-semibold' : 'font-semibold'}>Installation</NavLink>
        </div>
    )

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className='h-12 animate-pulse' src={BannerLogo} alt="" />
                        <h2 className='text-purple-500 font-semibold'>HERO.IO</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"><IoLogoGithub /> Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;