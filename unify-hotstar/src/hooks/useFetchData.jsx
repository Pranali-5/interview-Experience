import React, { useEffect, useState } from 'react'

const useFetchData = () => {

    const [loading, setLoading] =useState(false);
const [success, setSuccess] =useState(false);
const [error, setError] =useState(false);

 useEffect(()=>{
fetchData()
},[])
  const fetchData = async ()=>{
    setLoading(true)
    // console.log('loading:', loading)
    try {
      const data = await fetch('/articles?include=author ')
 setSuccess(true)
    } catch(e){
setError(true)
    }
    setLoading(false)
  }
  return {loading, success, error}
}

export default useFetchData