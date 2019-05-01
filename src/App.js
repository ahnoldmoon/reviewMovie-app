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
    // fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    // .then(munnt => munnt.json())
    // .then(json => console.log(json))
    // .catch(err => console.log(err))
    this._getMoives();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie 
        title={movie.title_english} 
        image={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

  _getMoives = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(munnt => munnt.json())
    // .then(json => console.log(json))
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render(){
    // console.log('did render');
    return(
      <div className="App">
          {this.state.movies ? this._renderMovies() : 'loading'}
      </div>
    )
  }
}

export default App;