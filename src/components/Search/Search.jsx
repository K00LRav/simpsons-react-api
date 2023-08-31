import React from 'react'
import './Search.css'
import axios from 'axios'

function Search({setCharacters}) {
    const [query, setQuery] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${query}`)
        .then(res =>{
            console.log(res.data)
            setCharacters(res.data)
        })
        .catch(err => {
            //check for error code
            if(err.response.status === 404){
                alert(`There is no character with the name ${query}`)
            }
            else{
                console.log(err)
            }
        })
        //clear the textbox
        setQuery('')
    }
  return (
    <form className="search-container" onSubmit={handleSubmit}>
    <input type="text" value={query} placeholder='Search Characters....' 
    onChange={(e)=>setQuery(e.target.value)}
    />
</form>
  )
}

export default Search