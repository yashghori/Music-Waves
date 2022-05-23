import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ audioRef, songs, setCurrentSong, isPlaying, setSongs, isLibraryOpen }) => {
    return (
        <div className={`library ${isLibraryOpen ? "open" : ""} `} >
            <h2>Library</h2>
            <div className="library_songs">
                {songs.map((song) => {
                    return (
                        <LibrarySong setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} key={song.Id} Id={song.Id} song={song} />
                    )
                })}

            </div>
        </div>
    )
}

export default Library