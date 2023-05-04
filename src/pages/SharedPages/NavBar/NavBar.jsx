import React, { useContext, useEffect, useState } from 'react';
import { HiUserCircle, HiMenuAlt1 } from "react-icons/hi";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const NavBar = () => {
    const [bgColor, setBgColor] = useState(false);
    const { user, logout } = useContext(AuthContext);
    console.log(user?.photoURL);
    const navigate = useNavigate();

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setBgColor(true)
        }
        else {
            setBgColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    const signOut = () => {
        logout()
            .then(result => {
                const user = result.user;
                navigate('/login');
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <>
            <div className={bgColor ? "lg:bg-slate-800 lg:fixed navbar custom-container z-10 duration-500 delay-75" : 'bg-slate-300 lg:bg-transparent lg:fixed navbar custom-container'}>
                {/* For Mobile View */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <HiMenuAlt1 className='lg:text-white text-3xl'></HiMenuAlt1>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#7E90FE]duration-500 font-bold" : ""}>Home</NavLink></li>
                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#7E90FE] duration-500 font-bold" : ""}>About US</NavLink></li>
                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#7E90FE] duration-500 font-bold" : ""}>Blog</NavLink></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn lg:bg-transparent border-0 normal-case text-3xl">US CHEF HOUSE</Link>
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
                            {user ?
                                <div className='group'>
                                    <img tabIndex={0} src={user?.photoURL} alt="" className='btn-circle' />
                                    <p className='opacity-0 group-hover:opacity-100 absolute text-2xl text-yellow-400 font-semibold'>{user?.displayName}</p>
                                </div>
                                : ""
                            }
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Profile</a></li>
                                <li><a>Settings</a></li>
                                <li onClick={signOut} className='md:hidden'><a>Logout</a></li>
                            </ul>
                        </div>
                        {user ?
                            <span className='hidden md:block'><Link to={'/login'} onClick={signOut} className='btn lg:glass px-7 ml-2'>Logout</Link></span>
                            : <Link to={'/login'} className='btn lg:glass px-7 ml-2'>Login</Link>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;