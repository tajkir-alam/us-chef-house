import React, { useEffect, useState } from 'react';
import { HiUserCircle, HiMenuAlt1 } from "react-icons/hi";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const [bgColor, setBgColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setBgColor(true)
        }
        else {
            setBgColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)


    return (
        <>
            <div className={bgColor ? "md:bg-slate-800 md:fixed navbar custom-container z-10 duration-500 delay-75" : 'bg-slate-300 md:bg-transparent md:fixed navbar custom-container'}>
                {/* For Mobile View */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <HiMenuAlt1 className='md:text-white text-3xl'></HiMenuAlt1>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#7E90FE]duration-500 font-bold" : ""}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#7E90FE] duration-500 font-bold" : ""}>About US</NavLink></li>
                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#7E90FE] duration-500 font-bold" : ""}>Blog</NavLink></li>
                        </ul>
                    </div>
                    <div className='hidden md:block'>
                        <Link to={'/'} className="btn md:bg-transparent border-0 normal-case text-3xl">US CHEF HOUSE</Link>
                    </div>
                </div>

                {/* For Desktop View */}
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal text-white px-1">
                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#a7b3ff] duration-500 font-bold" : ""}>Home</NavLink></li>
                            <li><NavLink to={'/d'} className={({ isActive }) => isActive ? "text-[#a7b3ff] duration-500 font-bold" : ""}>About US</NavLink></li>
                            <li><NavLink to={'/d'} className={({ isActive }) => isActive ? "text-[#a7b3ff] duration-500 font-bold" : ""}>Blog</NavLink></li>
                        </ul>
                    </div>

                    <div className='flex'>
                        <div className="dropdown dropdown-end">
                            <HiUserCircle tabIndex={0} className='text-5xl text-secondary btn btn-ghost btn-circle avatar'></HiUserCircle>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                        <Link to={'/login'} className='btn md:glass px-7 ml-2'>Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;