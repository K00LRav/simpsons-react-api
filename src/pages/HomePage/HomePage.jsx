import React, {useEffect, useState} from 'react'
import './HomePage.css'
import axios from 'axios'
import CharacterCards from '../../components/CharacterCards/CharacterCards';

function HomePage() {

    //create state for characters
    const[characters, setCharacters] = useState([])

    //gets the data from the api
    useEffect(
        ()=>{
            //this is to test console.log works in the function
            // console.log('homepage loaded')

            axios.get('https://api.sampleapis.com/simpsons/characters')
            .then(results=>{
                // console.log(results.data)
                //this stores the data
                setCharacters(results.data)
            })
            .catch(err => console.log(err))
        }
    )

  return (
    <div className='homepage-container'>
        <h1>Simpson Characters</h1>
        <div className="characters">
            {
                characters.map(item=><CharacterCards key={item.id} characters={item} />)
            }
        </div>

        </div>
  )
}

export default HomePage