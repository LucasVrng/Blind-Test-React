// import { useState, useEffect } from 'react'
// import { FaPause, FaPlay } from "react-icons/fa";
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import confetti from "https://cdn.skypack.dev/canvas-confetti";

import { use, useState } from "react";

function PlayAudio() {
     const songs : string[] = ["The Simpsons Hit & Run Soundtrack - Legitimate Business.mp3", 
        "burn and smithers run power plan themselves.mp3",
        "simpsons theme halloween.mp3",
        "The Simpsons Hit & Run Soundtrack - Duff Brewery.mp3",
        "The Simpsons Hit & Run Soundtrack - End Credits.mp3"
    ]

    // const [isPlaying, setIsPlaying] = useState(false);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [currentSong, setCurrentSong] = useState(() => {
        return songs[Math.floor(Math.random() * songs.length)];
    });

    return (
        <>
        <audio src={`Audio/${currentSong}`} controls={true}></audio>
        <input type="text" placeholder="search song" onChange={(e) => setSearch(e.target.value)}></input>
        <ul className="suggestions">
            {songs
            .filter((song) => song.toLowerCase().includes(search.toLowerCase()))
            .map((song,key) => (
                <li key={key}>
                    {song}{" "}
                </li>
            ))}
        </ul>
        </>
    )
}

export default PlayAudio;