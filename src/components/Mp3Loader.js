import React from 'react'
import { connect } from 'react-redux'
import { uploadFile } from '../actions/FileActions'

let  Mp3Loader = ({dispatch}) => (
  <div>
    <input type="file" onChange={(e) => dispatch(uploadFile(e.target.files[0]))}/>
  </div>
  )

Mp3Loader = connect()(Mp3Loader)


export default Mp3Loader



