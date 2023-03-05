import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import CreateSong from './Components/CreateSong/CreateSong';



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
  //<button onClick={() => getAllSongs()}>Get All Songs</button>


  return (
    <div>
      <NavBar />
      <CreateSong />

    </div>
  );
}

export default App;
