import React, { useState, useRef } from 'react'
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
const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setTuneInfo({...tuneInfo, currentTime: current, duration});
}
const getTime = (time) => {
    return(
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
}
//state
const [tuneInfo, setTuneInfo] = useState({
    currentTime: null,
    duration: null,
})

    return (
        <div className="music-player">
            <div className="horiz-control">
                <div className="time-control">
                    <p>{getTime(tuneInfo.currentTime)}</p>
                    <input type="range" />
                    <p>{getTime(tuneInfo.duration)}</p>
                </div>
                <div className="play-control">
                    <FontAwesomeIcon className="skip-back" size="2x" icon={ faAngleLeft } />
                    <FontAwesomeIcon onClick={ playTuneHandler} className="play" size="2x" icon={ faPlay } />
                    <FontAwesomeIcon className="skip-forward" size="2x" icon={ faAngleRight } />
                </div>
                <audio 
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler} 
                ref={audioRef} 
                src={currentArtist.tune}></audio>
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
