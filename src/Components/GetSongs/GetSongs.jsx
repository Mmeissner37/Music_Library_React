import React from 'react';
import SongPresenter from '../SongPresenter/SongPresenter';
import MusicButton from '../MusicButton';

const GetSongs = (props) => {
    // const [song, setSongs] = useState([]);

    // useEffect(() => {
    //   getallSongs();
    // }, []);
    
    // async function getallSongs(){
    //   const response = await axios.get('http://127.0.0.1:8000/api/music/', getallSongs);
    //   if (response.status === 201) {
    //     await getallSongs();
    //   };
    // }

    return (
        <div>
            <h3 className='get-song'>All The Mewsic</h3>
            <MusicButton />
            {props.parentEntries.map(song => <SongPresenter song={song} key={song.id}/>)}
        </div>
      )
} 
export default GetSongs;



//            {props.parentEntries.filter(song => ).map(song => <SongPresenter song={song} key={song.id}/>)}


