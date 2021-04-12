import './App.css';
import React, {useState} from 'react';
import MoviesList from './components/MoviesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import Header from './components/Header';
import {data} from './components/Data';
import StarRatingComponent from 'react-star-rating-component'
import AddMovie from './components/AddMovie';

const App=()=>{



  const [movies, setMovies] = useState(data);
  const [search, setSearch] = useState("");
  const [newMovie, setNewMovie] = useState({
Title:"",
Poster:"",
Description:"",
    rate:"",

  });
  const Add=(newMovie)=>{
    setMovies(
      [...movies,newMovie]
    )
  }
  const [rate,setRate] =useState(1)

    return (
<div >
  <Header/>
<Search  search ={search} setSearch={setSearch} setRate={setRate} />

<AddMovie Add={Add} newMovie={newMovie} setNewMovie={setNewMovie}/>
      <div  className="container" style={{marginLeft:"200px"}}>

        <MoviesList movies={movies} setmovies={setMovies}  search ={search} setSearch={setSearch}  rate={rate}/>
      

    </div>
    </div>
    )};

export default App;