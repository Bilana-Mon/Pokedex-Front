import React from 'react';
import { ReactComponent as LinkdinIcon } from '../assets/icons/linkdin.svg';
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';

const Footer = () => {
    return (
        <footer className="mt-auto flex flex-col justify-center items-center text-pokegray-50 text-md font-flexo-md">
            <span>Also Check on Social Media</span>{' '}
            <span className="flex">
                <a
                    href="https://www.linkedin.com/in/bilana-monshtein-1387ab19a/"
                    target="_blank"
                >
                    {' '}
                    <LinkdinIcon className="w-[30px] h-[30px]" />
                </a>
                <a
                    href="https://www.facebook.com/bilana.monshtane/"
                    target="_blank"
                >
                    <FacebookIcon className="w-[30px] h-[30px]" />
                </a>
            </span>
        </footer>
    );
};

export default Footer;
