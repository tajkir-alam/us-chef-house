import React from 'react';
import { HiUserCircle, HiMenuAlt1 } from "react-icons/hi";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className="navbar custom-container">
                {/* For Mobile View */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <HiMenuAlt1 className='text-white text-3xl'></HiMenuAlt1>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link>About US</Link></li>
                            <li><Link>Blog</Link></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn bg-transparent border-0 normal-case text-3xl">CHEF HOUSE</Link>
                </div>

                {/* For Desktop View */}
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal text-white px-1">
                            <li><Link>Home</Link></li>
                            <li><Link>About US</Link></li>
                            <li><Link>Blog</Link></li>
                        </ul>
                    </div>

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
                </div>
            </div>
        </>
    );
};

export default NavBar;