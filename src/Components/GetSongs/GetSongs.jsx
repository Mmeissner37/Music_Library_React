import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetSongs = (props) => {
    const [song, setSongs] = useState([]);

    useEffect(() => {
      getallSongs();
    }, []);
    
    async function getallSongs(){
      const response = await axios.get('http://127.0.0.1:8000/api/music/');
      console.log(response.data);
      setSongs(response.data);
      <button onClick={() => getallSongs(getallSongs)}>Get All Songs</button>
    }


    return (
        <div>
            <h3 className='get-song'>All The Mewsic</h3>
            {props.parentEntries.map((song) =>
                    <ul key={song}>
                        <ul>Title: {song.title}</ul>
                        <ul>Artist: {song.artist}</ul>
                        <ul>Album: {song.album}</ul>
                        <ul>Release Date: {song.release}</ul>
                        <ul>Genre: {song.genre}</ul>
                    </ul>
                )}
        </div>


        

    )
}


export default GetSongs;






