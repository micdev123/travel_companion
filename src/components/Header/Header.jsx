import React from 'react'
import {GiTripleScratches} from 'react-icons/gi'

import './Header.scss'
const Header = () => {
    return (
        <div className='Header_Component'>
            <div>
                <h3>
                    <GiTripleScratches className='icon' />
                    Travel Companion
                </h3>
            </div>
        </div>
    )
}

export default Header