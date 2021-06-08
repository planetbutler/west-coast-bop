import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'


const Artist = ({currentArtist}) => {
    const ghostify = () =>  setIsGhost(!isGhost)

    //state
    const [isGhost, setIsGhost] = useState(true)

    return (
 
        <div className="artist">
            <div className="artistImg">
                <img src={isGhost ? currentArtist.vid : currentArtist.ghostVid} alt={currentArtist.name} /> 
            </div>
            <div className="vid-text"> 
                <h2>{currentArtist.name}</h2>
                <h3>{currentArtist.title}</h3>  
                <FontAwesomeIcon className="ghostBtn" onClick={ghostify} size="2x" icon={faGhost} />
                <p>Ghostify</p>
            </div>
        </div>

    )
}

export default Artist
