import React, { useState, useEffect } from 'react';
import { Row, Col, Container, OverlayTrigger } from 'react-bootstrap'; // Don't forget to install react-bootstrap + bootstrap. 
import {
  useParams
} from "react-router-dom";



const MovieDetail = () => {
    let { id } = useParams();
    const [movie, setMovie] = useState({})
    const [genres, setGenres] = useState('')

    useEffect(() => {
        async function getMovies(){
            const response = await fetch(`http://localhost:8000/detail/${id}`);
            const {data} = await response.json();
            console.log(data)
            let genName = data.genres.map(x => x.name)
            let calGenName =  calGenres(genName)
            setMovie(data)
            setGenres(calGenName)
        }
        getMovies()
    }, [])
    const calGenres = (genres) => genres.reduce((prev, cur) => prev + `, ${cur}`, '')

    return <Container>
        <Row className="g-5">
            <Col xs={3}>
                <div className="w-100 h-100 poster position-relative">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" className="w-100" />
                    <div className="middle w-100 h-100 position-absolute">
                        <div className="text w-100 h-100">Expand</div>
                    </div>
                </div>
            </Col>
            <Col xs={9} className="pt-4">
                <h2>
                    <a href="/" className="movie-title">
                        <strong>{movie.original_title}</strong>
                    </a>
                </h2>
                <div className="d-flex align-items-center actions">
                    <span className="certification p-1 mr-2">PG-13</span>
                    <span className="release">{movie.release_date}</span>
                    <span className="genres">{genres}</span>
                    <span className="runtime">2h 22m</span>
                </div>

                <ul className="w-100 my-4 d-flex align-items-center justify-content-start" style={{ listStyleType: 'none' }}>
                    <li className="chart">
                        Implement your chart here
                    </li>
                    <OverlayTrigger>
                        <li className="use-tooltip">
                            Icon
                        </li>
                    </OverlayTrigger>
                </ul>

                <div className="info-header">
                    <p className="tag-line mb-1">{movie.tagline}</p>
                    <h3>Overview</h3>
                    <div className="overview">{movie.overview}</div>

                    <Row md={3} className="mt-1 people">
                        {[0, 1, 2, 3, 4, 5].map((k) => (
                            <Col className="mt-3" key={k}>
                                <a href="/" className="character-name">
                                    <strong>
                                        J.J.Abrams
                                    </strong>
                                </a>
                                <div>Director, Screenplay, Story</div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>
}

export default MovieDetail