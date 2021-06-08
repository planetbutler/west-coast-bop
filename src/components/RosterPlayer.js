import React, { useState } from 'react'

const RosterPlayer = ({ artist, artists, setCurrentArtist, id, audioRef, isPlaying, setArtists }) => {
    const artistSelectHandler = () => {
        setCurrentArtist(artist);
        audioRef.current.play();
        //add active state
        const newArtist = artists.map((artist) => {
            if(artist.id === id) {
                return {
                    ...artist,
                    active: true,
                }
            } else {
                return {
                    ...artist, 
                    active: false,
                }
            }
        })
        setArtists(newArtist);
        //checkif tune is playing
        if(isPlaying) {
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
    }
    
    return (
 
        <div onClick={artistSelectHandler} className={`roster-player ${artist.active ? 'selected' : ""}`}>
            <div className="miniImg">
                <img src={ artist.vid } alt={artist.name} />  
                <h4>{artist.name}</h4>
                <h5>{artist.title}</h5>  
            </div>
        </div>
    )
}

export default RosterPlayer