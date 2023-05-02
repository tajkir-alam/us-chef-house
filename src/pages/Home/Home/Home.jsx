import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../ChefCard/ChefCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import burger from '../../../assets/burger.jpeg';
import ribs from '../../../assets/bbqRibs.jpeg';
import pizza from '../../../assets/pizza.jpeg';

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

            <section className='custom-container mt-28'>
                <div className='text-center w-3/4 md:w-2/4 mx-auto'>
                    <h2 className='text-3xl md:text-5xl'>You Want To Be A Chef ?</h2>
                    <div className='border border-slate-300 w-2/4 mx-auto mt-8 mb-5'></div>
                    <p className='md:font-semibold text-slate-500'>In a great classroom, opportunities come knocking at your door.</p>
                    <p className='md:font-bold text-md mt-2 text-slate-400'>Our Curriculum</p>
                </div>

                <div className='grid md:grid-cols-3 mt-10'>
                    <div className=' text-center p-8 rounded-3xl'>
                        <div className='flex justify-center'>
                            <img src={burger} alt="" className='w-56 h-56 rounded-full border-8 border-error ' />
                        </div>
                        <h1 className='my-4 text-2xl font-bold tracking-wider'>Weekly Workshop</h1>
                        <p className='font-semibold text-slate-700 text-md'>Lorem ipsum dolor sit amet consectetur, quaerat dolores fugiat eveniet. Excepturi?</p>
                        <button className='btn glass rounded-full btn-outline btn-error mt-6'>LEARN MORE</button>
                    </div>
                    <div className=' text-center p-8 rounded-3xl'>
                        <div className='flex justify-center'>
                            <img src={ribs} alt="" className='w-56 h-56 rounded-full border-8 border-error ' />
                        </div>
                        <h1 className='my-4 text-2xl font-bold tracking-wider'>Online Training</h1>
                        <p className='font-semibold text-slate-700 text-md'>Lorem ipsum dolor sit amet consectetur, quaerat dolores fugiat eveniet. Excepturi?</p>
                        <button className='btn glass rounded-full btn-outline btn-error mt-6'>LEARN MORE</button>
                    </div>
                    <div className=' text-center p-8 rounded-3xl'>
                        <div className='flex justify-center'>
                            <img src={pizza} alt="" className='w-56 h-56 rounded-full border-8 border-error ' />
                        </div>
                        <h1 className='my-4 text-2xl font-bold tracking-wider'>Monthly Workshop</h1>
                        <p className='font-semibold text-slate-700 text-md'>Lorem ipsum dolor sit amet consectetur, quaerat dolores fugiat eveniet. Excepturi?</p>
                        <button onClick={notify} className='btn glass rounded-full btn-outline btn-error mt-6'>LEARN MORE</button>
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