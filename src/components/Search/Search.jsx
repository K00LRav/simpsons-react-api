import React, { useState, useCallback, useRef } from 'react';
import axios from 'axios';
import './Search.css';

function Search({ setCharacters }) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!query.trim()) {
        setError('Please enter a character name.');
        inputRef.current.focus();
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://thesimpsonsquoteapi.glitch.me/quotes?character=${encodeURIComponent(query)}`
        );
        const data = response.data;
        if (!Array.isArray(data) || data.length === 0) {
          setError(`No quotes found for "${query}".`);
          setCharacters([]);
        } else {
          setCharacters(data);
        }
      } catch (err) {
        if (err.response?.status === 404) {
          setError(`No character named "${query}" found.`);
          setCharacters([]);
        } else {
          setError('An error occurred. Please try again.');
          console.error('Search error:', err);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [query, setCharacters]
  );

  const handleClear = useCallback(() => {
    setQuery('');
    setError(null);
    inputRef.current.focus();
  }, []);

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <div className="search-wrapper">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a Simpsons character..."
          disabled={isLoading}
          aria-label="Search for Simpsons characters by name"
        />
        {query && !isLoading && (
          <button
            type="button"
            className="clear-button"
            onClick={handleClear}
            aria-label="Clear search input"
          >
            ✕
          </button>
        )}
        <button
          type="submit"
          className="search-button"
          disabled={isLoading}
          aria-label={isLoading ? 'Searching' : 'Submit search'}
        >
          {isLoading ? (
            <span className="loading-icon">⟳</span>
          ) : (
            <span>Search</span>
          )}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default React.memo(Search);