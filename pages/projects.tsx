import { NextPage } from 'next';
import { ProjectItem } from '../components/General/ProjectItem/ProjectItem';

const projects: NextPage = () => {
    return (
        <>
            <main className="bg-background min-w-full min-h-screen text-accent1">
                <section className="px-4 py-8">
                    <h1 className="text-4xl text-center md:text-5xl lg:text-6xl">Projects Expo</h1>
                    <h2 className="text-lg text-center my-4 px-10 md:text-xl lg:text-2xl">
                        Projects created by members of <span className="whitespace-nowrap">Coding Club JKLU</span>
                    </h2>
                    <section className="mt-4 grid md:grid-cols-2 md:px-0 projects-3:grid-cols-3 3xl:px-32">
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                    </section>
                </section>
            </main>
        </>
    );
};

export default projects;
