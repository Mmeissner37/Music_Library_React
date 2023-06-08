import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MusicButton = (props) => {
    
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getAllSongs();
    }, []);

    async function getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/api/music/');
        setSongs(response.data)
    }

    return ( 
        <button onClick={() => getAllSongs()}>Show Me the Mewsic!</button>
    );
}
 
export default MusicButton;
