import { Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Home from './components/Home'
import Trailer from './components/Trailer'

const App =()=>{
  return (
    <div>
  

 
         <Route  exact path="/"  component={Home}     />
         <Route path="/Trailer/:id" component={Trailer}  />
      
      
       
       


<<<<<<< HEAD
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
      

=======

 
>>>>>>> 7e6986597711c88cbdd4f4ddb306dd442363dca7
    </div>
);
}
export default App;