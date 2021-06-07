import React from 'react'
import RosterPlayer from './RosterPlayer';

const Roster = ({ artists }) => {
    return (
        <div className="roster">
            <h2>Roster</h2>
            <div className="roster-players">
                {artists.map((artist) => (
                    <RosterPlayer artist={artist} />
                ))}
            </div>
        </div>
    )
}

export default Roster
