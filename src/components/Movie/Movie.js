import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import MovieInfo from '../MovieInfo/MovieInfo';
import { API_URL } from "../services/api";
import './Movie.css'

function Movie(){
    const [films, setFilms] = useState([]);

  // GET Request
    const getFilmsRequest = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Display all the films by defalt
    setFilms(data.results);
  };

  useEffect(() => {
    getFilmsRequest();
  }, []);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const navigate = useNavigate();

  return (
    <>
        <Row className='Row'>
            {films.map((film, filmIndex) => (     
                <Col className='Col' xs="2" md="2">
                    <Container className='Container'>
                        <div className='film-heading'>
                            {/* <h1 className='film-title'>{film.title}</h1> */}
                            <img
                                onClick={() => {navigate(`/films/` + (filmIndex + 1)); toggle()}}
                                src={`./images/episode${film.episode_id}.jpeg`}
                                className="card-img-top"
                                alt=''
                            > 
                            </img>

                            <br/>
                        </div>
                    </Container>
                </Col>
               
            ))}
        </Row>
    </>
  );
}

export default Movie;