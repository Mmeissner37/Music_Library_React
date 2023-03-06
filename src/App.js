import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import CreateSong from './Components/CreateSong/CreateSong';
import GetSongs from './Components/GetSongs/GetSongs';
import './App.css';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data)
  }


  return (
    <div>
      <div className='nav-bar'>
        <NavBar />
      <div className='whole-page'>
        <div className='create-form'>
          <CreateSong />
        </div>
        <div className='search-song'> 

        </div>
        <div className='get-songs'>
          <GetSongs parentEntries={songs} />
          <button onClick={() => getAllSongs()}>Get All Songs</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
