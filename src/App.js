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
    animationPercentage: 0,
  });
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const timeUpdateHandler = (e) => {
    let current = e.target.currentTime;
    let duration = e.target.duration;
    // Calculate percentage

    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);

    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongTime({
      ...songTime,
      currentTime: current,
      duration: duration,
      animationPercentage: animation,
    });
  };

  // const songEndHandler = async () => {

  // };
  const songEndHandler = async () => {
    // const oneIndex = songs.findIndex((song) => song.Id === currentSong.Id);
    // await setCurrentSong(songs[(oneIndex + 1) % songs.length]);
    // if (isPlaying) audioRef.current.play();
  };

  return (
    <>
      <div
        className={`app  ${isLibraryOpen ? "library_active" : ""} ${
          isDark ? "dark_back" : ""
        } `}
      >
        <Nav
          isDark={isDark}
          setIsDark={setIsDark}
          isLibraryOpen={isLibraryOpen}
          setIsLibraryOpen={setIsLibraryOpen}
        />
        <Song
          isDark={isDark}
          isPlaying={isPlaying}
          currentSong={currentSong}
          isLibraryOpen={isLibraryOpen}
        />
        <Player
          isDark={isDark}
          isLibraryOpen={isLibraryOpen}
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
          isDark={isDark}
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
          onEnded={songEndHandler}
        ></audio>
      </div>
    </>
  );
}

export default App;
