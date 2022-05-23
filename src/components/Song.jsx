import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song_cointainer">
      <img className="cover_image" src={currentSong.cover} alt="" />
      <h2 className="song_name">{currentSong.name}</h2>
      <h3 className="song_artist">{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
