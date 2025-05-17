import React from 'react';
import './CharacterCards.css';
import { trackCharacterInteraction } from '../../utils/analytics';

function CharacterCards({ characters }) {
  const handleCardClick = () => {
    // Track character card interactions using our analytics helper
    trackCharacterInteraction(
      characters.character || 'Unknown',
      'card_click'
    );
  };

  return (
    <div 
      className="character-card"
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
      tabIndex="0"
      role="button"
      aria-label={`View ${characters.character || 'Unknown'} details`}
    >
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