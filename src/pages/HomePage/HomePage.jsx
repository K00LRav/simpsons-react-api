import React, { useEffect, useState, useCallback } from 'react';
import './HomePage.css';
import axios from 'axios';
import CharacterCards from '../../components/CharacterCards/CharacterCards';
import Search from '../../components/Search/Search';

function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes');
      if (!Array.isArray(response.data) || response.data.length === 0) {
        throw new Error('No quotes received');
      }
      setCharacters(response.data);
    } catch (err) {
      setError('Failed to fetch quote. Please try again.');
      console.error('Error fetching quote:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <main className="homepage-container">
      <h1>Character Quotes</h1>
      <Search setCharacters={setCharacters} />
      {error && <p className="error-message">{error}</p>}
      <section className="characters">
        {isLoading ? (
          <div className="loading-bar-container">
            <div className="loading-bar"></div>
          </div>
        ) : characters.length === 0 ? (
          <p>No quotes available.</p>
        ) : (
          characters.map((item, index) => (
            <CharacterCards
              key={`${item.character}-${item.quote}-${index}`}
              characters={item}
            />
          ))
        )}
      </section>
      <button
        className="get-quote"
        onClick={fetchQuote}
        disabled={isLoading}
        aria-label="Fetch a new Simpsons quote"
      >
        {isLoading ? 'Loading...' : 'Get New Quote'}
      </button>
    </main>
  );
}

export default HomePage;