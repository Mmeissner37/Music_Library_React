import React, { useEffect, useState } from "react";
import axios from "axios";
import SongPresenter from "./SongPresenter/SongPresenter";




const SearchSong = ({searchForSong}) => {
    // const [song, setSongs] = useState([]);
    // const [title, setTitle] = useState([]);
    // useEffect(() => {
        // searchForSong();
    // })
    
    function handleSubmit(event) {
        event.preventDefault();
    }

    async function filterSong(search) {
        let response = await axios.get('http://127.0.0.1:8000/api/music/', search);
        searchForSong()
    }

    return ( 
        <div>
            <h3>Search for songs</h3>
            <form>
                <input type='text' />
                
            </form>
        </div>
        
        // <form onSubmit={handleSubmit}>
        //     <label className="search">Search</label>
        //     <input type='text' value={'userInput'} /><br></br>
        //     <button type='submit'>Search</button>
        // </form>
     );
}
 
export default SearchSong;

// {filterSong.filter(song => 
//     song.includes(song.title)).map(song => <SongPresenter song={song} key={song.id}/>)}
// <button onClick={searchForSong}>Search</button>





// <div>
// <h3 className='get-song'>All The Mewsic</h3>
// <MusicButton />
// {props.parentEntries.map(song => <SongPresenter song={song} key={song.id}/>)}
// </div>



// // import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MusicButton = (props) => {
    
//     const [songs, setSongs] = useState([]);

//     useEffect(() => {
//         getAllSongs();
//     }, []);

//     async function getAllSongs(){
//         const response = await axios.get('http://127.0.0.1:8000/api/music/');
//     // if (response.status === 201) {
//     //   await getAllSongs();
//     // };
//         setSongs(response.data)
//     }

//     return ( 
//         <button onClick={() => getAllSongs()}>Show Me the Mewsic!</button>
//     );
// }
 