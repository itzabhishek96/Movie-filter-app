// import React, { useState, useEffect } from 'react';
// import moviesData from './movies.json';

// function App() {
//   const [movies, setMovies] = useState([]);
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const [filters, setFilters] = useState({
//     language: '',
//     country: '',
//     genre: ''
//   });

//   useEffect(() => {
//     setMovies(moviesData);
//     setFilteredMovies(moviesData);
//   }, []);

//   useEffect(() => {
//     applyFilters();
//   }, [filters]);

//   const applyFilters = () => {
//     let filtered = [...movies];
//     if (filters.language) {
//       filtered = filtered.filter(movie => movie.movielanguages.includes(filters.language));
//     }
//     if (filters.country) {
//       filtered = filtered.filter(movie => movie.moviecountries.includes(filters.country));
//     }
//     if (filters.genre) {
//       filtered = filtered.filter(movie => movie.moviegenres.includes(filters.genre));
//     }
//     setFilteredMovies(filtered);
//   };

//   const handleFilterChange = (filterType, value) => {
//     setFilters({ ...filters, [filterType]: value });
//   };

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Movie Filter App</h1>
//       <div className="flex space-x-4 mb-4">
//         <select
//           className="p-2 border border-gray-300 rounded"
//           onChange={(e) => handleFilterChange('language', e.target.value)}
//         >
//           <option value="">Select Language</option>
//           {movies.map(movie => (
//             movie.movielanguages.map(lang => (
//               <option key={lang} value={lang}>{lang}</option>
//             ))
//           ))}
//         </select>
//         <select
//           className="p-2 border border-gray-300 rounded"
//           onChange={(e) => handleFilterChange('country', e.target.value)}
//         >
//           <option value="">Select Country</option>
//           {movies.map(movie => (
//             movie.moviecountries.map(country => (
//               <option key={country} value={country}>{country}</option>
//             ))
//           ))}
//         </select>
//         <select
//           className="p-2 border border-gray-300 rounded"
//           onChange={(e) => handleFilterChange('genre', e.target.value)}
//         >
//           <option value="">Select Genre</option>
//           {movies.map(movie => (
//             movie.moviegenres.map(genre => (
//               <option key={genre} value={genre}>{genre}</option>
//             ))
//           ))}
//         </select>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredMovies.map(movie => (
//           <div key={movie.imdbmovieid} className="border p-4 rounded shadow">
//             <img src={movie.moviemainphotos[0]} alt={movie.movietitle} className="mb-2" />
//             <h2 className="text-xl font-bold">{movie.movietitle}</h2>
//             <p>Languages: {movie.movielanguages.join(', ')}</p>
//             <p>Countries: {movie.moviecountries.join(', ')}</p>
//             <p>Genres: {movie.moviegenres.join(', ')}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



// App.js
// import React from 'react';
// import MovieFilterApp from './MovieFilterApp';

// function App() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <header className="text-3xl font-bold mb-8 text-center text-gray-800 py-8">Movie Filter App</header>
//       <MovieFilterApp />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieFilterApp from './MovieFilterApp';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <header className="text-3xl font-bold mb-4 text-center mt-4 text-gray-300">Movie Filter App</header>
      <Router>
      <Routes>
        <Route path="/" element={<MovieFilterApp />} />
        <Route path="/movie-details" element={<MovieDetails />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;