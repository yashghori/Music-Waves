
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";


const Player = ({
  setSongs,
  audioRef,
  currentIndex,
  setCurrentIndex,
  songs,
  setSongTime,
  songTime,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
}) => {

  // play function after every button event
  const playMusic = () => {
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        })
      }
    }
  }


  // Time formater
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  // drag handler
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongTime({ ...songTime, currentTime: e.target.value });
  };



  const prevMusic = () => {
    if (currentIndex === 0) {
      setCurrentSong(songs[songs.length - 1]);
      setCurrentIndex(songs.length - 1);
      playMusic();
      let newSongs = songs.map((song) => {
        if (song.Id === songs[songs.length - 1].Id) {
          return {
            ...song,
            active: true
          }
        } else {
          return {
            ...song,
            active: false
          }
        }
      })
      setSongs(newSongs)

    } else {

      setCurrentSong(songs[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
      playMusic();

      let newSongs = songs.map((song) => {
        if (song.Id === songs[currentIndex - 1].Id) {
          return {
            ...song,
            active: true
          }
        } else {
          return {
            ...song,
            active: false
          }
        }
      })
      setSongs(newSongs)

    }
  };

  const playSong = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(!isPlaying);

    } else {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);

    }
  };

  const nextMusic = () => {
    if (currentIndex === songs.length - 1) {
      setCurrentSong(songs[0]);
      setCurrentIndex(0);
      playMusic();
      let newSongs = songs.map((song) => {
        if (song.Id === songs[0].Id) {
          return {
            ...song,
            active: true
          }
        } else {
          return {
            ...song,
            active: false
          }
        }
      })
      setSongs(newSongs)
    } else {
      setCurrentSong(songs[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
      playMusic();
      let newSongs = songs.map((song) => {
        if (song.Id === songs[currentIndex + 1].Id) {
          return {
            ...song,
            active: true
          }
        } else {
          return {
            ...song,
            active: false
          }
        }
      })
      setSongs(newSongs)
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songTime.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={songTime.duration || 0}
          value={songTime.currentTime}
          type="range"
          // style={{
          //   background: `linear-gradient(to right, #ff9800 0%, #ff9800 ${songTime.currentTime}%, #fff ${songTime.currentTime}%, #fff 100%)`
          // }}

        />
        <p>{getTime(songTime.duration)}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          onClick={prevMusic}
          size="2x"
          className="skip-back"
          icon={faAngleLeft}
        />

        <FontAwesomeIcon
          onClick={playSong}
          size="2x"
          className="play"
          icon={isPlaying ? faPause : faPlay}
        />
        {/* <FontAwesomeIcon icon={faPause} /> */}

        <FontAwesomeIcon
          onClick={nextMusic}
          size="2x"
          className="skip-forward"
          icon={faAngleRight}
        />
      </div>

    </div>
  );
};

export default Player;
