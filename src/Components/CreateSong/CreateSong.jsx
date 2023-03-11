import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CreateSong = ({getAllSongs}) => {
    //const [songs, setSongs] = useState([]);
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release, setRelease] = useState('');
    const [genre, setGenre] = useState(''); 

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist, 
            album: album,
            release_date: release,
            genre: genre,
        }
        createSong(newSong)
    }
 
    async function createSong(newSong) {
        let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
        getAllSongs()
    }

    return ( 
        <form onSubmit={handleSubmit} className='new-song'>
            <h3 className='new-song'>Let's Make Mew Song: </h3>
            <label className='song-form'>Title: </label>
            <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/><br></br>
            <label className='song-form'>Arist: </label>
            <input type='text' value ={artist} onChange={(event) => setArtist(event.target.value)}/><br></br>
            <label className='song-form'>Album: </label>
            <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/><br></br>
            <label className='song-form'>Release Date: </label>
            <input type='date' value={release} onChange={(event) => setRelease(event.target.value)}/><br></br>
            <label className='song-form'>Genre: </label>
            <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/><br></br>
            <button type='submit' onClick={getAllSongs}>Add Purrfection!</button>
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
