import React from 'react'

const Artist = ({currentArtist}) => {
    return (
        <div className="artist">
            <img src={currentArtist.vid} alt="video" />
            <h1>{currentArtist.name}</h1>
            <h1>{currentArtist.title}</h1>
        </div>
    )
}

export default Artist
