import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi';

import './Result.scss'
const Result = ({ place }) => {
    return (
        <div className='Result_Component'>
            <div className='result_container'>
                <div className='result'>
                    <img src='./test_photo.jpg' alt='' className='result_photo' />
                    <h2>{place?.title}</h2>
                    <div className='rating_review'>
                        <p>{place?.rating}</p>
                        <p>{place?.reviews} <span>reviews</span></p>
                    </div>
                    <div className='ranking'>
                        <p>Ranking</p>
                        <p>{place?.ranking}</p>
                    </div>
                    <p>Restaurant</p>
                    <div className='tags'>
                        {place?.tags.map(tag => (<p>{tag}</p>))}
                    </div>
                    
                    <div className='location'>
                        <BiCurrentLocation className='icon' />
                        <p>{place?.direction}</p>
                    </div>
                    <div className='contact'>
                        <p>contact</p>
                        <p>{place?.contact}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Result