import MusicItem from "./MusicItem";
import { memo } from 'react';
import { useContext } from 'react';
import { myContexts } from './../../contexts';




const Main = () => {
  const { currentSong, setCurrentSong, songs, audioHandler }=useContext(myContexts);
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