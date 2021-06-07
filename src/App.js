import React, { useState } from 'react';
import './App.css';
//adding components
import Artist from './components/Artist';
import MusicPlayer from './components/MusicPlayer';
import Library from './components/Library';
import Bio from './components/Bio';
//import data file
import data from './data.js';

function App() {
  //state
  const [artists, setArtists] = useState(data());
  const [currentArtist, setCurrentArtist] = useState(artists[2]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <header>The Trumpets of West Coast BeBop</header>
      <div className="body">
        <div className="left">
          <Library/>
        </div>
        <div className="center">
          <Artist currentArtist={currentArtist}/>
        </div>
        <div className="right">
          <Bio/>
          <MusicPlayer 
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          currentArtist={currentArtist} />
        </div>
      </div>
    </div>
  );
}

export default App;
