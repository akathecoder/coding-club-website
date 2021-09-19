export interface TeamMember {
    name: string;
    role: string;
    image: string;
}

export interface OurTeam {
    section: string;
    route: string;
    members: Array<TeamMember>;
}

export interface OurTeamResponse {
    data: OurTeam;
    error: string | null;
}
