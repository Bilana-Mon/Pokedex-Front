import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen px-3 py-5 bg-pokegray-250">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
