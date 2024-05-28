import React, { useEffect, useState } from 'react'
import { CardOne } from './Card'
    

function Movies() {

    const [movielist, setmovielist] = useState([])

    const getmovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=d0741b19756585f8d7dfb3265b9baa80")
            .then(res => res.json())
            .then(json => setmovielist(json.results))
            .catch(error => console.log(error.code))
    }

    console.log(movielist)

    useEffect(() => {
        getmovie()
    }, [])

    return (
        <>

        <div className="flex flex-wrap justify-center gap-4 bg-black  ">
        {
            movielist.map((movie) => (
                <CardOne key={movie.id} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            heading={movie.title}
                            desc={movie.overview}
                />
            ))
        }
        </div>
        </>
    );
}

export default Movies
