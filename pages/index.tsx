import fs from 'fs';
import Hero from '../components/Sections/Hero/Hero';
import OurTeam from '../components/Sections/Our-Team/our-team';
import { OurTeam as IOurTeam } from '../types';

const Home: React.FC<IOurTeam> = (props) => {
    return (
        <>
            <Hero />
            <OurTeam {...props} />
        </>
    );
};

export async function getStaticProps() {
    const eventsRespose = fetchEventsData() as IOurTeam;

    return {
        props: eventsRespose,
    };

    function fetchEventsData() {
        const ourTeamFile = fs.readFileSync('data/ourTeam.json', { encoding: 'utf-8' });
        const ourTeamData = JSON.parse(ourTeamFile);
        return ourTeamData;
    }
}

export default Home;
