import React, { useState, useEffect } from 'react';

export function useMovies(url) {
    const [movies, setMovies] = useState(null);
    
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
    const [details, setDetails] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setDetails(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, [url]);

    return details;
}
