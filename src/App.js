import './App.css';
import React, {useState} from 'react';
import MoviesList from './components/MoviesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import {data} from './components/Data';
import RatingIcon from './components/RatingIcon';

const App=()=>{



  const [movies, setmovies] = useState(data);


    return (
<div >
  <Header/>
<SearchBox />
<RatingIcon/>
      <div  className="container" style={{marginLeft:"200px"}}>

        <MoviesList movies={movies}/>
      
   
    </div>
    </div>
    )};

export default App;