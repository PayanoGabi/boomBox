import React, { useState } from 'react';
import Stereo from './stereo.js';
import Player from './frame-player.js'
import YoutubePlayer from './YoutubePlayer.js';

function App() {
  return (
    <>
      <React.StrictMode>
      <Stereo />
      <Player/>
      <YoutubePlayer />
      </React.StrictMode>
    </>
  
  )
}

export default App;