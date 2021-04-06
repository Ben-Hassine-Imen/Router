import Card from 'react-bootstrap/Card'
import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
function MoviesCard({movie}) {
    return(
        <div >
<Card style={{ width: '15rem' }}>
<Card.Img  variant="top" src={movie.Poster} />

  <Card.Body   className="card-body">
    <Card.Title  className="card-title"> {movie.Title}</Card.Title>
    <StarRatingComponent value={movie.rate}/>
    <Card.Text> {movie.Description}  </Card.Text>

  </Card.Body>
</Card>
</div>
 );

};
export default  MoviesCard;