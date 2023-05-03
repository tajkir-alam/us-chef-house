import React from 'react';
import { HiHeart } from 'react-icons/hi';

const Login = () => {
    return (
        <div>
            <div className='flex justify-center items-center md:bg-slate-800 md:py-12'>
                <div>
                    <h1 className='text-2xl md:text-yellow-300 text-center font-extrabold tracking-wide mt-3 md:mt-8'>Hello! We was waiting for you. </h1>
                    <div className='hidden md:block border border-white w-3/4 mx-auto my-3'></div>
                </div>
                <HiHeart></HiHeart>
            </div>

            <section className='my-24'>

            </section>
        </div>
    );
};

export default Login;