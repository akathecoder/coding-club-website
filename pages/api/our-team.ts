import type { NextApiRequest, NextApiResponse } from 'next';
import { OurTeam, OurTeamResponse } from '../../types';
import fs from 'fs';

export default function handler(_req: NextApiRequest, res: NextApiResponse<OurTeamResponse>) {
    let JSONContent = fs.readFileSync('./data/ourTeam.json', { encoding: 'utf-8' });
    let data = JSON.parse(JSONContent) as OurTeam;
    res.status(200).json({ data, error: null });
}
