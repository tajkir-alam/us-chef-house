import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../ChefCard/ChefCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import burger from '../../../assets/burger.jpeg';
import ribs from '../../../assets/bbqRibs.jpeg';
import pizza from '../../../assets/pizza.jpeg';
import about from '../../../assets/about.png';
import LazyLoad from 'react-lazy-load';
const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://server-data-tajkir-alam.vercel.app/chefinfo')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, []);


    const notify = () => toast("We Will sent you an Email Soon..!");

    return (
        <div>
            <section className='bg-banner-img bg-no-repeat h-[calc(100vh-150px)] lg:[calc(100vh + 10px)]'>
                <Banner />
            </section>

            <section className='my-0 bg-slate-800 text-white py-24'>
                <div className='text-center w-3/4 md:w-2/4 mx-auto'>
                    <h2 className='text-3xl md:text-5xl'>Meet Our Expert Chef's</h2>
                    <div className='border border-yellow-400 w-2/4 mx-auto mt-8 mb-5'></div>
                    <p className='md:font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex accusamus amet praesenti Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, est?</p>
                </div>

                <div className='grid md:grid-cols-3 gap-5 mt-12 px-4 md:custom-container '>
                    {
                        chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    }
                </div>
            </section>

            <section className='custom-container mt-8 md:mt-28'>
                <div className='text-center w-3/4 md:w-2/4 mx-auto'>
                    <h2 className='text-3xl md:text-5xl'>You Want To Be A Chef ?</h2>
                    <div className='border border-slate-300 w-2/4 mx-auto mt-8 mb-5'></div>
                    <p className='md:font-semibold text-slate-500'>In a great classroom, opportunities come knocking at your door.</p>
                    <p className='md:font-bold text-md mt-2 text-slate-400'>Our Curriculum</p>
                </div>

                <div className='grid md:grid-cols-3 mt-10'>
                    <div className=' text-center p-8 rounded-3xl'>
                        <div className='flex justify-center'>
                            <LazyLoad className='lazy'>
                                <img src={burger} alt="" className='w-56 h-56 rounded-full border-8 border-error ' />
                            </LazyLoad>
                        </div>
                        <h1 className='my-4 text-2xl font-bold tracking-wider'>Weekly Workshop</h1>
                        <p className='font-semibold text-slate-700 text-md'>Lorem ipsum dolor sit amet consectetur, quaerat dolores fugiat eveniet. Excepturi?</p>
                        <button onClick={notify} className='btn glass rounded-full btn-outline btn-error mt-6'>LEARN MORE</button>
                    </div>
                    <div className=' text-center p-8 rounded-3xl'>
                        <div className='flex justify-center'>
                            <LazyLoad className='lazy'>
                                <img src={ribs} alt="" className='w-56 h-56 rounded-full border-8 border-error ' />
                            </LazyLoad>
                        </div>
                        <h1 className='my-4 text-2xl font-bold tracking-wider'>Online Training</h1>
                        <p className='font-semibold text-slate-700 text-md'>Lorem ipsum dolor sit amet consectetur, quaerat dolores fugiat eveniet. Excepturi?</p>
                        <button onClick={notify} className='btn glass rounded-full btn-outline btn-error mt-6'>LEARN MORE</button>
                    </div>
                    <div className=' text-center p-8 rounded-3xl'>
                        <div className='flex justify-center'>
                            <LazyLoad className='lazy'>
                                <img src={pizza} alt="" className='w-56 h-56 rounded-full border-8 border-error ' />
                            </LazyLoad>
                        </div>
                        <h1 className='my-4 text-2xl font-bold tracking-wider'>Monthly Workshop</h1>
                        <p className='font-semibold text-slate-700 text-md'>Lorem ipsum dolor sit amet consectetur, quaerat dolores fugiat eveniet. Excepturi?</p>
                        <button onClick={notify} className='btn glass rounded-full btn-outline btn-error mt-6'>LEARN MORE</button>
                    </div>
                </div>
            </section>

            <section className='px-2 md:custom-container mt-8 md:mt-28'>
                <div className='text-center w-3/4 md:w-2/4 mx-auto'>
                    <h2 className='text-3xl md:text-5xl'>Who We Are ?</h2>
                    <div className='border border-blue-500 w-/4 mx-auto mt-6 mb-5'></div>
                </div>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-5 md:mt-16">
                    <div className='md:w-4/5'>
                        <LazyLoad className='lazy'>
                            <img src={about} alt="" />
                        </LazyLoad>
                    </div>
                    <div>
                        <p className='md:font-bold text-xl text-center mt-8 text-slate-500'>
                            We are bakers, we bake the piece of joy. We believe cake and baked goods are an expression of love. <br /> We bake from scratch daily using traditional methods and quality ingredients. There are some things in life you just can't fake, and dang good cake? That's one of them. We use organic whole milk, cage-free eggs, loads of real fruit, pure extracts, amazingly delicious chocolate, and lots and lots of real butter to create simply delicious treats the old-fashioned way.
                        </p>
                    </div>
                </div>
            </section>




            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};
export default Home;