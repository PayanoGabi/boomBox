import React, { useState } from 'react';
import Stereo from './stereo.js';
import Player from './frame-player.js'
import YoutubePlayer from './YoutubePlayer.js';
import TrlPlayer from './trl-player.js';

function App() {
  return (
    <>
      <React.StrictMode>
      <Stereo />
      <Player/>
      <Stereo />
      <TrlPlayer/>
      <YoutubePlayer />
      </React.StrictMode>
    </>
  
  )
}

export default App;