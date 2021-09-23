import React from 'react';
import { OurTeam as IOurTeam } from '../../../types';
import TeamMember from '../../General/team-member/TeamMember';

function OurTeam({ members }: IOurTeam) {
    return (
        <div className="bg-background text-center px-10 py-3 pb-20 border-t border-accent6 sm:px-20">
            <h1 className="text-6xl my-8">Our Team</h1>
            <div className="grid grid-cols-2 gap-8 mt-20 max-w-7xl m-auto sm:grid-cols-3 lg:grid-cols-4">
                {members.map((member, idx) => (
                    <TeamMember {...member} key={idx} />
                ))}
            </div>
        </div>
    );
}

export default OurTeam;
