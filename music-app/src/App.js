import React from "react";
import Header from "./Components/Header";
import Main from "./Components/main/Main";
import SideBar from "./Components/SideBar";
import musicList from "./musics";
import { useState , useRef} from "react";
import "./assets/styles/index.scss";

//"https://dl.musicya.ir/1401/06/11/Omid Ameri - Khoon Sard [128].mp3" 
function App() {
  const [songs, setSongs] = useState(musicList());
  const [audioHandler , setAudioHandler]=useState(false);


  const audioRef=useRef();
  if(audioHandler)audioRef.current.play()
else audioRef.current.pause();


  return (
    <div>
      <Header audioHandler={audioHandler} setAudioHandler={setAudioHandler}/>
      <audio ref={useRef} src={songs[0].audio} ></audio>
      <main className="container">
        <section className="row">
          <section className="col-md-4 px-0">
            <SideBar />
          </section>
          <section className="col-md-8 overflow-scroll px-0">
            <Main songs={songs} />
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
