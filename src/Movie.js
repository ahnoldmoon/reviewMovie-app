import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
import LinesEllipsis from 'react-lines-ellipsis';

function Movie({title, image, genres, synopsis}){
    return(
        <div className="Movie">
            <MoviePoster image={image} alt={title}/>
            <div className="Movie__Column">
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis = ' ...'
                    trimRight
                    baseOn = 'letters'
                />
                </div>
            </div>
        </div>
    )
}

function MoviePoster({image, alt}){
    return (
        <img src={image} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
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
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}


export default Movie;
