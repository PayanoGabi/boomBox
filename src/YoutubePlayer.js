import React from 'react';

export default function YoutubePlayer(){
    return(
          <form>
          <label>Chrome Extension - Historical Speeches:
            <p>Enter Artist Name</p>
            <input label="name-artist" placeholder="Enter Artist Name" type="text"></input>
            <button type="submit">Old Interviews</button>
            <button type="submit">Funkadelic</button>
            <button type="submit">Comdedy</button>
            <button type="submit">Focus</button>
          </label>
        </form>   
    )
}