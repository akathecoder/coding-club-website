type ResponseError = string | null;

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
    error: ResponseError;
}

export interface Event {
    date: string;
    title: string;
    timeFrom: string;
    timeTo: string;
    venue: string;
    description: string;
    link: string | null;
}

export interface EventsData {
    section: string;
    route: string;
    events: Array<Event>;
}

export interface EventsResponse {
    data: EventsData;
    error: ResponseError;
}
