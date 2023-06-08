import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import CreateSong from './Components/CreateSong/CreateSong';
import GetSongs from './Components/GetSongs/GetSongs';
import './App.css';
import SearchSong from './Components/SearchSong';


function App() {
  
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data)
  }

  function filterSongs(searchInput){
    let filteredResults = songs.filter((el)=>{
      if (el.title.includes(searchInput)) {
        return true;
      }
    });
    setSongs(filteredResults)
  }

  return (
    <div className='container-fluid'>
      <div className='whole-page'>
        <div className='nav-bar'>
            <NavBar />
          </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='create-form'>
              <CreateSong getAllSongs={getAllSongs}/>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='search-song'> 
              <SearchSong filterSongs={filterSongs}/>
            </div>
            <div className='get-songs'>
              <div row justify-content-center>
                <GetSongs parentEntries={songs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
