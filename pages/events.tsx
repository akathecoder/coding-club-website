import Event from '../components/General/event/Event';
import styles from '../styles/events.module.css';
import { EventsResponse } from '../types';

function Events({ data }: EventsResponse) {
    return (
        <section className={`bg-background flex items-center flex-col ${styles.eventsContainer}`}>
            <header className="py-10">
                <h1 className="text-6xl">Events</h1>
            </header>
            <div className="grid grid-cols-2 gap-20 mt-5">
                {data.events.map((event, idx) => (
                    <Event key={idx} {...event} />
                ))}
            </div>
        </section>
    );
}

export async function getStaticProps() {
    const eventsRespose = (await fetchEventsData()) as EventsResponse;

    return {
        props: eventsRespose,
    };

    async function fetchEventsData() {
        const res = await fetch('http://localhost:3000/api/events');
        return await res.json();
    }
}

export default Events;
