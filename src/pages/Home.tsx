import React from 'react';
import Homepage from '../components/Main-Homepage';
import Search from '../components/Search';

const Home = () => {
    return (
        <div className="min-h-fit text-pokegray-50">
            <Search />
            <Homepage />
        </div>
    );
};

export default Home;
