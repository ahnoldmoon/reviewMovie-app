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

const movies = [
  {
    title: "matrix",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
  },
  {
    title: "Full Metal Jacket",
    image: "https://images-na.ssl-images-amazon.com/images/I/91A%2B9lmEcxL._SX342_.jpg",
  },
  {
    title: "Oldboy",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
  },
  {
    title: "Star Wars",
    image: "https://i.ytimg.com/vi/ngElkyQ6Rhs/hqdefault.jpg",
  }
]

class App extends Component {

  componentWillMount(){
    console.log('Will Mount');
  }

  componentDidMount(){
    console.log('Did Mount');
  }

  render(){
    console.log('did render');
    return(
      <div className="App">
        {/* {movies.map(movie => {
	        return <Movie title={movie.title} image={movie.image} />
        })} */}
        {movies.map((movie,index) => {
          return <Movie title={movie.title} image={movie.image} key={index} />
        })}
      </div>
      
    )
  }
}

export default App;