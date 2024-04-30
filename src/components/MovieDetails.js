import React from 'react';
import { useLocation } from 'react-router-dom';

function MovieDetails() {
  const location = useLocation();
  const { movie } = location.state;

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center">
        <img src={movie.moviemainphotos[0]} alt={movie.movietitle} className="w-40 md:mt-0 mt-4 md:w-40 h-auto object-cover ml-4" style={{ maxHeight: '200px' }} />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{movie.movietitle}</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Languages:</h3>
            <p className="text-gray-700">{movie.movielanguages.join(', ')}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Countries:</h3>
            <p className="text-gray-700">{movie.moviecountries.join(', ')}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Genres:</h3>
            <div className="flex flex-wrap">
              {movie.moviegenres.map(genre => (
                <div key={genre} className="bg-gray-200 rounded-full px-4 py-2 mr-2 mb-2 text-sm">{genre}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
