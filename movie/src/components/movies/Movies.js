import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap'; 
import './Movies.css';

import Filter from './../filter/Filter';
import MovieCard from '../movie_card/MovieCard';
import Pagination from '../pagination/Pagination';


const Movies = () => {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = React.useState(1);
    const [pageSize] = React.useState(20);
    const [totalResults, setTotalResults] = React.useState(0)

    const updatePage = p => {
        setCurrentPage(p)
    };

    useEffect(() => {
        async function getMovies(){
            const response = await fetch(`http://localhost:8000/movies/${currentPage}`);
            const {data} = await response.json();
            const {results, page, total_results} = data;
            setMovies(results)
            setCurrentPage(page)
            setTotalResults(total_results)
        }
        getMovies()
    }, [currentPage])

    return <Container>
        <h2>Popular Movies</h2>
        <Row>
            <Filter />
            <Col xs={9}>
                <Row md={5} className="g-4">
                    {movies.map(({id, release_date, poster_path, title}) => <MovieCard key={id} id={id} poster_path={poster_path} release_date={release_date} title={title} />)}
                </Row>
            </Col>
        </Row>
        <Row>
            <Pagination pageSize={pageSize} updatePage={updatePage} currentPage={currentPage} totalResults={totalResults}/>
        </Row>

       
    </Container>
}

export default Movies