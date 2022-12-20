import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

type Props = {
    modalOpen: any;
    closeModal: any;
};

const MenuItems = ({ modalOpen, closeModal }: Props) => {
    if (!modalOpen) return null;

    return ReactDom.createPortal(
        <div className="absolute top-20 right-0.5 flex flex-col justify-center items-center shadow-lg">
            <ul className="flex flex-col text-lg font-semibold text-pokegray-50 font-flexo-md">
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
        </div>,

        document.getElementById('modal')!
    );
};

export default MenuItems;
