import React from "react";

const Song = ({ currentSong, isPlaying, isDark }) => {
  return (
    <div className="song_cointainer">
      <img className={`cover_image ${isDark ? "shadow_dark" : ""} ${isPlaying ? "spin_image" : ""}`} src={currentSong.cover} alt="" />
      <h2 className={` song_name ${isDark ? "dark_sodark_song_nameng_name" : ""} `} >{currentSong.name}</h2>
      <h3 className="song_artist">{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
