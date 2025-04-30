import React, { useEffect, useState } from 'react'
import { mockData } from '../constant/data';

const useFetch = (query: string) => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        // fetch('api.example.com').then(res => res.json()).then(data => {
        //     console.log('mockData:', mockData)
        //     setData(mockData)
        //     setLoading(false)
        // }).catch(e => setError(e))
        setData(mockData)
    }, [query])

    return { data, loading, error }
}

export default useFetch