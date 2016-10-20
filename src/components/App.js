import React from 'react';
import MP3Loader from './Mp3Loader'
import {handleFileSelect} from '../helpers/FileLoader'

const App = () => (
  <div>
    <MP3Loader uploadClick={(e) => handleFileSelect(e)} />
  </div>
)

export default App

