import React from 'react'
import MoviesCard from './MoviesCard'
function MoviesList({movies,search,rate}) {

   return (
           
        <div className="row">

            { movies.filter(movie=>(movie.Title.toLowerCase().includes(search.toLowerCase().trim())) && (movie.rate>=rate)).map((movie, id)=><MoviesCard movie={movie} id={movie.id}/>)}
<<<<<<< HEAD
            
=======
>>>>>>> 7e6986597711c88cbdd4f4ddb306dd442363dca7
            </div>

             )
    
}
export default  MoviesList;
