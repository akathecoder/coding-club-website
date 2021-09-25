import { NextPage } from 'next';
import { ProjectItem } from '../components/General/ProjectItem/ProjectItem';

const projects: NextPage = () => {
    return (
        <>
            <main className="bg-background min-w-full min-h-screen text-accent1">
                <section className="px-28 py-16">
                    <h1 className="text-6xl font-bold leading-relaxed">Projects Expo</h1>
                    <h2 className="text-2xl">These are the projects created by members of Coding Club JKLU</h2>
                    <section className="my-8 flex justify-evenly gap-x-16 flex-wrap">
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
