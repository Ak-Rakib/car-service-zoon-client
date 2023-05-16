import React from 'react';
import Navbar from '../Share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';

const Main = () => {
    return (
        <div className='mr-5 ml-5'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;