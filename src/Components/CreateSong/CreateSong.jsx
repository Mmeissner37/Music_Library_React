import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CreateSong = (props) => {

    const [songs, createSong] = useState([]);
    const [title, setTitle] = useState('');
    const [artist, setArist] = useState('');
    const [album, setAlbum] = useState('');
    const [release, setRelease] = useState(0);
    const [genre, setGenre] = useState(''); 

    useEffect(() => {
        createNewSong();
    }, []); 
    
    async function createNewSong() {
        const response = await axios.post('http://127.0.0.1:8000/api/music/');
        console.log(response.data);
        createSong(response.data);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let createSong = createNewSong
    }

    return ( 
        <form onSubmit={handleSubmit} className='new-song'>
            <h3 className='new-song'>Create Mew Song: </h3>
            <label className='song-form'>Title: </label>
            <input type='text' value={title} /><br></br>
            <label className='song-form'>Arist: </label>
            <input type='text' value ={artist} /><br></br>
            <label className='song-form'>Album: </label>
            <input type='text' value={album} /><br></br>
            <label className='song-form'>Release Date: </label>
            <input type='date' value={release} /><br></br>
            <label className='song-form'>Genre: </label>
            <input type='text' value={genre} /><br></br>
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
