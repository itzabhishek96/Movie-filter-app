import React, { useState, useEffect } from 'react';
import moviesData from './movies.json';
import FilterDropdown from './components/FilterDropdown';
import MovieCard from './components/MovieCard';
import { BiSearch } from 'react-icons/bi';

function MovieFilterApp() {
  const [filters, setFilters] = useState({ language: '', country: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const filtered = moviesData.filter(movie => (
      (!filters.language || movie.movielanguages.includes(filters.language)) &&
      (!filters.country || movie.moviecountries.includes(filters.country)) &&
      (!selectedGenre || movie.moviegenres.includes(selectedGenre)) &&
      (!searchQuery || movie.movietitle.toLowerCase().includes(searchQuery.toLowerCase()))
    ));
    setFilteredMovies(filtered);
  }, [filters, searchQuery, selectedGenre]);

  const handleFilterChange = (filterType, value) => setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
  const handleSearchChange = (value) => setSearchQuery(value);

  const toggleBookmark = (id) => setFilteredMovies(prevMovies =>
    prevMovies.map(movie => (movie.imdbmovieid === id ? { ...movie, bookmarked: !movie.bookmarked } : movie))
  );

  const uniqueGenres = getUniqueValues('moviegenres');

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 mt-4">
        <div className='ml-4 px-2'>
        <FilterDropdown label="Language" options={getUniqueValues('movielanguages')} selectedValue={filters.language} onChange={(value) => handleFilterChange('language', value)} />
        </div>
        <div>
        <FilterDropdown label="Country" options={getUniqueValues('moviecountries')} selectedValue={filters.country} onChange={(value) => handleFilterChange('country', value)} />
        </div>
        <div className="relative flex items-center">
          <input type="text" placeholder="Search movie" className="p-2 pl-10 pr-4 border border-gray-300 rounded focus:outline-none shadow" value={searchQuery} onChange={(e) => handleSearchChange(e.target.value)} />
          <BiSearch className="absolute top-0 left-0 mt-3 ml-3 text-gray-500" size={24} />
        </div>
        <div className="justify-center mb-4 space-x-4 ">
        {uniqueGenres.map(genre => (
          <button key={genre} onClick={() => setSelectedGenre(genre)} className={`px-4 py-2 mt-4 rounded-full focus:outline-none transition-all ease-in-out duration-300 ${selectedGenre === genre ? 'bg-blue-500 text-white' : 'bg-gray-900 text-gray-100 hover:bg-blue-500 hover:text-white'}`}>
            {genre}
          </button>
        ))}
        <button onClick={() => setSelectedGenre('')} className={`px-4 py-2 mt-4 rounded-full focus:outline-none transition-all ease-in-out duration-300 ${selectedGenre === '' ? 'bg-blue-500 text-white' : 'bg-gray-900 text-gray-100 hover:bg-blue-500 hover:text-white'}`}>
          All Genres
        </button>
      </div>
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMovies.map(movie => <MovieCard key={movie.imdbmovieid} movie={movie} toggleBookmark={toggleBookmark} />)}
      </div>
    </div>
  );
}

function getUniqueValues(key) {
  return [...new Set(moviesData.flatMap(movie => movie[key]))];
}

export default MovieFilterApp;