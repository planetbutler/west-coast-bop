import './App.css';
//adding components
import Artist from './components/Artist';
import MusicPlayer from './components/MusicPlayer';
import Library from './components/Library';
import Bio from './components/Bio';

function App() {
  return (
    <div className="App">
      <h1>The Trumpets of West Coast BeBop</h1>
      <div className="body">
        <div>
          <Library/>
        </div>
        <div className="center">
          <Artist/>
          <MusicPlayer/>
        </div>
        <div>
          <Bio/>
        </div>
      </div>
    </div>
  );
}

export default App;
