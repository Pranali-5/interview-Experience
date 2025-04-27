import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce';

const SearchWithTableData = () => {
    const [query, setQuery] = useState('');
    const [error, setError] = useState(false)
    const [results, setResults] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [order, setOrder] = useState('desc');
    const [name, setName] = useState('name');
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(10)

    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        setLoading(true)
        if (!loading) {
            fetch(`https://609cd6ba04bffa001792d638.mockapi.io/books?search=${query}&limit=${limit}&page=${currentPage}&sortBy=${name}&order=${order}`)
                .then(res => {
                    if (!res.ok) {
                        setResults([])
                        setError(true)
                        setLoading(false)
                    }
                    return res.json()
                })
                .then(data => {
                    console.log('data222:', data)
                    setResults(data)
                    setLoading(false)
                })
                .catch((e) => {
                    console.log('setError():', e)
                })
        }
        // }
        // else {
        //     setResults([])
        // }
    }, [debouncedQuery, currentPage, name, limit])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handlePrevious = () => {
        setCurrentPage((prev) => prev <= 1 ? 1 : prev - 1)
    }
    const handleNext = () => {
        setCurrentPage((prev) => prev > 10 ? 1 : prev + 1)
    }
    const handleSort = (value: string) => {
        setName(value)
        if (order == 'desc') {
            setOrder('asc')
        }
        else {
            setOrder('desc')
        }
    }
    const hanldeSelect = (e: any) => {
        setLimit(e.target.value)
    }
    return (
        <div style={{ marginTop: 16 }}>
            <label htmlFor='search'>Search: </label>
            <input type='text' value={query} onChange={handleChange} placeholder='search...' id='search' />
            <div>
                {results.length == 0 ? null :
                    <table style={{ border: '1px solid black' }}>
                        <thead>
                            <tr>
                                <th onClick={() => handleSort('name')}>Name</th>
                                <th onClick={() => handleSort('price')}>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !error && results?.map((data: { id: number, name: string, price: string }) =>


                                    <tr key={data.id}>
                                        <td>
                                            {data.name}
                                        </td>
                                        <td>
                                            {data.price}
                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>}
                <div>
                    {
                        error && <h1>No Data Available for this search...</h1>
                    }
                    {
                        results.length == 0 && <h1>No Data Available</h1>
                    }
                </div>
            </div>
            <button onClick={handlePrevious}>Previous</button>
            {currentPage}
            <button onClick={handleNext}>Next</button>
            <select onChange={hanldeSelect}>
                <option>10</option>
                <option>20</option>
                <option>50</option>
            </select>
        </div>
    )
}

export default SearchWithTableData