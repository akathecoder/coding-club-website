import { Event as EventType } from '../../../types';
import { useRouter } from 'next/router';

function Event(event: EventType) {
    const router = useRouter();
    return (
        <div className="mb-5 w-event-sm lg:mb-10 lg:w-event-base">
            <p className="text-lg">{event.date}</p>
            <h1 className="text-2xl lg:text-3xl font-bold underline">{event.title}</h1>
            <div className="flex text-base lg:text-lg my-1">
                <p>
                    {event.timeFrom} - {event.timeTo}
                </p>
                <p className="ml-1">@ {event.venue}</p>
            </div>
            <p>{event.description}</p>
            <button
                className="bg-white text-black px-5 py-1 rounded-full my-2"
                onClick={() => router.push(event.link || '!#')}
            >
                More Info
            </button>
        </div>
    );
}

export default Event;
