import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, 
    faPause, 
    faAngleLeft, 
    faAngleRight, 
    faVolumeMute, 
    faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const MusicPlayer = ({
    setArtists,
    artists, 
    currentArtist, 
    isPlaying, 
    setIsPlaying, 
    audioRef, 
    tuneInfo, 
    setTuneInfo, 
    setCurrentArtist }) => {
//use effect
useEffect(() => {
    const newArtist = artists.map((artist) => {
        if(artist.id === currentArtist.id) {
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
},[currentArtist]);
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

const skipTrackHandler = async (direction) => {
    let currentIndex = artists.findIndex((artist) => artist.id === currentArtist.id);
    if(direction === 'skip-forward') {
        await setCurrentArtist(artists[(currentIndex + 1) % artists.length])
    }
    if(direction === 'skip-back') {
        if((currentIndex -1) % artists.length === -1) {
            await setCurrentArtist(artists[artists.length - 1]);
            if(isPlaying) audioRef.current.play();
            return;
        }
        await setCurrentArtist(artists[(currentIndex - 1) % artists.length])
    }
    if(isPlaying) audioRef.current.play();
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
                    <p>{tuneInfo.duration ? getTime(tuneInfo.currentTime) : "0:00"}</p>
                    <input 
                    min={0} 
                    max={tuneInfo.duration || 0} 
                    onChange={dragHandler}
                    value={tuneInfo.currentTime} 
                    type="range" />
                    <p>{getTime(tuneInfo.duration)}</p>
                </div>
                <div className="play-control">
                    <FontAwesomeIcon 
                    onClick={() => skipTrackHandler('skip-back')} 
                    className="skip-back" 
                    size="2x" icon={ faAngleLeft } />
                    <FontAwesomeIcon 
                    onClick={ playTuneHandler} 
                    className="play" 
                    size="2x" 
                    icon={isPlaying ? faPause : faPlay } />
                    <FontAwesomeIcon 
                    onClick={() => skipTrackHandler('skip-forward')} 
                    className="skip-forward" 
                    size="2x" icon={ faAngleRight } />
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
