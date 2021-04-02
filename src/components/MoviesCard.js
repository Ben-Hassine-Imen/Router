import Card from 'react-bootstrap/Card'
import React from 'react'
function MoviesCard({movie}) {
    return(
        <div >
<Card style={{ width: '15rem' }}>
<Card.Img  variant="top" src={movie.Poster} />

  <Card.Body   className="card-body">
    <Card.Title  className="card-title"> {movie.Title}</Card.Title>
    <Card.Text> {movie.Description}  </Card.Text>

  </Card.Body>
</Card>
</div>
 );

};
export default  MoviesCard;