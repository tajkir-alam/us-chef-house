import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../ChefCard/ChefCard';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://server-data-tajkir-alam.vercel.app/chefinfo')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

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
                    <p className='md:font-semibold text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex accusamus amet praesenti Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, est?</p>
                </div>
            </section>
        </div>
    );
};
export default Home;