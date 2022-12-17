import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import CategoryList from './components/categories-list/CategoryList';
import Hero from './components/hero/Hero';
import MainHeader from './components/main-header/MainHeader';

const DATA = [
    {
      "Title": "The Lego Movie",
      "Year": "2014",
      "imdbID": "tt1490017",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
    },
    {
      "Title": "The Lego Movie",
      "Year": "2014",
      "imdbID": "tt1490017",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
    },
    {
      "Title": "The Lego Movie",
      "Year": "2014",
      "imdbID": "tt1490017",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
    },
    {
      "Title": "The Lego Movie",
      "Year": "2014",
      "imdbID": "tt1490017",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
    },
    {
      "Title": "The Simpsons Movie",
      "Year": "2007",
      "imdbID": "tt0462538",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_SX300.jpg"
    },
    {
      "Title": "Scary Movie",
      "Year": "2000",
      "imdbID": "tt0175142",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "El Camino: A Breaking Bad Movie",
      "Year": "2019",
      "imdbID": "tt9243946",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg"
    },
    {
      "Title": "Bee Movie",
      "Year": "2007",
      "imdbID": "tt0389790",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1MDYxOTA4MF5BMl5BanBnXkFtZTcwMDE0MDUzMw@@._V1_SX300.jpg"
    },
    {
      "Title": "Scary Movie 2",
      "Year": "2001",
      "imdbID": "tt0257106",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzQxYjU1OTUtYjRiOC00NDg2LWI4MWUtZGU5YzdkYTcwNTBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "The Lego Batman Movie",
      "Year": "2017",
      "imdbID": "tt4116284",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
    },
    {
      "Title": "Scary Movie 3",
      "Year": "2003",
      "imdbID": "tt0306047",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_SX300.jpg"
    },
    {
      "Title": "Scary Movie 4",
      "Year": "2006",
      "imdbID": "tt0362120",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZmFkMzc2NTctN2U1Ni00MzE5LWJmMzMtYWQ4NjQyY2MzYmM1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
    },
    {
      "Title": "Not Another Teen Movie",
      "Year": "2001",
      "imdbID": "tt0277371",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWFkYmJiZjQtYWMzZC00OGIyLThkZjktY2JlNGI4MGU0NjY5XkEyXkFqcGdeQXVyNDUzNzgxODE@._V1_SX300.jpg"
    }
  ];


  const BASE_URL = 'http://www.omdbapi.com/?apikey=7f1b1a54&'
  
function App() {
  const [movie, setMovie] = useState(DATA);
  const [episode, setEpisode] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}s=movie&t=${searchText}`);
        console.log('first', data.Search)
        setMovie(data.Search);
      } catch(e) {
        console.log(e);
      }
    }
    getMovies();
  }, [searchText])
  
  useEffect(() => {
    const getEpisodes = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}s=episode&t=${searchText}`);
        console.log('second', data.Search)
        setEpisode(data.Search);
      } catch(e) {
        console.log(e);
      }
    }
    getEpisodes();
  }, [searchText])
  

  return (
    <div className="App">
      <MainHeader />
      <Hero />

      <div className='container mt-3'>
        <label htmlFor='search'>Search</label>
        <input
          type="text"
          id='search'
          className='form-control'
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <CategoryList title="Movie" items={movie} />
      <CategoryList title="Episode" items={episode} />
    </div>
  );
}

export default App;
