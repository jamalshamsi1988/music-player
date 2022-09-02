import MusicItem from "./MusicItem";
import { useState } from "react";
import musicList from "../../musics";


const Main = () => {
   const [songs,setSongs]=useState(musicList());
    return (
      <main>
        {songs.map((item) => (
          <MusicItem 
          cover={item.cover}
          name={item.name}
          artist={item.artist}

          />
        ))}
      </main>
    );
}
 
export default Main;