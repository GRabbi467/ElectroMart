import React from 'react';
import Navbar from './../Component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;