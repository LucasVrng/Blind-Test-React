// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import confetti from "https://cdn.skypack.dev/canvas-confetti";

import { useState } from "react";
import Select from 'react-select'
import "./PlayAudio.css";

function PlayAudio() {
    const songs = [
        { value: '1', label: 'The Simpsons Hit & Run Soundtrack - Legitimate Business.mp3' },
        { value: '2', label: 'burn and smithers run power plan themselves.mp3' },
        { value: '3', label: 'simpsons theme halloween.mp3' },
        { value: '4', label: 'The Simpsons Hit & Run Soundtrack - Duff Brewery.mp3' },
        { value: '5', label: 'The Simpsons Hit & Run Soundtrack - End Credits.mp3' }
    ]

    type Song = {
        value: string;
        label: string;
    }

    const [score, setScore] = useState(0);
    const [currentSong, setCurrentSong] = useState(() => {
        return songs[Math.floor(Math.random() * songs.length)];
    });

    const [selectedOption, setSelectedOption] = useState<Song | null>(null)

    const handleSelectChange = (value: Song | null) => {
        setSelectedOption(value);
        if (value?.value == currentSong.value) {
            reset();
            getRandomSong();
            setScore(score => score++);
        }
    }

    function reset() {
        setSelectedOption(null)
    }

    function getRandomSong() {
        const randomSong = songs[Math.floor(Math.random() * songs.length)];
        setCurrentSong(randomSong);
    }

    // const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
        <audio src={`Audio/${currentSong.label}`} controls={true}></audio>
        <Select isClearable options={songs} className="select" value={selectedOption} onChange={handleSelectChange}/>
        <span>{score}</span>
        </>
    )
}

export default PlayAudio;