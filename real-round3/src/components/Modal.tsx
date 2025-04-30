import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'

const Modal = ({ open, handleClose }: ModalProps) => {
    const [query, setQuery] = useState('')
    const { data, loading, error } = useFetch(query)
    if (!open) return null


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    const fetchData = async (value: DataTypes) => {
        try {
            const res = await fetch(value.link)
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleLink = (value: DataTypes) => {
        if (value.status == 'pending') {
            window.open(value.link)
        }
        else {
            fetchData(value)
        }
    }

    return (
        <div style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0, 0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: 400, border: '1ps solid black', background: '#ffff' }}>
                <input value={query} onChange={handleChange} />
                <h1>
                    Modal Content
                </h1>
                <button onClick={handleClose}>Close</button>
                <ul>
                    {
                        data.map((e: DataTypes) => <li key={e.id} onClick={() => handleLink(e)}>{e.name}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Modal