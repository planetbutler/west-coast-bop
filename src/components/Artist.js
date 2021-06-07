import React from 'react'

const Artist = ({currentArtist}) => {
    return (
        <div className="artist">
            <img src={currentArtist.vid} alt={currentArtist.name} />
            <h2>{currentArtist.name}</h2>
            <h3>{currentArtist.title}</h3>
        </div>
    )
}

export default Artist
