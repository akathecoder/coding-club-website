import React from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import styles from './navbar.module.css';

interface NavbarProps {}

const NavLinksList: React.FC = () => {
    const smallerThan600px = useMediaQuery('(max-width: 600px)');

    const links = [
        { name: 'About', link: '!#' },
        { name: 'Events', link: '/events' },
        { name: 'Gallery', link: '!#' },
        { name: 'Our Team', link: '!#' },
        { name: 'Resources', link: '!#' },
        { name: 'Others', link: '!#' },
    ];

    return (
        <ul className={`flex ${smallerThan600px ? 'flex-col items-center' : ''}`}>
            {links.map(({ name }, idx) => (
                <li key={idx} className="mx-3 text-xl mb-2">
                    {name}
                </li>
            ))}
        </ul>
    );
};

const Navbar: React.FC<NavbarProps> = () => {
    const smallerThan600px = useMediaQuery('(max-width: 600px)');

    return (
        <nav className={`${styles.nav} bg-gray`}>
            <div
                className={`flex justify-center items-center w-full ${styles.navLinks} ${
                    smallerThan600px ? 'absolute h-auto bg-gray top-16 py-4' : 'h-full '
                }`}
            >
                <NavLinksList />
            </div>
        </nav>
    );
};

export default Navbar;
