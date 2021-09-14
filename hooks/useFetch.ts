import { useEffect, useState } from 'react';

export function useFetch<T extends Record<string, any>>(api: string) {
    if (api[0] === '/') {
        api = `http://localhost:3000/api${api}`;
    }

    const [data, setData] = useState<T>([] as any);

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
