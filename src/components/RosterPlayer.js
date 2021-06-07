import React, { useState } from 'react'

const RosterPlayer = ({ artist }) => {
    
    return (
 
        <div className="roster-player">
            <div className="miniImg">
                <img src={ artist.vid } alt={artist.name} />  
                <h4>{artist.name}</h4>
                <h5>{artist.title}</h5>  
            </div>
        </div>
    )
}

export default RosterPlayer