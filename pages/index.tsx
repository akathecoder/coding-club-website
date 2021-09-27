import fs from 'fs';
import { About } from '../components/Sections/About/About';
import Hero from '../components/Sections/Hero/Hero';
import OurTeam from '../components/Sections/Our-Team/our-team';
import { OurTeam as IOurTeam } from '../types';

const Home: React.FC<IOurTeam> = (props) => {
    return (
        <>
            <Hero />
            <About />
            <OurTeam {...props} />
        </>
    );
};

export async function getStaticProps() {
    const ourTeamResponse = fetchOurData() as IOurTeam;

    return {
        props: ourTeamResponse,
    };

    function fetchOurData() {
        const ourTeamFile = fs.readFileSync('data/ourTeam.json', { encoding: 'utf-8' });
        const ourTeamData = JSON.parse(ourTeamFile);
        return ourTeamData;
    }
}

export default Home;
