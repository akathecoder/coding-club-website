import { NextPage } from 'next';
import HeroSection from '../components/HomePageSections/HeroSection';

const Home: NextPage = () => {
    return (
        <>
            <header></header>

            <main>
                <HeroSection />
            </main>

            <footer></footer>
        </>
    );
};

export default Home;
