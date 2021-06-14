import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost, faMale } from '@fortawesome/free-solid-svg-icons'


const Artist = ({currentArtist}) => {
    const ghostify = () =>  setIsGhost(!isGhost)

    //state
    const [isGhost, setIsGhost] = useState(true)

    return (
 
        <div className="artist">
            <div className="gifContainer">
                <img src={isGhost ? currentArtist.vid : currentArtist.ghostVid} alt={currentArtist.name} /> 
            </div>
            <div className="vid-text"> 
                <h2>{currentArtist.name}</h2>
                <br/>
                <h3>{currentArtist.title}</h3>  
                <p onClick={ghostify}>{isGhost ? 'Ghostify' : 'Unghost'} &nbsp;<FontAwesomeIcon 
                className="ghostBtn" 
                onClick={ghostify} 
                size="2x" 
                icon={isGhost ? faGhost : faMale} /></p>
            </div>
        </div>
    )
}

export default Artist
