import React from 'react';
import NavBar from '../SharedPages/Navbar/NavBar';
import { useRouteError } from 'react-router-dom';
import pizzaError from '../../assets/pizzaerror.png'

const ErrorPage = () => {
    const { error, status, statusText } = useRouteError();

    return (
        // <div className='bg-[#d9dde3]'>
        <div className='bg-error'>
            <NavBar />
            <div className=' px-4 md:custom-container pt-8 md:pt-28'>
                <div className='grid md:grid-cols-2 items-center shadow-inner p-5'>
                    <div>
                        <div className='text-center animate-bounce easy-in'>
                            <h1 className="text-[200px] font-semibold text-[#3847ce]">
                                {status}
                            </h1>
                            <h4 className='text-[50px] font-medium text-[#f1ff34]'>
                                {statusText}
                            </h4>
                        </div>
                        <h5 className='text-lg text-center mt-16'>{error.message}</h5>
                    </div>
                    <div className='mt-12 md:mt-0 md:border-l-2 border-slate-200 pl-4'>
                        <div>
                            <img src={pizzaError} alt="" className='w-full' />
                        </div>
                        <div className='text-center mt-8'>
                            <h2 className='text-3xl text-slate-800'>Bite it, Cz who bite this he always come back!!!</h2>
                            <p className='text-slate-500 mt-2'>There is an error occurred. Please visit later.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;