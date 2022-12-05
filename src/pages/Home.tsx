import React from 'react';
import Homepage from '../components/Main-Homepage';
import Search from '../components/Search';

const Home = () => {
    return (
        <div className="min-h-screen text-pokegray-50">
            <Search />
            <Homepage />
        </div>
    );
};

export default Home;
