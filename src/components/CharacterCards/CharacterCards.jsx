import React from 'react'
import './CharacterCards.css'

function CharacterCards({characters}) {
  return (
    <div className='character-card'>
    <p>{characters.name}</p>
    </div>
  )
}

export default CharacterCards