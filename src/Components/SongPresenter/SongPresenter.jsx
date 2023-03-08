const SongPresenter = ({song}) => {
  return (
    <ul className="song-presenter">
      <li>Title: {song.title}</li>
      <li>Artist: {song.artist}</li>
      <li>Album: {song.album}</li>
      <li>Release Date: {song.release_date}</li>
      <li>Genre: {song.genre}</li>
    </ul>
  );
};

export default SongPresenter;
