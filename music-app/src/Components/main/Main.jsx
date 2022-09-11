import MusicItem from "./MusicItem";




const Main = ({ currentSong, setCurrentSong, songs }) => {
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
        />
      ))}
    </main>
  );
};
 
export default Main;