// import React from 'react'
import Image from 'next/image'
import image from './../../../assets/images/mockImage.jpg';
import './projectitem.module.css'

export function ProjectItem() {
    return (
        <div className="w-80 mx-10 my-10 h-1/3 border border-accent5 rounded-xl">
            <Image src = {image} className="rounded-t-xl"/>
            <div className="px-3">
                <h3 className="text-2xl font-semibold py-5">Project Title</h3>
                <p className="pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate numquam ex ipsam quibusdam laborum vitae aut quod explicabo provident veniam? Nobis reiciendis impedit ipsum earum praesentium totam cum porro. In.</p>
            </div>
        </div>
    );
}