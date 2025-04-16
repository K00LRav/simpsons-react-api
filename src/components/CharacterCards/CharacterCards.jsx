import React from 'react';
import './CharacterCards.css';

function CharacterCards({ characters }) {
  return (
    <div className="character-card">
      <div className="character-image">
        <img
          src={characters.image || '/fallback-image.png'}
          alt={`${characters.character || 'Unknown'} from The Simpsons`}
          loading="lazy"
        />
      </div>
      <div className="character-content">
        <h3>{characters.character || 'Unknown Character'}</h3>
        <p>"{characters.quote || 'No quote available'}"</p>
      </div>
    </div>
  );
}

export default React.memo(CharacterCards);