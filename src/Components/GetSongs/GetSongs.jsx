import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetSongs = (props) => {
    const [song, setSongs] = useState([
        {
            title: song.title, 
            artist: song.artist, 
            album: song.album, 
            release: song.relase,
            genre: song.genre}]);

    // useEffect(() => {
    //   getallSongs();
    // }, []);
    
    // async function getallSongs(){
    //   const response = await axios.get('http://127.0.0.1:8000/api/music/');
    //   console.log(response.data);
    //   setSongs(response.data);
    //   <button onClick={() => getallSongs(getallSongs)}>Get All Songs</button>
    // }


    return (
        <div>
            <h3 className='get-song'>All The Mewsic</h3>
            {props.parentEntries.map((song) =>
                    <ul key={song}>
                        <ul>{song.title}</ul>
                        <ul>{song.artist}</ul>
                        <ul>{song.album}</ul>
                        <ul>{song.release}</ul>
                        <ul>{song.genre}</ul>
                    </ul>
                )};
        </div>


        

    )
}


export default GetSongs;






