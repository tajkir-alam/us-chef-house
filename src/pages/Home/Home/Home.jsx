import React from 'react';
import NavBar from '../../SharedPages/Navbar/NavBar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='bg-banner-img h-[calc(100vh-150px)]'>
            <NavBar></NavBar>
            <Banner/>
        </div>
    );
};

export default Home;