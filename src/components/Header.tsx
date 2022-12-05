import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <div className="font-flexo font-black text-5xl text-logo">
                Pokédex
            </div>
            <nav>
                <ul className="flex text-lg font-semibold text-pokegray-50 font-flexo-md">
                    <Link to={'/'}>
                        <li className="mr-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:border-b border-b-pokered duration-300">
                            Home
                        </li>
                    </Link>
                    <Link to={'/about'}>
                        {' '}
                        <li className="mr-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:border-b border-b-pokered duration-300">
                            About
                        </li>
                    </Link>

                    <a
                        href="https://github.com/Bilana-Mon"
                        target="_blank"
                        className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:border-b border-b-pokered duration-300"
                    >
                        <li> Git</li>
                    </a>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
