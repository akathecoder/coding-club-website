import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    const router = useRouter();
    const staticNav = ['/events'];

    function positionNav() {
        return staticNav.includes(router.pathname) ? 'static' : 'fixed';
    }

    return (
        <nav className={`${positionNav} ${styles.nav}`}>
            <div className={`flex justify-center items-center h-full ${styles.navLinks}`}>
                <ul className="flex">
                    <li className="mx-3 text-xl">About</li>
                    <li className="mx-3 text-xl">
                        <Link href="/events">
                            <a>Events</a>
                        </Link>
                    </li>
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
