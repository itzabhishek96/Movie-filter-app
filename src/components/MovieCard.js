import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
  let navigate = useNavigate();

  const goToDetails = () => {
    navigate('/movie-details', { state: { movie } });
  };

  return (
    <div onClick={goToDetails} className="cursor-pointer border py-4 rounded shadow-lg transition-transform hover:scale-105 bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-black ease-in-out duration-300 mb-4">
      <img src={movie.moviemainphotos[0]} alt={movie.movietitle} className="mb-4 mx-auto" style={{ maxHeight: '250px', maxWidth: '100%' }} />
      <h2 className="text-2xl font-bold text-center mb-2">{movie.movietitle}</h2>
      <p className="text-center">Genres: {movie.moviegenres.join(', ')}</p>
    </div>
  );
}

export default MovieCard;