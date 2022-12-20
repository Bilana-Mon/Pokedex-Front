import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './Menu-Items';
import { ReactComponent as PokeballIcon } from '../assets/icons/pokeball.svg';
import { ReactComponent as PokeballOpenIcon } from '../assets/icons/pokemon-open.svg';

const Header = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <header className="flex justify-between items-center mb-5">
            <div className="font-flexo font-black text-5xl text-logo">
                Pokédex
            </div>
            <nav className="flex justify-center hover:cursor-pointer">
                {!openModal ? (
                    <PokeballIcon
                        className="w-[50px] h-[50px]"
                        onClick={() => setOpenModal(true)}
                    />
                ) : (
                    <span>
                        <PokeballOpenIcon
                            className="w-[50px] h-[50px]"
                            onClick={() => setOpenModal(false)}
                        />
                        <MenuItems
                            modalOpen={openModal}
                            closeModal={() => setOpenModal(false)}
                        />
                    </span>
                )}
            </nav>
        </header>
    );
};

export default Header;
