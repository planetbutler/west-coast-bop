import React from 'react'
import RosterPlayer from './RosterPlayer';

const Roster = ({ artists, setCurrentArtist, audioRef, isPlaying, setArtists }) => {
    return (
        <div className="roster">
            <h2>Roster</h2>
            <div className="roster-players">
                {artists.map((artist) => (
                    <RosterPlayer 
                        setArtists={setArtists}
                        isPlaying={isPlaying}
                        artists={artists}
                        setCurrentArtist={setCurrentArtist}
                        artist={artist} 
                        id={artist.id}
                        key={artist.id}
                        audioRef={audioRef} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Roster
