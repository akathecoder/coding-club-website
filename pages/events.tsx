import fs from 'fs';
import Event from '../components/General/event/Event';
import styles from '../styles/events.module.css';
import { EventsData } from '../types';

function Events({ events }: EventsData) {
    return (
        <section className={`bg-background flex items-center flex-col ${styles.eventsContainer}`}>
            <header className="py-10">
                <h1 className="text-6xl">Events</h1>
            </header>
            <div className="grid grid-cols-1 gap-20 mt-5 px-10 s-800:grid-cols-2">
                {events.map((event, idx) => (
                    <Event key={idx} {...event} />
                ))}
            </div>
        </section>
    );
}

export async function getStaticProps() {
    const eventsRespose = fetchEventsData() as EventsData;

    return {
        props: eventsRespose,
    };

    function fetchEventsData() {
        const eventsFile = fs.readFileSync('data/events.json', { encoding: 'utf-8' });
        const eventsData = JSON.parse(eventsFile);
        return eventsData;
    }
}

export default Events;
