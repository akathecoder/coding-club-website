import React from 'react';
import { TeamMember as TeamMemberType } from '../../../types';
import Image from 'next/image';
import styles from './teammember.module.css';

function TeamMember({ image, name, role }: TeamMemberType) {
    return (
        <div>
            <div className={styles.image}>
                <Image src={image} alt="team member" width="200px" height="200px" />
            </div>
            <div>
                <p className="text-xl font-bold">{name}</p>
                <p className="text-lg text-accent2">{role}</p>
            </div>
        </div>
    );
}

export default TeamMember;
