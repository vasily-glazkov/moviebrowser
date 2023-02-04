import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import { Routes, Route } from 'react-router-dom';
import SearchView from './components/SearchView';
import { useState, useEffect } from 'react';
import MovieView from './components/MovieView';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    searchText && fetch(`https://api.themoviedb.org/3/search/movie?api_key=22fb5996e2c71b26b4b5acf58fb99f25&language=en-US&query=${searchText}&page=1&include_adult=true`)
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      setSearchResults(data.results);
    })
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<AboutView />} />
        <Route path='/search' element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path='/movie/:id' element={<MovieView />} />
      </Routes>
    </div>
  );
}

export default App;
