import React, { useState } from 'react';
import { searchMovies } from '../utils/api'; 
import {resetSearch } from './searchManager'; 
import './SearchBar.css'; 

function SearchBar({ onSearch, onReset }) {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await searchMovies(query);
    onSearch(results); 
  };

  const handleReset = () => {
    setQuery('');
    resetSearch(); // Reset search results
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="search-input"
      />
    <div className="search-btn-group"> {/* Wrap buttons with a div for Flexbox */}
        <button type="submit" className="search-btn">Search</button>
        <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
    </div>
    </form>
  );
}

export default SearchBar;




/*
// components/SearchBar.jsx
import React, { useState } from 'react';
// At the top of SearchBar.jsx
import './SearchBar.css';
import { searchMovies } from '../utils/api'; // Assume this is where our API calls live

function SearchBar({ onSearch, onReset }) {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await searchMovies(query);
    onSearch(results); // Pass results up to parent component
  };

  const handleReset = () => {
    setQuery('');
    onReset(); // Reset search results in parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        style={{ padding: '10px', fontSize: '18px', borderRadius: '5px', width: '80%', margin: 'auto' }}
      />
      <button type="submit" style={{ marginLeft: '10px', marginRight: '10px' }}>Search</button>
      <button type="button" onClick={handleReset} style={{ marginLeft: '10px', marginRight: '10px' }}>Reset</button>
    </form>
  );
}

export default SearchBar;

*/