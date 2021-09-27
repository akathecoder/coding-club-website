import Image from 'next/image';
import React from 'react';
import Logo from '../../../assets/images/logo.svg';
import styles from './hero.module.css';

function Hero() {
    return (
        <section
            id="hero-section"
            className={`flex flex-col justify-center bg-background px-3 ${styles.homeContainer}`}
        >
            <figure className={`text-center my-5 ${styles.logoContainer}`}>
                <Image src={Logo} alt="coding club logo" aria-readonly="true" />
            </figure>
            <h1
                className="text-white font-bold text-4xl text-center
                    sm:text-5xl lg:text-6xl xl:text-8xl"
            >
                JKLU Coding Club
            </h1>
            <p className="text-center text-xl my-3 sm:text-2xl lg:text-3xl xl:text-4xl">
                Join the biggest student community at{' '}
                <b className="whitespace-nowrap text-brand">JK Lakshmipat University</b>
            </p>
            <div className={`text-center mt-12`}>
                <div className="bg-accent7 email-container w-11/12 container max-w-2xl mx-auto rounded-xl py-3 px-3 flex justify-between space-x-4 sm:py-4 sm:px-5 lg:py-5 lg:px-10">
                    <input
                        type="text"
                        className="bg-accent7 text-lg container sm:text-xl lg:text-2xl"
                        placeholder="Enter your email"
                    />
                    <button className="bg-brand px-5 py-2 text-md rounded-md sm:px-7 lg:text-lg lg:px-10 lg:py-3">
                        Register
                    </button>
                </div>
                <div className="my-8 text-md">
                    <p>
                        Learn more about us{' '}
                        <a href="!#" className="underline">
                            here
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
