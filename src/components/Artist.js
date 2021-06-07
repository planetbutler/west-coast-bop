import React, { useState } from 'react'

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
                <button onClick={ghostify}>Ghostify</button>
            </div>
        </div>

    )
}

export default Artist
