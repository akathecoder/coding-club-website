import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useStore from '../../../store';
import styles from './about.module.css';

export function About() {
    const { ref, inView } = useInView({ threshold: 0.9 });
    const setSection = useStore((s) => s.setVisibleSection);

    useEffect(() => {
        if (inView) {
            setSection('About');
        }
    }, [inView, setSection]);

    return (
        <section ref={ref} className={`border-t relative border-accent6 px-10 md:px-20 ${styles.aboutSection}`}>
            <h1 className="my-5 text-4xl text-center md:text-5xl lg:text-6xl">About</h1>
            <div className="flex items-center flex-col md:mt-14 lg:mt-20">
                <div className="text-center mb-20 max-w-3xl">
                    <h2 className="text-2xl border-b-4 border-brand inline-block md:text-3xl lg:text-4xl">Vision</h2>
                    <p className="text-lg text-justify mt-3 md:text-xl lg:text-2xl">
                        We believe that everyone has the opportunity to learn to code, regardless of who they are or
                        what branch/institute they come from. We believe in learning by doing, and through our coding
                        projects, people can be creative and share their creations with one another. At Coding Club, we
                        believe that all children, no matter who they are or where they come from, should have the
                        opportunity to learn to code.
                    </p>
                </div>

                <div className="text-center mb-20 max-w-3xl">
                    <h2 className="text-2xl border-b-4 border-brand inline-block md:text-3xl lg:text-4xl">Mission</h2>
                    <p className="text-lg text-justify mt-3 md:text-xl lg:text-2xl">
                        We have a community that grows together, so an engineering student without coding skills is like
                        a warrior without a sword. Students in this environment will share their ideas and projects with
                        and learn around each other.
                    </p>
                </div>

                <div className="text-center mb-20 max-w-3xl">
                    <h2 className="text-2xl border-b-4 border-brand inline-block md:text-3xl lg:text-4xl">Values</h2>
                    <p className="text-lg text-justify mt-3 md:text-xl lg:text-2xl">Learn | Inspire | Grow | Conquer</p>
                </div>
            </div>
            <div style={{ height: 70 }} id="our-team" className="absolute bottom-0 left-0 w-full"></div>
        </section>
    );
}
