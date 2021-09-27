import React, { Fragment, useEffect, useState } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import HamMenu from '../ham-menu/HamMenu';
import Portal from '../portal/Portal';
import styles from './navbar.module.css';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';

interface NavbarProps {}

const NavLinksList: React.FC<{ smallerThan600px?: boolean; onClick?: () => void }> = ({
    smallerThan600px = false,
    onClick,
}) => {
    const router = useRouter();
    const links = [
        { name: 'Home', link: '/', section: true, to: 'home' },
        { name: 'About', link: '/', section: true, to: 'about' },
        { name: 'Events', link: '/events', section: false },
        { name: 'Gallery', link: '/', section: false },
        { name: 'Our Team', link: '/', section: true, to: 'our-team' },
        { name: 'Projects', link: '/projects', section: false },
        { name: 'Others', link: '/', section: false },
    ];

    return (
        <div className={`w-full ${smallerThan600px ? 'absolute py-5 bg-gray' : ''} ${styles.navLinks}`}>
            <ul className={`flex ${smallerThan600px ? 'flex-col items-center' : 'justify-center'}`}>
                {links.map(({ name, link, section, to }, idx) => (
                    <button key={idx} onClick={onClick}>
                        <li className={`mx-3 text-xl mb-1 relative`}>
                            {section ? (
                                <ScrollLink
                                    to={to ? to : ''}
                                    smooth={true}
                                    spy={true}
                                    duration={100}
                                    onClick={() => router.push(link)}
                                >
                                    {name}
                                </ScrollLink>
                            ) : (
                                <Link href={link}>{name}</Link>
                            )}
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
