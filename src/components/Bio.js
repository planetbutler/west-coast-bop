import React from 'react'

const Bio = ({currentArtist}) => {
    return (
        <div className="bios">
          <div className="text-container">
            <marquee behavior="scroll" direction="up" scrollamount="2">
              {currentArtist.bio}
            </marquee>
          </div>
        </div>
    )
}

export default Bio
