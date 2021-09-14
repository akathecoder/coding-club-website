import React from 'react';
import styles from './navbar.module.css';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className={styles.nav}>
            <div className={`flex justify-center items-center h-full ${styles.navLinks}`}>
                <ul className="flex">
                    <li className="mx-3 text-xl">About</li>
                    <li className="mx-3 text-xl">Events</li>
                    <li className="mx-3 text-xl">Gallery</li>
                    <li className="mx-3 text-xl">Our Team</li>
                    <li className="mx-3 text-xl">Resources</li>
                    <li className="mx-3 text-xl">Others</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
