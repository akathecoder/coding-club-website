import React, { Fragment, useEffect, useState } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import HamMenu from '../ham-menu/HamMenu';
import Portal from '../portal/Portal';
import styles from './navbar.module.css';
import Link from 'next/link';

interface NavbarProps {}

const NavLinksList: React.FC<{ smallerThan600px: boolean }> = ({ smallerThan600px }) => {
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
            {links.map(({ name, link }, idx) => (
                <li key={idx} className={`mx-3 text-xl mb-2 relative`}>
                    <Link href={link}>{name}</Link>
                </li>
            ))}
        </ul>
    );
};

const Navbar: React.FC<NavbarProps> = () => {
    const smallerThan600px = useMediaQuery('(max-width: 600px)');
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (!smallerThan600px) {
            setOpen(false);
        }
    }, [smallerThan600px]);

    return (
        <nav
            className={`${
                smallerThan600px && open
                    ? 'z-20 left-0 right-0 fixed flex justify-end items-center'
                    : 'flex justify-end items-center'
            } ${styles.nav} bg-gray`}
        >
            {smallerThan600px && (
                <div className="px-6 cursor-pointer">
                    <HamMenu onClick={() => setOpen((o) => !o)} />
                </div>
            )}
            <div
                className={`flex justify-center items-center w-full ${styles.navLinks} ${
                    smallerThan600px ? 'absolute h-auto bg-gray top-16' : 'h-full '
                }`}
            >
                {smallerThan600px && open ? (
                    <NavLinksList smallerThan600px={smallerThan600px} />
                ) : (
                    <Fragment>
                        {!smallerThan600px ? (
                            <NavLinksList smallerThan600px={smallerThan600px} />
                        ) : (
                            <Fragment></Fragment>
                        )}
                    </Fragment>
                )}
            </div>

            <Portal selector="backdrop">
                {open && smallerThan600px && (
                    <div
                        className="absolute w-full h-full bg-gray left-0 top-0 right-0 z-10 opacity-90"
                        onClick={() => setOpen(false)}
                    ></div>
                )}
            </Portal>
        </nav>
    );
};

export default Navbar;
