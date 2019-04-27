import React, { Component } from 'react';

class Movie extends Component{
    render(){
        return(
            <div>
                <h1>This is a movie.</h1>
                <MoviePoster />
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://i.pinimg.com/236x/70/91/19/709119861d5e6870f47d552d60365025--hangers-hunting.jpg" />
        )
    }
}


export default Movie;
