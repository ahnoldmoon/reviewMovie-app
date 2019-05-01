import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({title, image, genres, synopsis}){
    return(
        <div className="Movie">
            <MoviePoster image={image} />
            <div className="Movie__Column">
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
            </div>
        </div>
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

function MoviePoster({image}){
    return (
        <img src={image} alt="Movie Poster" />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    image: PropTypes.string.isRequired
}


export default Movie;
