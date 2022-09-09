import MusicItem from "./MusicItem";
import { useState } from "react";



const Main = ({songs}) => {
   
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