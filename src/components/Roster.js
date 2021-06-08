import React from 'react'
import RosterPlayer from './RosterPlayer';

const Roster = ({ artists, setCurrentArtist }) => {
    return (
        <div className="roster">
            <h2>Roster</h2>
            <div className="roster-players">
                {artists.map((artist) => (
                    <RosterPlayer 
                    artists={artists}
                    setCurrentArtist={setCurrentArtist}
                    artist={artist} 
                    id={artist.id}
                    key={artist.id} />
                ))}
            </div>
        </div>
    )
}

export default Roster
