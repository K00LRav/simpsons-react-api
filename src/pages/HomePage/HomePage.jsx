import React, {useEffect, useState} from 'react'
import './HomePage.css'
import axios from 'axios'
import CharacterCards from '../../components/CharacterCards/CharacterCards';
import Search from '../../components/Search/Search';

function HomePage() {

    //create state for characters
    const[characters, setCharacters] = useState([])


    //gets the data from the api
    useEffect(
        ()=>{
            //this is to test console.log works in the function
            // console.log('homepage loaded')

            axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
            .then(results=>{
                // console.log(results)
                //this stores the data
                setCharacters(results.data)
            })
            .catch(err => console.log(err))
        },[]
    )

    const handleNewQuote =() => {
        // console.log("testing")
        axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(results=>{
            // console.log(results)
            //this stores the data
            setCharacters(results.data)
        })
        .catch(err => console.log(err))
        
    }

  return (
    <div className='homepage-container'>
        <h1>Character Quotes</h1>
        <Search setCharacters={setCharacters}/>
        <div className="characters">
            {
                characters.map(item=> <CharacterCards key={item} characters={item} />)
            }
        </div>
        <button className='get-quote' onClick={handleNewQuote}>Get New Quote</button>
        </div>
        
  )
}

export default HomePage