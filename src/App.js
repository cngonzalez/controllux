import React from 'react';
import './App.css';
import MP3Loader from './components/Mp3Loader'
import {handleFileSelect, handlePlayClick} from './helpers/FileLoader'
import PlayButton from './components/PlayButton'

const App = () => (
  <div>
    <MP3Loader uploadClick={(e) => handleFileSelect(e)} />
    <PlayButton onClick={() => handlePlayClick()} /> 
  </div>
)

export default App

