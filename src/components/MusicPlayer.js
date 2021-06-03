import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleLeft, faAngleRight, faVolumeMute, faVolume } from '@fortawesome/free-solid-svg-icons'

const MusicPlayer = () => {
    return (
        <div className="music-player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={ faAngleLeft } />
                <FontAwesomeIcon className="play" size="2x" icon={ faPlay } />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={ faAngleRight } />
            </div>
        </div>
    )
}

export default MusicPlayer
