import React, { useState, useEffect } from 'react';

export function useMovies(url) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error('Error fetching movies:', error));
    }, [url]);

    return movies;
}

export function useGenres(url){
    const [genres, setGenres]=useState(null);

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setGenres(data.genres))
        .catch(error=> console.error("Error fetching genres",error));
    },[url]);
    return genres;
}

export function useDetails(url) {
    const [details, setDetails] = useState('');
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setDetails(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, [url]);

    return details;
}

export function usePersonal(url){
    const [personal, setPersonal]= useState('');

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setPersonal(data))
        .catch(error=>console.error('Error fetching personal', error))
    },[url]);
    return personal;
}

export function useTrailer(url){
    const [data, setData]=useState([])
    const [trailer, setTrailer]=useState('');
    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(datas=> setData(datas.results))
        .catch(error=>console.error('Error fetching personal', error))
    },[url])
    useEffect(() => {
        const findTrailer = data.find(video => video.type === "Trailer");
        setTrailer(findTrailer);
    }, [data]);
    return trailer;

}