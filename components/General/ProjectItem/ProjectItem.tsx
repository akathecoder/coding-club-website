import Image from 'next/image';
import { Project } from '../../../types';
import './projectitem.module.css';
import styles from './projectitem.module.css';

export function ProjectItem({ description, image, link, title }: Project) {
    return (
        <div className="mx-5 my-10 justify-self-center border border-accent5 rounded-xl lg:w-event-base">
            <a href={link} className={`${styles.imageWrapper}`}>
                <Image src={image} className="rounded-t-xl" alt="event" width="400px" height="200px" />
            </a>
            <div className="px-3">
                <h3 className="text-xl font-semibold py-2">{title}</h3>
                <p className="text-base pb-2">{description}</p>
            </div>
        </div>
    );
}
