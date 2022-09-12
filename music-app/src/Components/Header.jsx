import { useState } from "react";
import logo from "./../assets/img/right-img.jpg";
import musicImg from "./../assets/img/image-background1.jpg";
import { IconName } from "react-icons/fa";
import { BsStar, BsStarFill } from "react-icons/bs";


const Header = ({ audioHandler, setAudioHandler,setCurrentSong, currentSong ,songFullTime,songCurrentTime ,audioRef ,songs }) => {

  const [favorite,setFavorite]=useState(false);

  const setCleanTime=(time)=>{
    return `${Math.floor(time / 60)}:${("0" + Math.floor(time % 60)).slice(-2)}`;
  }
const getNext=()=>{
const index=songs.findIndex(item => item.id === currentSong[0].id);
setCurrentSong([songs[index + 1]]);
if(songs.indexOf(currentSong[0]) === songs.length-1){
  setCurrentSong([songs[0]]);
}
}

const getBack=()=>{
  const index=songs.findIndex(item=> item.id === currentSong[0].id);
  setCurrentSong([songs[index-1]]);
  if (songs.indexOf(currentSong[0]) <= 0) {
    setCurrentSong([songs[songs.length - 1]]);
  }

}
  
  return (
    <header>
      <article className="container h-100">
        <article className="h-100 d-flex align-items-center ">
          <section
            className="music-cover btn d-flex justify-content-center"
            style={{ backgroundImage: `url(${currentSong[0].cover})` }}
            onClick={() => setAudioHandler(!audioHandler)}
          >
            <section className="filter-cover "></section>
            {audioHandler ? (
              <svg
                className="player-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="currentColor"
                viewBox="0 0 16 16"
                
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
              </svg>
            ) : (
              <svg
                className="player-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
              </svg>
            )}
          </section>

          <section className="music-description flex-grow-1">
            <section className="d-flex justify-content-between">
              <section className="music-title">
                <h1>{currentSong[0].name}</h1>
                <h2>{currentSong[0].artist}</h2>
              </section>
              <span
                onClick={() => setFavorite(!favorite)}
                className="btn"
                style={{ border: "none", color: "white" }}
              >
                {favorite ? <BsStarFill size="2rem" /> : <BsStar size="2rem" />}

                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg> */}
              </span>
            </section>
            <section className="music-range">
              <section className="d-flex justify-content-between">
                <span className="current-time">
                  {setCleanTime(songCurrentTime)}
                </span>
                <span className="full-time">{songFullTime ?setCleanTime(songFullTime) : "0:00"}</span>
              </section>

              <input
                className="w-100 btn"
                type="range"
                min={0}
                max={songFullTime}
                value={songCurrentTime}
                onChange={(e) =>
                  (audioRef.current.currentTime = e.target.value)
                }
              />
            </section>
            <section className="music-nav">
              <button className="btn" onClick={getBack}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082z" />
                </svg>
              </button>
              <button
                className="btn"
                onClick={() => setAudioHandler(!audioHandler)}
              >
                {audioHandler ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                  </svg>
                )}
              </button>
              <button className="btn" onClick={getNext}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z" />
                </svg>
              </button>
            </section>
          </section>
          <section className="main-logo h-100 pt-5 align-items-strat w-25 d-flex justify-content-end">
            <img
              src={logo}
              width="150"
              height="150"
              style={{ borderRadius: "50%" }}
            />
          </section>
        </article>
      </article>
    </header>
  );
};

export default Header;
