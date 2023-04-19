import React from 'react'
import './CharacterCards.css'

function CharacterCards({characters}) {
  return (
    <div className='character-card'>
        <img src={characters.image} alt="" />
    <h3>{characters.character}</h3>
    <p>"{characters.quote}"</p>
    </div>
  )
}

export default CharacterCards