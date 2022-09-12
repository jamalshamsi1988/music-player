import MusicItem from "./MusicItem";
import { memo } from 'react';




const Main = ({ currentSong, setCurrentSong, songs, audioHandler }) => {
  return (
    <main>
      {songs.map((item) => (
        <MusicItem
          key={item.id}
          cover={item.cover}
          name={item.name}
          artist={item.artist}
          id={item.id}
          songs={songs}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          audioHandler={audioHandler}
        />
      ))}
    </main>
  );
};
 
export default memo(Main);