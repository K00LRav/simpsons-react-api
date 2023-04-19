import React from 'react'
import './CharacterCards.css'

function CharacterCards({characters}) {
  return (
    <div className='character-card'>
        <img src={characters.image} alt="" />
    <p>{characters.character}</p>
    <p>{characters.quote}</p>
    </div>
  )
}

export default CharacterCards