import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import useStore from '../../../store';
import HamMenu from '../ham-menu/HamMenu';
import Portal from '../portal/Portal';
import styles from './navbar.module.css';

interface NavbarProps {}

const NavLinksList: React.FC<{ smallerThan600px?: boolean; onClick?: () => void }> = ({
    smallerThan600px = false,
    onClick,
}) => {
    const router = useRouter();
    const visible = useStore((s) => s.visible);
    const links = [
        { name: 'Home', link: '/', section: true, to: 'home' },
        { name: 'About', link: '/', section: true, to: 'about' },
        { name: 'Events', link: '/events', section: false },
        { name: 'Our Team', link: '/', section: true, to: 'our-team' },
        { name: 'Projects', link: '/projects', section: false },
        { name: 'Others', link: '/others', section: false },
    ];

    function showUnderline(link: string, name: string) {
        if (visible === name && router.route === '/') {
            return true;
        }

        if (router.route === link && router.route !== '/') {
            return true;
        }
    }

    async function goToLink(link: string, to: string = '') {
        if (router.route !== '/') {
            await router.push(link);
        }
        scroller.scrollTo(to, { duration: 800, smooth: 'easeInOutQuint' });
    }

    return (
        <div className={`w-full ${smallerThan600px ? 'absolute py-5 bg-gray' : ''} ${styles.navLinks}`}>
            <ul className={`flex ${smallerThan600px ? 'flex-col items-center' : 'justify-center'}`}>
                {links.map(({ name, link, section, to }, idx) => (
                    <button key={idx} onClick={onClick}>
                        <li
                            className={`mx-3 text-xl relative ${
                                showUnderline(link, name) ? 'border-b-4 border-brand' : ''
                            }`}
                        >
                            {section ? (
                                <a onClick={async () => await goToLink(link, to)}>{name}</a>
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
                    <div className="flex justify-center w-full">
                        <NavLinksList />
                    </div>
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
