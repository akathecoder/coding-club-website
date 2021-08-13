import { NextPage } from 'next';
import Image from 'next/image';
import background from '../../assets/images/spaceBackground.svg';
import logo from '../../assets/images/logo.svg';
import jkluLogo from '../../assets/images/jkluLogoWhite.svg';
import { CLUB_NAME } from '../../assets/constant/globalVariables';
import styles from './HeroSection.module.css';

const HeroSection: NextPage = () => {
    return (
        <section className="bg-background h-screen relative">
            <Image src={background} alt="" layout="fill" objectFit="cover" />
            <div className="w-28 lg:w-40 mx-auto lg:ml-auto lg:mr-10 pt-10">
                <Image src={jkluLogo} alt="jklu logo" />
            </div>
            <div className="w-52 lg:w-72 mx-auto mt-32 lg:mt-0 my-10">
                <Image src={logo} alt="coding club logo" />
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-center my-10">{CLUB_NAME}</h1>
            <div className={`${styles.iconScroll} bottom-10`}></div>
        </section>
    );
};

export default HeroSection;
