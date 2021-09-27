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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sunt, adipisci nisi explicabo
                        aspernatur quaerat a. Tenetur odit cum sit totam itaque laborum saepe quas ipsum vero, ex
                        dignissimos ipsa!
                    </p>
                </div>

                <div className="text-center mb-20 max-w-3xl">
                    <h2 className="text-2xl border-b-4 border-brand inline-block md:text-3xl lg:text-4xl">Mission</h2>
                    <p className="text-lg text-justify mt-3 md:text-xl lg:text-2xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, placeat porro voluptas
                        praesentium explicabo soluta excepturi corrupti! Quia, aut ab!
                    </p>
                </div>

                <div className="text-center mb-20 max-w-3xl">
                    <h2 className="text-2xl border-b-4 border-brand inline-block md:text-3xl lg:text-4xl">Values</h2>
                    <p className="text-lg text-justify mt-3 md:text-xl lg:text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quidem tempora sit laudantium
                        perferendis voluptate aspernatur architecto repudiandae placeat nostrum quaerat dolores,
                        voluptas corporis assumenda!
                    </p>
                </div>
            </div>
            <div style={{ height: 70 }} id="our-team" className="absolute bottom-0 left-0 w-full"></div>
        </section>
    );
}
