import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../services/api';
import './MovieInfo.css';

function MovieInfo(){
    const { id } = useParams();
    const [ movieDetail, setMovieDetail ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    const getMovieDetail = async (filmID) => {
        try {
            const response = await fetch(`https://swapi.dev/api/films/${filmID}`);
            const data = await response.json();
            setMovieDetail(data);
            const charactersUrl = data.characters;
            const characterResponse = await Promise.all(
                charactersUrl.map((url) => fetch(url).then((res) => res.json()))
            );
            setCharacters(characterResponse);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMovieDetail(id);
    }, [id]);

    return (
        <div className='film-detail'>
            {loading ? (
                <h1>Loading Data...</h1>
            ) : (
                <div className='film-detail-header'>
                    <h1>Episode {movieDetail.episode_id}: {movieDetail.title}</h1>
                    <p>{movieDetail.opening_crawl}</p>
                    <h4>Director</h4>
                    <p className='directorProducerNameReleaseDate'>{movieDetail.director}</p>
                    <h4>Producer</h4>
                    <p className='directorProducerNameReleaseDate'>{movieDetail.producer}</p>
                    <h4>Release Date</h4>
                    <p className='directorProducerNameReleaseDate'>{movieDetail.release_date}</p>
                    <h4>Characters</h4>
                    {characters.map((character, characterIndex) => (
                        <div key={characterIndex} className="characters">
                            <ul className='comalist'>
                               <p className="characters-name">{character.name}</p>
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MovieInfo;