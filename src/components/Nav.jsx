import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ isLibraryOpen, setIsLibraryOpen, isDark, setIsDark }) => {

    return (
        <nav>
            <h1 > <span>G</span> Waves</h1>
            <button className={`${isDark ? "dark_button" : ""} `} onClick={() => { setIsLibraryOpen(!isLibraryOpen) }}>Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
            <button onClick={() => { setIsDark(!isDark) }} className='toggle_mode' >Dark / Light</button>
        </nav>
    )
}

export default Nav