import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movieTitles = [
//   "matrix",
//   "Full Metal Jacket",
//   "Oldboy",
//   "Star Wars"
// ]

// const movieImages = [
//   "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
//   "https://images-na.ssl-images-amazon.com/images/I/91A%2B9lmEcxL._SX342_.jpg",
//   "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
//   "https://i.ytimg.com/vi/ngElkyQ6Rhs/hqdefault.jpg"
// ]


class App extends Component {
  state = {
    // greeting: "Hello!"
    
  }
  componentWillMount(){
    // console.log('Will Mount');
  }

  componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie,index) => {
      return <Movie title={movie.title} image={movie.image} key={index} />
    })
    return movies
  }

  render(){
    // console.log('did render');
    return(
      <div className="App">
        {/* {movies.map(movie => {
	        return <Movie title={movie.title} image={movie.image} />
        })} */}
        {/* {this.state.greeting} */}
        {/* {this.state.movies.map((movie,index) => { */}
          {/* {this.state.movies ? this._renderMovies() : this.state.gretting} */}
          {this.state.movies ? this._renderMovies() : 'loading'}
        {/* })} */}
      </div>
    )
  }
}

export default App;