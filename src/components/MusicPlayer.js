import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleLeft, faAngleRight, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

const MusicPlayer = ({currentArtist, isPlaying, setIsPlaying, audioRef, tuneInfo, setTuneInfo }) => {


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

const getTime = (time) => {
    return(
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
}
const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setTuneInfo({...tuneInfo, currentTime: e.target.value})
};



const [isMuted, setIsMuted] = useState(false)

const audioMute = () => {
    if(audioRef.current.muted) {
        audioRef.current.muted = false;
        setIsMuted(!isMuted)
    } else {
        audioRef.current.muted = true;
        setIsMuted(!isMuted)
    }
}

const setVolume = (e) => {
    audioRef.current.volume = e.target.value / 100;
}


    return (
        <div className="music-player">
            <div className="horiz-control">
                <div className="time-control">
                    <p>{getTime(tuneInfo.currentTime)}</p>
                    <input 
                    min={0} 
                    max={tuneInfo.duration} 
                    onChange={dragHandler}
                    value={tuneInfo.currentTime} 
                    type="range" />
                    <p>{getTime(tuneInfo.duration)}</p>
                </div>
                <div className="play-control">
                    <FontAwesomeIcon className="skip-back" size="2x" icon={ faAngleLeft } />
                    <FontAwesomeIcon onClick={ playTuneHandler} 
                    className="play" 
                    size="2x" 
                    icon={isPlaying ? faPause : faPlay } />
                    <FontAwesomeIcon className="skip-forward" size="2x" icon={ faAngleRight } />
                </div>
            </div>
            <div className="volume-control">
                <div className="vc-input">
                    <input 
                    min={0} 
                    max={100} 
                    defaultValue={50} 
                    step={1}
                    onChange={setVolume}
                    type="range" />
                </div>
                <div>
                    <button onClick={() => audioMute()}>
                        <FontAwesomeIcon 
                        className="mute" 
                        size="2x" 
                        icon={ isMuted ? faVolumeMute : faVolumeUp } />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer
