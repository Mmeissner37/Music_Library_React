import React, { useEffect, useState } from "react";
import '../App.css'


const SearchSong = ({filterSongs}) => {
    const [searchInput, setSearchInput] = useState("")
    function handleSubmit(event) {
        debugger
        event.preventDefault();
        filterSongs(searchInput)
    }

    return ( 
        <div>
            <div className="search-header">
                <h3>Search Meowsterpieces</h3>
            </div>
            <div className="search-song">
                <form onSubmit={handleSubmit}>
                    <label className="search">Search</label>
                    <input onChange={(event)=> setSearchInput(event.target.value)} type='text' placeholder="Search Songs" /><br></br>
                    <br></br>
                    <button className="searchbutton" type='submit'>Find the Toebeans</button>
                </form>
            </div>

        </div>
     );
}
 
export default SearchSong;

// {searchForSong.filter(includes(song.title)).map(song => <SongPresenter song={song} key={song.id}/>)}

// {filterSong.filter(song => 
//     song.includes(song.title)).map(song => <SongPresenter song={song} key={song.id}/>)}



