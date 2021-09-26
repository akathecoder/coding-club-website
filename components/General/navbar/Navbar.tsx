import React, { Fragment, useEffect, useState } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import HamMenu from '../ham-menu/HamMenu';
import Portal from '../portal/Portal';
import styles from './navbar.module.css';
import Link from 'next/link';

interface NavbarProps {}

const NavLinksList: React.FC<{ smallerThan600px?: boolean; onClick?: () => void }> = ({
    smallerThan600px = false,
    onClick,
}) => {
    const links = [
        { name: 'About', link: '!#' },
        { name: 'Events', link: '/events' },
        { name: 'Gallery', link: '!#' },
        { name: 'Our Team', link: '!#' },
        { name: 'Resources', link: '!#' },
        { name: 'Projects', link: '/projects' },
        { name: 'Others', link: '!#' },
    ];

    return (
        <div className={`w-full ${smallerThan600px ? 'absolute py-5 bg-gray' : ''} ${styles.navLinks}`}>
            <ul className={`flex ${smallerThan600px ? 'flex-col items-center' : 'justify-center'}`}>
                {links.map(({ name, link }, idx) => (
                    <button key={idx} onClick={onClick}>
                        <li className={`mx-3 text-xl mb-1 relative`}>
                            <Link href={link}>{name}</Link>
                        </li>
                    </button>
                ))}
            </ul>
        </div>
    );
};

const Navbar: React.FC<NavbarProps> = () => {
    const smallerThan600px = useMediaQuery('(max-width: 600px)');
    const [open, setOpen] = useState<boolean>(false);

    function closeNavLinks() {
        setOpen(false);
    }

    function toggleNavbar() {
        setOpen((o) => !o);
    }

    useEffect(() => {
        if (!smallerThan600px) {
            setOpen(false);
        }

        if (open) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'scroll';
        }
    }, [smallerThan600px, open, setOpen]);

    return (
        <Fragment>
            <div style={{ width: '100%', height: '70px' }}></div>
            <nav
                className={`fixed w-full z-30 top-0 ${
                    smallerThan600px && open
                        ? 'z-20 left-0 right-0 fixed flex justify-end items-center'
                        : 'flex justify-end items-center'
                } ${styles.nav} bg-gray`}
            >
                {smallerThan600px && (
                    <div className="px-4 cursor-pointer h-full flex justify-center items-center mx-3">
                        <HamMenu onClick={toggleNavbar} open={open} />
                    </div>
                )}

                {smallerThan600px ? (
                    <Fragment>
                        {open ? <NavLinksList smallerThan600px onClick={closeNavLinks} /> : <Fragment></Fragment>}
                    </Fragment>
                ) : (
                    <NavLinksList />
                )}

                <Portal selector="backdrop">
                    {open && smallerThan600px && (
                        <div
                            className="absolute w-full h-full bg-gray left-0 top-0 right-0 z-10 opacity-90"
                            onClick={closeNavLinks}
                        ></div>
                    )}
                </Portal>
            </nav>
        </Fragment>
    );
};

export default Navbar;
