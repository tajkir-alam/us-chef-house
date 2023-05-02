import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/SharedPages/Footer/Footer';
import NavBar from '../pages/SharedPages/Navbar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;