import React from 'react';
import { TeamMember as TeamMemberType } from '../../../types';
import Image from 'next/image';
import styles from './teammember.module.css';

function TeamMember({ image, name, role }: TeamMemberType) {
    return (
        <div>
            <div className={styles.image}>
                <Image src={image} alt="team member" width="170px" height="170px" />
            </div>
            <div>
                <p>{name}</p>
                <p>{role}</p>
            </div>
        </div>
    );
}

export default TeamMember;
