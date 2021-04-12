import Card from 'react-bootstrap/Card'
import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { Link } from "react-router-dom";

function MoviesCard({movie,id}) {
    return(
        <div >
<Card style={{ width: '15rem' }}>
<Card.Img  variant="top" src={movie.Poster} />

  <Card.Body   className="card-body">
    <Card.Title  className="card-title">  <Link to={`/Trailer/${movie.id}`}>{movie.Title} </Link></Card.Title>

    <StarRatingComponent value={movie.rate}/>
    <Card.Text> {movie.Description}  </Card.Text>

  </Card.Body>
</Card>
</div>
 );

};
export default  MoviesCard;