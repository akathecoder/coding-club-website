import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { EventsData, EventsResponse } from '../../types';

export default function handler(_req: NextApiRequest, res: NextApiResponse<EventsResponse>) {
    let JSONContent = fs.readFileSync('./data/events.json', { encoding: 'utf-8' });
    let data = JSON.parse(JSONContent) as EventsData;
    res.status(200).json({ data, error: null });
}
