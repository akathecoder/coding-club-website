import Image from 'next/image';
import image from './../../../assets/images/mockImage.jpg';
import './projectitem.module.css';

export function ProjectItem() {
    return (
        <div className="w-80 mx-10 my-10 justify-self-center border border-accent5 rounded-xl lg:w-event-base">
            <Image src={image} className="rounded-t-xl" alt="event" />
            <div className="px-3">
                <h3 className="text-xl font-semibold py-2">Project Title</h3>
                <p className="text-base pb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate numquam ex ipsam quibusdam
                    laborum vitae aut quod explicabo provident veniam.
                </p>
            </div>
        </div>
    );
}
