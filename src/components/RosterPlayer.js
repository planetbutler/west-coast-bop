import React, { useState } from 'react'

const RosterPlayer = ({ artist, artists, setCurrentArtist, id }) => {
    const artistSelectHandler = () => {
        setCurrentArtist(artist);
    }

    return (
 
        <div onClick={artistSelectHandler} className="roster-player">
            <div className="miniImg">
                <img src={ artist.vid } alt={artist.name} />  
                <h4>{artist.name}</h4>
                <h5>{artist.title}</h5>  
            </div>
        </div>
    )
}

export default RosterPlayer