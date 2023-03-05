import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CreateSong = (props) => {

    const [songs, createSong] = useState([]);

    useEffect(() => {
        createNewSong();
    }, []); 
    
    async function createNewSong() {
        const response = await axios.put('http://127.0.0.1:8000/api/music/');
        console.log(response.data);
        createSong(response.data);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let createSong = createNewSong
    }

    return ( 
        <form onSubmit={handleSubmit} className='new-song'>
            <h3>Create New Song: </h3>
            <label className='song-form'>Title: </label>
            <input type='text' value='' /><br></br>
            <label className='song-form'>Arist: </label>
            <input type='text' value ='' /><br></br>
            <label className='song-form'>Album: </label>
            <input type='text' value='' /><br></br>
            <label className='song-form'>Release Date: </label>
            <input type='date' value='' /><br></br>
            <label className='song-form'>Genre: </label>
            <input type='text' value='' /><br></br>
            <button type='submit'>Create Song</button>
        </form>
     );
}
 
export default CreateSong;






// const [songs, setSongs] = useState([]);

// useEffect(() => {
//   getAllSongs();
// }, []);

// async function getAllSongs(){
//   const response = await axios.get('http://127.0.0.1:8000/api/music/');
//   console.log(response.data);
//   setSongs(response.data)
// }
