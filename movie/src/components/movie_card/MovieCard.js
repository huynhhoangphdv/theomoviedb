import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const theme = {
    title: {
        "text-overflow": "ellipsis"
    }
}

const MovieCard = ({id, poster_path, title, release_date}) => 
    <Link to={`/${id}`} className="movie_link">
        <Col>
            <Card className={'w-100'}>
                {/* image  */}
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                <Card.Body>
                    <Card.Title className={theme.title}>{title}</Card.Title>
                    <Card.Text>
                        {release_date}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Link>

export default MovieCard