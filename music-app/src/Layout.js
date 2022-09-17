import React, { useState, useRef, useEffect, useContext } from "react";
import Header from "./Components/Header";
import Main from "./Components/main/Main";
import SideBar from "./Components/SideBar";
import musicList from "./musics";
import musicImg from "./assets/img/image-background1.jpg";
import "./assets/styles/index.scss";
import { myContexts } from './contexts';



const Layout = ({children}) => {

const {
  songs,
  setSongs,
  audioHandler,
  setAudioHandler,
  currentSong,
  setCurrentSong,
  songCurrentTime,
  setSongCurrentTime,
  songFullTime,
  setSongFullTime,
  
} = useContext(myContexts);

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
      setSongFullTime(audioRef.current.duration);
    }, 1000);


  }, [audioHandler , currentSong]);

  const getNext = () => {
    const index = songs.findIndex((item) => item.id === currentSong[0].id);
    setCurrentSong([songs[index + 1]]);
    if (songs.indexOf(currentSong[0]) === songs.length - 1) {
      setCurrentSong([songs[0]]);
    }
  };

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
          setSongs={setSongs}
        />
        <audio
          ref={audioRef}
          src={currentSong[0].audio}
          onEnded={getNext}
        ></audio>
        <main className="container">
          <section className="row">
            <section className="col-md-4 px-0">
              <SideBar />
            </section>
            <section className="col-md-8  px-0">
             {children}
            </section>
          </section>
        </main>
      </div>
    );
}
 
export default Layout;