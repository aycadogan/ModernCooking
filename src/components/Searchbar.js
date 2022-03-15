import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
// styles
import './Searchbar.css'

const Searchbar = () => {

    const [term, setTerm] = useState('')
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        history(`/search?q=${term}`)
    }

  return (
    <div className='searchbar'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input 
            type="text"
            id="search"
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Find a recipe"
            required
            />
        </form>
    </div>
  )
}

export default Searchbar