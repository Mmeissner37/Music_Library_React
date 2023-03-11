import React, { useEffect, useState } from "react";
import axios from "axios";
import SongPresenter from "./SongPresenter/SongPresenter";



const SearchSong = ({searchForSong}) => {
    // const [song, setSongs] = useState([]);
    // useEffect(() => {
    //     searchForSong();
    // })
    
    function handleSubmit(event) {
        event.preventDefault();
    }

    // async function filterSong(search) {
    //     let response = await axios.get('http://127.0.0.1:8000/api/music/', search);
    //     searchForSong()
    // }

    return ( 
        <div>
            <h3>Search Title of Meowsterpieces</h3>
            <form onSubmit={handleSubmit}>
                <label className="search">Search</label>
                <input type='text' placeholder="Search Title" /><br></br>
                <br></br>
                <button type='submit'>Find the Toebeans</button>
            </form>
        </div>
        
        // <form onSubmit={handleSubmit}>
        //     <label className="search">Search</label>
        //     <input type='text' value={'userInput'} /><br></br>

        // </form>
     );
}
 
export default SearchSong;

// {searchForSong.filter(includes(song.title)).map(song => <SongPresenter song={song} key={song.id}/>)}

// {filterSong.filter(song => 
//     song.includes(song.title)).map(song => <SongPresenter song={song} key={song.id}/>)}



