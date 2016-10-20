import { combineReducers } from 'redux'
import { uploadedSongReducer } from './reducers'

const Controllux = combineReducers({
  uploadedSong: uploadedSongReducer
})

export default Controllux
