import React from 'react'
import Wavesurfer from './Wavesurfer'

const Mp3Loader = (props) => (
  <div>
    <input type="file" onChange={props.uploadClick}/>
  </div>
  )


export default Mp3Loader



