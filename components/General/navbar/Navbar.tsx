import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import useStore from '../../../store';
import HamMenu from '../ham-menu/HamMenu';
import Portal from '../portal/Portal';
import styles from './navbar.module.css';
import clubLogo from '../../../assets/images/logo.svg';
import Image from 'next/image';

interface NavbarProps {}

const NavLinksList: React.FC<{ smallerThan600px?: boolean; onClick?: () => void }> = ({
    smallerThan600px = false,
    onClick,
}) => {
    const router = useRouter();
    const visible = useStore((s) => s.visible);
    const widerThan800px = useMediaQuery('(min-width: 800px)');
    const setVisibleSection = useStore((s) => s.setVisibleSection);

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

    async function goToLink(link: string, to: string = '', name: string) {
        if (router.route !== '/') {
            await router.push(link);
        }
        scroller.scrollTo(to, { duration: 800, smooth: 'easeInOutQuint' });
        setVisibleSection(name);
    }

    return (
        <div
            className={`w-full flex justify-between items-center px-10 ${
                smallerThan600px ? 'absolute py-5 bg-gray' : ''
            } ${styles.navLinks}`}
        >
            {(visible === 'About' || visible === 'Our Team') && widerThan800px && (
                <div className={`flex items-center justify-center ${styles.icon}`}>
                    <Image src={clubLogo} alt="university" width="50px" height="50px" />
                </div>
            )}
            {router.route !== '/' && !smallerThan600px && (
                <div className={`flex items-center justify-center ${styles.icon}`}>
                    <Image src={clubLogo} alt="university" width="50px" height="50px" />
                </div>
            )}
            <ul className={`flex m-auto ${smallerThan600px ? 'flex-col items-center' : 'justify-center'}`}>
                {links.map(({ name, link, section, to }, idx) => (
                    <button key={idx} onClick={onClick}>
                        <li
                            className={`mx-3 text-xl relative ${
                                showUnderline(link, name) ? 'border-b-4 border-brand' : ''
                            }`}
                        >
                            {section ? (
                                <a onClick={async () => await goToLink(link, to, name)}>{name}</a>
                            ) : (
                                <Link href={link}>{name}</Link>
                            )}
                        </li>
                    </button>
                ))}
            </ul>

            {(visible === 'About' || visible === 'Our Team') && !smallerThan600px && (
                <div className={`${styles.joinButton}`}>
                    <button className="bg-brand px-4 py-1 rounded-md">Join Club</button>
                </div>
            )}
            {router.route !== '/' && !smallerThan600px && (
                <div className={`${styles.joinButton}`}>
                    <button className="bg-brand px-4 py-1 rounded-md">Join Club</button>
                </div>
            )}
        </div>
    );
};

const Navbar: React.FC<NavbarProps> = () => {
    const smallerThan600px = useMediaQuery('(max-width: 745px)');

    const [open, setOpen] = useState<boolean>(false);
    const visible = useStore((s) => s.visible);

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
                        ? 'z-20 left-0 right-0 fixed flex justify-end items-center border-b-2 border-accent5'
                        : 'flex justify-end items-center'
                } ${styles.nav} bg-gray`}
            >
                {smallerThan600px && (
                    <div className="px-4 w-full flex justify-between items-center">
                        {visible !== 'Home' && smallerThan600px ? (
                            <div>
                                <button className="bg-brand px-4 py-1 rounded-md">Join Club</button>
                            </div>
                        ) : (
                            <Fragment>{smallerThan600px ? <div></div> : <Fragment></Fragment>}</Fragment>
                        )}
                        {smallerThan600px && (
                            <div className="cursor-pointer h-full flex justify-center items-center mx-3">
                                <HamMenu onClick={toggleNavbar} open={open} />
                            </div>
                        )}
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
                            className={`absolute w-full h-screen bg-gray left-0 right-0 z-10 opacity-60 ${styles.backdrop}`}
                            onClick={closeNavLinks}
                            style={{ top: window.scrollY }}
                        ></div>
                    )}
                </Portal>
            </nav>
        </Fragment>
    );
};

export default Navbar;
