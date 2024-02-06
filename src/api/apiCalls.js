

export async function getMovies() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=es&page=1&sort_by=popularity.desc&api_key=915d3db1d56234a45bf89e71a4552ea2');
        if (!response.ok) {
        throw new Error('Error al obtener datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return null;
    }
}

export async function getGenres(){
    try{
        const response= await fetch('https://api.themoviedb.org/3/genre/movie/list?language=es&api_key=915d3db1d56234a45bf89e71a4552ea2');
        if(!response.ok){
            throw new Error("Error al obtener datos");
        }
        const data=await response.json();
        return data;
    }catch(error){
        console.log("Error al obtener datos:", error);
    }
}