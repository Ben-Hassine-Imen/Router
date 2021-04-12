import React, {useState} from 'react';
import MoviesList from './MoviesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import Header from './Header';
import {data} from './Data';
import AddMovie from './AddMovie';


const Home=()=>{



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

        <MoviesList movies={movies} setmovies={setMovies}  search ={search} setSearch={setSearch}  rate={rate} />
      

    </div>
    </div>
    )};

export default Home;