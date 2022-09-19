import { createContext,useState } from "react";
import musicList from "./musics";
import musicImg from "./assets/img/image-background1.jpg";

export const myContexts = createContext({
  songs: "",
  setSongs: "",
  audioHandler: "",
  setAudioHandler: "",
  currentSong: "",
  setCurrentSong: "",
  songCurrentTime: "",
  setSongCurrentTime: "",
  songFullTime: "",
  setSongFullTime: "",
});


const Contexts = ({ children }) => {
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
  const [songCurrentTime, setSongCurrentTime] = useState(0);
  const [songFullTime, setSongFullTime] = useState(0);
  

  return (
    <myContexts.Provider
      value={{
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
        
      }}
    >
      {children}
    </myContexts.Provider>
  );}
 
export default Contexts;