import React, { useEffect, useState } from 'react'

const Books = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        fetch(`https://609cd6ba04bffa001792d638.mockapi.io/books?limit=10&page=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                console.log('data:', data)
                if (data == 'Not found') {
                    setResults([])
                }
                else {
                    setResults(data)
                }
            })
            .catch((e) => setError(e))
    }, [])
    return (
        <div>
            {
                results.map((data: { name: string }) => <h1>{data.name}</h1>)
            }
        </div>
    )
}

export default Books