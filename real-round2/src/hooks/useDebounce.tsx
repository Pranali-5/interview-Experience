import React, { useEffect, useState } from 'react'

const useDebounce = (value: string, delay: number) => {
    const [debouncedQuery, setDebouncedQuery] = useState(value);

    useEffect(() => {
        let timerId = setTimeout(() => setDebouncedQuery(value), delay);
        return () => clearTimeout(timerId)
    }, [value, delay])

    return debouncedQuery
}

export default useDebounce