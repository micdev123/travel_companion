import React from 'react'

import data from '../../data'
import Result from '../Result/Result'

import './Results.scss'
const Results = () => {
    return (
        <div className='Results_Component'>
            <form className='form'>
                <h2>Restaurants, Hotels, & Attractions around you </h2>
        
                <div className='form_group'>
                    <select id='type'>
                        <option value='restaurants'>Restaurants</option>
                        <option value='hotels'>Hotels</option>
                        <option value="attractions">Attractions</option>
                    </select>

                    <select id='type' value='rating' className='rating'>
                        <option>Ratings</option>
                        <option value=''>All</option>
                        <option value='3'>Above 3.0</option>
                        <option value='4'>Above 4.0</option>
                        <option value="4.5">Above 4.5</option>
                    </select>
                </div>
            </form>

            <div className='results_container'>
                {data?.results.map((result) => (
                    <Result place={result} key={result.id} />
                ))}
            </div>
        </div>
    )
}

export default Results