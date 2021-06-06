import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleLeft, faAngleRight, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

const MusicPlayer = ({currentArtist, isPlaying, setIsPlaying}) => {
//ref
const audioRef = useRef(null);

//event handler
const playTuneHandler = () => {
    if(isPlaying) {
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
    } else {
        audioRef.current.play();
        setIsPlaying(!isPlaying);
    }
}

    return (
        <div className="music-player">
            <div className="horiz-control">
                <div className="time-control">
                    <p>Start Time</p>
                    <input type="range" />
                    <p>End Time</p>
                </div>
                <div className="play-control">
                    <FontAwesomeIcon className="skip-back" size="2x" icon={ faAngleLeft } />
                    <FontAwesomeIcon onClick={ playTuneHandler} className="play" size="2x" icon={ faPlay } />
                    <FontAwesomeIcon className="skip-forward" size="2x" icon={ faAngleRight } />
                </div>
                <audio ref={audioRef} src={currentArtist.tune}></audio>
            </div>
            <div className="volume-control">
                <div className="vc-input">
                    <input type="range" />
                </div>
                <div className="mute">
                    <FontAwesomeIcon className="mute" size="2x" icon={ faVolumeUp } />
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer
