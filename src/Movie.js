import React, { Component } from 'react';
import PropTypes from 'prop-types';


function Movie({title, image}){
    return(
        <div>
            <MoviePoster image={image} />
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({image}){
    return (
        <img src={image} alt="Movie Poster" />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    image: PropTypes.string.isRequired
}


export default Movie;
