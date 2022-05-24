import React from 'react'

const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, Id, setSongs, isDark }) => {

    const songSelectHandler = () => {
        setCurrentSong(song);
        const newSong = songs.map((song) => {
            if (song.Id === Id) {
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
        setSongs(newSong)



        // check if the song is playing
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }

        audioRef.current.play();
    }
    return (
        <div onClick={songSelectHandler} className={`library_song  ${song.active ? `${isDark ? "selected_dark" : "selected "}` : ""} `}>
            <img src={song.cover} alt="" />
            <div className="name_artist">
                <h3 className={` song_name ${isDark ? "dark_song_name" : ""} `} >{song.name}</h3>
                <h4 className='song_artist' >{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong