import React, { useState, useRef, useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/main/Main";
import SideBar from "./Components/SideBar";
import musicList from "./musics";
import musicImg from "././assets/img/image-background1.jpg";
import "./assets/styles/index.scss";

function App() {
  const [songs, setSongs] = useState(musicList());
  const [audioHandler, setAudioHandler] = useState(false);
  const [currentSong, setCurrentSong] = useState([
    {
      id: 0,
      name: "Music Name",
      artist: "Artist Name",
      audio:
        "https://dl.musicya.ir/1401/06/11/Omid Ameri - Khoon Sard [128].mp3",
      cover: musicImg,
      active: false,
    },
  ]);
  const [songCurrentTime, setSongCurrentTime] = useState();
  const [songFullTime, setSongFullTime] = useState();

  const audioRef = useRef();

  useEffect(() => {
    const playPromis = audioRef.current.play();
    if (playPromis !== undefined) {
      playPromis
        .then(() => {
          if (audioHandler) audioRef.current.play();
          else audioRef.current.pause();
        })
        .catch((err) => console.log(err));
    }

    setInterval(() => {
      setSongCurrentTime(audioRef.current.currentTime);
    }, 1000);

setSongFullTime(audioRef.current.duration);

  }, [audioHandler , currentSong]);

  return (
    <div>
      <Header
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioHandler={audioHandler}
        setAudioHandler={setAudioHandler}
        songCurrentTime={songCurrentTime}
        songFullTime={songFullTime}
        audioRef={audioRef}
        songs={songs}
      />
      <audio ref={audioRef} src={currentSong[0].audio}></audio>
      <main className="container">
        <section className="row">
          <section className="col-md-4 px-0">
            <SideBar />
          </section>
          <section className="col-md-8 overflow-scroll px-0">
            <Main
              songs={songs}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
            />
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
