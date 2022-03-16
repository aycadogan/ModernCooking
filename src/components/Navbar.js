import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
import Searchbar from './Searchbar'

import './Navbar.css'


const Navbar = () => {

  const { color } = useContext(ThemeContext)

  return (
    <div className="navbar" style={{ background: color}}>
        <nav>
            <Link to="/" className='brand'>
                <h1>Modern Cooking</h1>
            </Link>
            <Searchbar />
            <Link to="/create">
                Create Recipe
            </Link>
        </nav>
    </div>
  )
}

export default Navbar