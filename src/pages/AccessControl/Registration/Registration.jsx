import React from 'react';
import { HiHand } from 'react-icons/hi';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Registration = () => {
    return (
        <div className='mb-12'>
            <div className='flex justify-center items-center gap-2 lg:bg-slate-800 pt-8  lg:py-12'>
                <div className='lg:mt-6'>
                    <h1 className='text-md lg:text-2xl lg:text-yellow-300 text-center font-extrabold tracking-wide'>Hello! WE WAS WAITING FOR YOU</h1>
                    <div className='hidden lg:block border lg:border-white w-3/4 mx-auto my-3'></div>
                </div>
                <HiHand className='text-yellow-300 text-3xl'></HiHand>
            </div>

            <section className='mt-8 lg:my-24 flex justify-center px-4 lg:custom-container'>
                <div className='bg-[#e5e7f18e] shadow-lg shadow-slate-400 p-2'>
                    <div className='bg-[#f7f8ff]  p-8 flex flex-col-reverse lg:grid lg:grid-cols-3 items-center rounded-lg shadow-2xl'>
                        <div className='text-center lg:border-r-2 lg:pr-10 grid'>
                            <h1 className='text-4xl text-slate-600 font-bold tracking-wide'>Already Have An Account?</h1>
                            <p className='text-slate-400 font-medium mt-4'>
                                We Are Grateful
                                <br />
                                To Have You With Us
                                <br />
                                Please Login!
                            </p>
                            <Link to={'/login'} className="btn rounded-full mx-auto mt-6 lg:mt-12 btn-wide">SIGN IN</Link>
                        </div>

                        <div className='col-span-2 px-20 justify-center text-center'>
                            <h1 className='text-4xl text-slate-600 font-bold tracking-wide'>Create Account</h1>
                            <div className='flex gap-2 justify-center items-center my-6'>
                                <button className='w-12 h-12 hover:bg-slate-200 border-2 border-slate-700 rounded-full flex justify-center items-center'>
                                    <FaGoogle className='text-2xl text-slate-700'></FaGoogle>
                                </button>
                                <button className='w-12 h-12 hover:bg-slate-200 border-2 border-slate-700 rounded-full flex justify-center items-center'>
                                    <FaGithub className='text-2xl text-slate-700'></FaGithub>
                                </button>
                            </div>
                            <div>
                                <p>You can also signup with your Email</p>
                                <hr className='border-slate-400 w-3/4 mx-auto mt-2 mb-12' />
                            </div>

                            {/* Form Section */}
                            <form className='grid w-full'>
                                <input type="text" name="name" id="name" placeholder='Name' required
                                    className='border border-slate-200 mb-6 outline-none px-6 py-3 rounded-lg shadow-inner bg-transparent'
                                />
                                <input type="text" name="photo-url" id="photo-url" placeholder='Photo URL' required
                                    className='border border-slate-200 mb-6 outline-none px-6 py-3 rounded-lg shadow-inner bg-transparent'
                                />
                                <input type="email" name="email" id="email" placeholder='Email' required
                                    className='border border-slate-200 mb-6 outline-none px-6 py-3 rounded-lg shadow-inner bg-transparent'
                                />
                                <input type="password" name="password" id="password" placeholder='Password' required
                                    className='border border-slate-200 outline-none px-6 py-3 rounded-lg shadow-inner bg-transparent'
                                />
                                <input type="submit" value="SIGN UP" className="btn rounded-full mx-auto my-8 md:my-10 btn-wide" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;