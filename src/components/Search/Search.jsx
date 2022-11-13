import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

import './Search.scss'
const Search = () => {
    return (
        <div className='Search_Component'>
            <h2>Explore new places</h2>
            <form>
                <div className='form_input'>
                    <BiSearchAlt className='icon' />
                    <input type='text' placeholder='search' />
                </div>
            </form>
        </div>
    )
}

export default Search