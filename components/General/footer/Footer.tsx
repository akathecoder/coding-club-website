import React from 'react';
import Image from 'next/image';
import clubLogo from '../../../assets/images/logo.svg';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';
import useStore from '../../../store';
import Link from 'next/link';

interface FooterLink {
    name: string;
    link: string;
    internal: boolean;
    section: string;
}

export function Footer() {
    const router = useRouter();
    const setSection = useStore((s) => s.setVisibleSection);
    const footerLinks: Array<FooterLink> = [
        { name: 'Instagram', link: '', internal: false, section: '' },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/company/coding-club-jklu/', internal: false, section: '' },
        { name: 'Events', link: '/events', internal: false, section: 'events' },
        { name: 'About', link: '/', internal: true, section: 'about' },
        { name: 'Our Team', link: '/', internal: true, section: 'our-team' },
    ];

    async function goToLink(link: string, to: string = '', name: string) {
        if (router.route !== '/') {
            await router.push(link);
        }
        scroller.scrollTo(to, { duration: 800, smooth: 'easeInOutQuint' });
        setSection(name);
    }

    return (
        <footer className="py-5 px-10 bg-accent7">
            <div className="flex items-center gap-4">
                <Image src={clubLogo} alt="club" width="50" height="50" />
                <p className="text-lg">Coding Club JKLU</p>
            </div>
            <ul className="grid grid-cols-2 grid-rows-3 py-5">
                {footerLinks.map((footerLink, i) => (
                    <li className="my-2" key={i}>
                        {footerLink.internal ? (
                            <a
                                onClick={async () =>
                                    await goToLink(footerLink.link, footerLink.section, footerLink.name)
                                }
                            >
                                {footerLink.name}
                            </a>
                        ) : (
                            <Link href={footerLink.link}>{footerLink.name}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </footer>
    );
}
