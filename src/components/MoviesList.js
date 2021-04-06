import React from 'react'
import MoviesCard from './MoviesCard'
function MoviesList({movies,search,rate}) {

   return (
           
        <div className="row">

            { movies.filter(movie=>((movie.Title.toLowerCase().includes(search.toLowerCase().trim())))).map(movie=><MoviesCard movie={movie}/>)}
          
            </div>

             )
    
}
export default  MoviesList;
