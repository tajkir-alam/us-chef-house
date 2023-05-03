import React from 'react';
import { HiHand } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <div className='flex justify-center items-center gap-2 md:bg-slate-800 md:py-12'>
                <div>
                    <h1 className='text-2xl md:text-yellow-300 text-center font-extrabold tracking-wide mt-3 md:mt-8'>Hello! WE WAS WAITING FOR YOU</h1>
                    <div className='hidden md:block border border-white w-3/4 mx-auto my-3'></div>
                </div>
                <HiHand className='text-yellow-300 text-3xl'></HiHand>
            </div>

            <section className='my-24 flex justify-center md:custom-container'>
                <div className='bg-[#e5e7f18e] shadow-lg shadow-slate-400 p-2'>
                    <div className='bg-[#f7f8ff]  p-8 grid md:grid-cols-3 rounded-lg shadow-2xl'>
                        <div className='text-center border-r-2 pr-10'>
                            <h1 className='text-4xl text-slate-600 font-bold tracking-wide'>Already Have an Account?</h1>
                            <p className='text-slate-400 font-medium mt-4'>
                                We Are Grateful
                                <br />
                                To Have You With Us
                                <br />
                                Please Login!
                            </p>
                            <Link to={'/registration'} className="btn mt-8 btn-wide">SIGN UP</Link>
                        </div>

                        <div className='col-span-2'>
                            <h1 className='text-4xl text-slate-600 font-bold tracking-wide'>Welcome Back</h1>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;