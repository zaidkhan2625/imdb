import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './MovieList.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([]);
    const {type} = useParams();

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = async() => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=c556d0d83ea266bb185d004e4d9f3ddd&language=en-US`);
        setMovieList(data.results);
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList