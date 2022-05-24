import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ audioRef, songs, setCurrentSong, isPlaying, setSongs, isLibraryOpen, isDark }) => {
    return (
        <div className={`library ${isLibraryOpen ? "open" : ""} ${isDark ? "dark_library" : ""}  `} >
            <h2>Library</h2>
            <div className="library_songs">
                {songs.map((song) => {
                    return (
                        <LibrarySong isDark={isDark} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} key={song.Id} Id={song.Id} song={song} />
                    )
                })}

            </div>
        </div>
    )
}

export default Library