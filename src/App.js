import React, { useState } from 'react';
import Stereo from './stereo.js';
import Player from './frame-player.js'
import YoutubePlayer from './YoutubePlayer.js';
import TrlPlayer from './trl-player.js';
import RightBtn from './right-btn.js';
import LeftBtn from './left-btn.js';
import { findByLabelText } from '@testing-library/react';
import HandleFetch from './fetch.js';

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};
const bstyle = {
  color: "#D58278",
  backgroundColor: "#D58278",
  fontFamily: "Arial",
  display: "grid",
   gridAutoColumns: "1fr", 
    gridTemplateColumns: "1fr 1fr 1fr", 
    gridTemplateRows: "1fr", 
    gap: "0px 0px", 
    gridTemplateAreas: 
      "main_left main main_right",
     alignItems: "center", 
     margin: "0", 
};
function App() {
  return (
    <>
    <div className="container" style={bstyle}>
      <div className="main_left">
      <LeftBtn />
      </div>
      <div className="main">
      <React.StrictMode>
        <HandleFetch/>
        <Stereo />
        <Player />
        <Stereo />
        <TrlPlayer />
        <YoutubePlayer />
        <h1 style={mystyle}> Test </h1>
      </React.StrictMode>
      </div>
      <div className="main_right">
      <RightBtn />
      </div>
    </div>
  </>
  )
}

export default App;