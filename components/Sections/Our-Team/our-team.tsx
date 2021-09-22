import React from 'react';
import TeamMember from '../../General/team-member/TeamMember';
import { useFetch } from '../../../hooks/useFetch';
import { OurTeamResponse } from '../../../types';

function OurTeam() {
    const { data, error } = useFetch<OurTeamResponse>('/our-team');
    if (error) return <></>;

    return (
        <div className="bg-background text-center pb-32 border-t border-accent6">
            <h1 className="text-6xl my-10">Our Team</h1>
            <div className="grid grid-cols-4 gap-14 mt-20 max-w-7xl mx-auto">
                {data && data.members.map((member, idx) => <TeamMember {...member} key={idx} />)}
            </div>
        </div>
    );
}

export default OurTeam;
