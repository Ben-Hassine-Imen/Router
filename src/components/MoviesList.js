import React from 'react'
import MoviesCard from './MoviesCard'
function MoviesList({movies}) {

   return (
           
        <div className="row">

            { movies.map((movie)=>
            
            (<MoviesCard   key={movie.Title}  movie={movie} /> ))}
          
            </div>

             )
    
}
export default  MoviesList;