import { NextPage } from 'next';
import Logo from '../assets/images/logo.svg';
import Image from 'next/image';
import styles from '../styles/index.module.css';
import Navbar from '../components/General/navbar/Navbar';

const Home: NextPage = () => {
    return (
        <>
            <Navbar />
            <section className={`h-screen bg-background pt-16 px-3 ${styles.homeContainer}`}>
                <figure className={`text-center pt-12 my-5 ${styles.logoContainer}`}>
                    <Image src={Logo} alt="coding club logo" aria-readonly="true" />
                </figure>
                <h1
                    className="text-white font-bold text-5xl text-center
                    lg:text-6xl xl:text-8xl"
                >
                    JKLU Coding Club
                </h1>
                <p className="text-center text-2xl my-3 lg:text-3xl xl:text-4xl">
                    Join the biggest student community at{' '}
                    <b className="whitespace-nowrap" style={{ color: '#845EF7' }}>
                        JK Lakshmipat University
                    </b>
                </p>
                <div className={`text-center mt-12`}>
                    <div
                        className="email-container w-11/12 container max-w-2xl mx-auto
                        rounded-xl py-4 px-5 flex justify-between space-x-4 lg:py-5 lg:px-10"
                        style={{ backgroundColor: '#252729' }}
                    >
                        <input
                            type="text"
                            className="text-xl container lg:text-2xl"
                            placeholder="Enter your email"
                            style={{ backgroundColor: '#252729' }}
                        />
                        <button
                            style={{ backgroundColor: '#845EF7' }}
                            className="px-7 py-2 text-md rounded-md lg:text-lg lg:px-10 lg:py-3"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
