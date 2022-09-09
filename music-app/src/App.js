import React,{ useState , useRef , useEffect} from "react";
import Header from "./Components/Header";
import Main from "./Components/main/Main";
import SideBar from "./Components/SideBar";
import musicList from "./musics";
import "./assets/styles/index.scss";


function App() {
  const [songs, setSongs] = useState(musicList());
  const [audioHandler , setAudioHandler]=useState(false);
  const [currentSong, setCurrentSong] = useState([]);

  const audioRef=useRef();
useEffect(() => {
  if (audioHandler) audioRef.current.play();
   else audioRef.current.pause();
} , [audioHandler]);


  return (
    <div>
      <Header audioHandler={audioHandler} setAudioHandler={setAudioHandler} />
      <audio ref={audioRef} src={songs[0].audio}></audio>
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
