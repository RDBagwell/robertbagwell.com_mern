import {useEffect, useState} from 'react';
import axios from 'axios';

export const useFetch = (endepoint, page = "")=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const apiUrl = `http://localhost:5000/v1/${endepoint}/${page}`

    const fetchData = async ()=>{
        try {
            const response = await axios.get(apiUrl);
            setData(response.data)
            setIsLoading(false);
        }catch (error) {
            console.error(error);
            setError(error);
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const refetch = () =>{
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };

}