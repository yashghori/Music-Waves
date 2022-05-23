import { useState, useRef } from "react";
import "../src/styles/app.scss";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";

function App() {
  // state of data
  const [songs, setSongs] = useState(data());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[currentIndex]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [songTime, setSongTime] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  const timeUpdateHandler = (e) => {
    let current = e.target.currentTime;
    let duration = e.target.duration;
    setSongTime({ ...songTime, currentTime: current, duration: duration });
  };

  return (
    <>
      <div className="app">
        <Nav
          isLibraryOpen={isLibraryOpen}
          setIsLibraryOpen={setIsLibraryOpen}
        />
        <Song currentSong={currentSong} />
        <Player
          setSongs={setSongs}
          setSongTime={setSongTime}
          songTime={songTime}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          songs={songs}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
        />
        <Library
          isLibraryOpen={isLibraryOpen}
          setSongs={setSongs}
          audioRef={audioRef}
          songs={songs}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
        />
        <audio
          onLoadedMetadata={timeUpdateHandler}
          onTimeUpdate={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
        ></audio>
      </div>
    </>
  );
}

export default App;
