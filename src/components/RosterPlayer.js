import React from 'react';


const RosterPlayer = ({ artist, artists, setCurrentArtist, id, audioRef, isPlaying, setArtists }) => {
    const artistSelectHandler = async () => {
        await setCurrentArtist(artist);
        if(isPlaying) audioRef.current.play();
        
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

        if(isPlaying) audioRef.current.play();
    };
    
    return (
 
        <div onClick={artistSelectHandler} className={`roster-player ${artist.active ? 'selected' : ""}`}>
            <div>
                <img src={ artist.vid } alt={artist.name} />  
                <h4>{artist.name}</h4>
                <h5>{artist.title}</h5>  
            </div>
        </div>
    )
}

export default RosterPlayer