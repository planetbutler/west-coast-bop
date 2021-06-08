import React, { useState, useRef } from 'react';
import './App.css';
//adding components
import Artist from './components/Artist';
import MusicPlayer from './components/MusicPlayer';
import Roster from './components/Roster';
import Bio from './components/Bio';
//import data file
import data from './data.js';

function App() {
  //ref
  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setTuneInfo({...tuneInfo, currentTime: current, duration});
};

  //state
  const [artists, setArtists] = useState(data());
  const [currentArtist, setCurrentArtist] = useState(artists[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tuneInfo, setTuneInfo] = useState({
  currentTime: 0,
  duration: 0,
})

  return (
    <div className="App">
      <header>The Trumpets of West Coast BeBop</header>
      <div className="body">
        <div className="left">
          <Roster
          setArtists={setArtists} 
          isPlaying={isPlaying}
          audioRef={audioRef}
          artists={artists}
          setCurrentArtist={setCurrentArtist}/>
          <audio 
            onLoadedMetadata={timeUpdateHandler}
            onTimeUpdate={timeUpdateHandler} 
            ref={audioRef} 
            src={currentArtist.tune}>
          </audio>
        </div>
        <div className="center">
          <Artist currentArtist={currentArtist}/>
        </div>
        <div className="right">
          <Bio/>
          <MusicPlayer
          setCurrentArtist={setCurrentArtist}
          artists={artists}
          setTuneInfo={setTuneInfo}
          tuneInfo={tuneInfo}
          audioRef={audioRef} 
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          currentArtist={currentArtist} />
        </div>
      </div>
    </div>
  );
}

export default App;
