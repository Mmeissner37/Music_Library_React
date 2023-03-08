import React, { useEffect } from "react";
import axios from "axios";


const SearchSong = ({searchForSong}) => {
    //const [userInput] = useState([])
    
    function handleSubmit(event) {
        event.preventDefault();
    }

    async function filterSong(search) {
        let response = await axios.get('http://127.0.0.1:8000/api/music/', search);
        searchForSong()
    }

    return ( 
        <form>
            <input type='search' />
        </form>
        
        // <form onSubmit={handleSubmit}>
        //     <label className="search">Search</label>
        //     <input type='text' value={'userInput'} /><br></br>
        //     <button type='submit'>Search</button>
        // </form>
     );
}
 
export default SearchSong;


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
 