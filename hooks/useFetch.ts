import { useEffect, useState } from 'react';
import { __prod__ } from '../constants';

export function useFetch<T extends Record<string, any>>(api: string) {
    /**
     * we are passing just the route as parameter for example,
     * '/our-team' instead of complete URL, and add the rest part here,
     * we use the '/' character to determine if its from our api or not
     */
    if (api[0] === '/') {
        api = __prod__
            ? `https://coding-club-website-1ptq428vw-sparshagarwal25.vercel.app/api/${api}`
            : `http://localhost:3000/api${api}`;
    }

    // we store the data required in component in useState hook
    const [data, setData] = useState<T>([] as any);

    // then we fetch data and set it in state hook
    useEffect(() => {
        async function fetchData() {
            let res = await fetch(api);
            let requiredData = await res.json();
            setData(requiredData);
        }
        fetchData();
    }, [api]);

    return data;
}
